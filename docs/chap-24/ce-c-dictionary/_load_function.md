**load** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> *filespec* &amp;key *verbose print* 



*if-does-not-exist external-format* 



→ generalized-boolean 



**Arguments and Values:** 



*filespec*—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or a *pathname designator* . The default is taken from 



<ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. 



*verbose*—a *generalized boolean*. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></ClLinks>. 



*print*—a *generalized boolean*. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*load-print\***. 



*if-does-not-exist*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*external-format*—an *external file format designator* . The default is :default. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> <ClLinks styled={true} term={"load"}><i>loads</i></ClLinks> the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec* into the Lisp environment. 



The manner in which a *source file* is distinguished from a *compiled file* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. If the file specification is not complete and both a *source file* and a *compiled file* exist which might match, then which of those files <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> selects is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



If *filespec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> determines what kind of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> it is and loads directly from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If *filespec* is a *logical pathname*, it is translated into a *physical pathname* as if by calling <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> sequentially executes each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> it encounters in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec*. If the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is a *source file* and the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> chooses to perform *implicit compilation*, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> must recognize *top level forms* as described in Section 3.2.3.1 (Processing of Top Level Forms) and arrange for each *top level form* to be executed before beginning *implicit compilation* of the next. (Note, however, that processing of <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> by <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> is controlled by the :execute situation.) 







 



 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> 



If *verbose* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> prints a message in the form of a comment (*i.e.*, with a leading <ClLinks styled={true} term={"semicolon"}><i>semicolon</i></ClLinks>) to *standard output* indicating what <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is being *loaded* and other useful information. If *verbose* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> does not print this information. 



If *print* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> incrementally prints information to *standard output* showing the progress of the *loading* process. For a *source file*, this information might mean printing the *values yielded* by each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> as soon as those <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are returned. For a *compiled file*, what is printed might not reflect precisely the contents of the *source file*, but some information is generally printed. If *print* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> does not print this information. 



If the file named by *filespec* is successfully loaded, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



If the file does not exist, the specific action taken depends on *if-does-not-exist*: if it is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>; otherwise, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> signals an error. 



The *external-format* specifies the *external file format* to be used when opening the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> (see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>), except that when the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec* is a *compiled file*, the *external-format* is ignored. <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> and <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> cooperate in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> way to assure the preservation of the <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> referred to in the *source file* at the time the *source file* was processed by the *file compiler* under a given *external file format*, regardless of the value of *external-format* at the time the *compiled file* is *loaded*. 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> binds <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> and <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> to the values they held before *loading* the file. <ClLinks styled={true} term={"load-truename"}><b>\*load-truename\*</b></ClLinks> is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> by <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> to hold the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> of the file being *loaded*. 



**\*load-pathname\*** is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> by <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> to hold a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> that represents *filespec* merged against the defaults. That is, (pathname (merge-pathnames *filespec*)). 



**Examples:**
```lisp

					;Establish a data file... 
(with-open-file (str "data.in" :direction :output :if-exists :error) 
  (print 1 str) (print ’(setq a 888) str) t) 
→ T 
(load "data.in") → true 
a → 888 
(load (setq p (merge-pathnames "data.in")) :verbose t) 
					; Loading contents of file /fred/data.in 
					; Finished loading /fred/data.in 
→ true 
(load p :print t) 
					; Loading contents of file /fred/data.in 
					; 1 
					; 888 
					; Finished loading /fred/data.in 
→ true 
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



If :if-does-not-exist is supplied and is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, or is not supplied, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> if the file named by *filespec* does not exist, or if the *file system* cannot perform the requested operation. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if (wild-pathname-p *filespec*) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, <ClLinks styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></ClLinks>, <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as File names) 



