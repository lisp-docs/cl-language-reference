**load** *Function* 



**Syntax:** 



**load** *filespec* &key *verbose print* 



*if-does-not-exist external-format* 



*→ generalized-boolean* 



**Arguments and Values:** 



*filespec*—a *stream*, or a *pathname designator* . The default is taken from 



**\*default-pathname-defaults\***. 



*verbose*—a *generalized boolean*. The default is the *value* of **\*load-verbose\***. 



*print*—a *generalized boolean*. The default is the *value* of **\*load-print\***. 



*if-does-not-exist*—a *generalized boolean*. The default is *true*. 



*external-format*—an *external file format designator* . The default is :default. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**load** *loads* the *file* named by *filespec* into the Lisp environment. 



The manner in which a *source file* is distinguished from a *compiled file* is *implementation-dependent*. If the file specification is not complete and both a *source file* and a *compiled file* exist which might match, then which of those files **load** selects is *implementation-dependent*. 



If *filespec* is a *stream*, **load** determines what kind of *stream* it is and loads directly from the *stream*. If *filespec* is a *logical pathname*, it is translated into a *physical pathname* as if by calling **translate-logical-pathname**. 



**load** sequentially executes each *form* it encounters in the *file* named by *filespec*. If the *file* is a *source file* and the *implementation* chooses to perform *implicit compilation*, **load** must recognize *top level forms* as described in Section 3.2.3.1 (Processing of Top Level Forms) and arrange for each *top level form* to be executed before beginning *implicit compilation* of the next. (Note, however, that processing of **eval-when** *forms* by **load** is controlled by the :execute situation.) 







 



 



**load** 



If *verbose* is *true*, **load** prints a message in the form of a comment (*i.e.*, with a leading *semicolon*) to *standard output* indicating what *file* is being *loaded* and other useful information. If *verbose* is *false*, **load** does not print this information. 



If *print* is *true*, **load** incrementally prints information to *standard output* showing the progress of the *loading* process. For a *source file*, this information might mean printing the *values yielded* by each *form* in the *file* as soon as those *values* are returned. For a *compiled file*, what is printed might not reflect precisely the contents of the *source file*, but some information is generally printed. If *print* is *false*, **load** does not print this information. 



If the file named by *filespec* is successfully loaded, **load** returns *true*. 



If the file does not exist, the specific action taken depends on *if-does-not-exist*: if it is **nil**, **load** returns **nil**; otherwise, **load** signals an error. 



The *external-format* specifies the *external file format* to be used when opening the *file* (see the *function* **open**), except that when the *file* named by *filespec* is a *compiled file*, the *external-format* is ignored. **compile-file** and **load** cooperate in an *implementation-dependent* way to assure the preservation of the *similarity* of *characters* referred to in the *source file* at the time the *source file* was processed by the *file compiler* under a given *external file format*, regardless of the value of *external-format* at the time the *compiled file* is *loaded*. 



**load** binds **\*readtable\*** and **\*package\*** to the values they held before *loading* the file. **\*load-truename\*** is *bound* by **load** to hold the *truename* of the *pathname* of the file being *loaded*. 



**\*load-pathname\*** is *bound* by **load** to hold a *pathname* that represents *filespec* merged against the defaults. That is, (pathname (merge-pathnames *filespec*)). 



**Examples:**
```lisp
 



;Establish a data file... 



(with-open-file (str "data.in" :direction :output :if-exists :error) 



(print 1 str) (print ’(setq a 888) str) t) 



*→* T 



(load "data.in") *→ true* 



a *→* 888 



(load (setq p (merge-pathnames "data.in")) :verbose t) 



; Loading contents of file /fred/data.in 



; Finished loading /fred/data.in 



*→ true* 



(load p :print t) 



; Loading contents of file /fred/data.in 



; 1 



; 888 



; Finished loading /fred/data.in 



*→ true* 



System 



 



 



;––[Begin file SETUP]–– 



(in-package "MY-STUFF") 



(defmacro compile-truename () ‘’,\*compile-file-truename\*) 



(defvar \*my-compile-truename\* (compile-truename) "Just for debugging.") 



(defvar \*my-load-pathname\* \*load-pathname\*) 



(defun load-my-system () 



(dolist (module-name ’("FOO" "BAR" "BAZ")) 



(load (merge-pathnames module-name \*my-load-pathname\*)))) 



;––[End of file SETUP]–– 



(load "SETUP") 



(load-my-system) 




```
**Affected By:** 



The implementation, and the host computer’s file system. 



**Exceptional Situations:** 



If :if-does-not-exist is supplied and is *true*, or is not supplied, **load** signals an error of *type* **file-error** if the file named by *filespec* does not exist, or if the *file system* cannot perform the requested operation. 



An error of *type* **file-error** might be signaled if (wild-pathname-p *filespec*) returns *true*. 



**See Also:** 



**error**, **merge-pathnames**, **\*load-verbose\***, **\*default-pathname-defaults\***, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as File names) 



