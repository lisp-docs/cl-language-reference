**load** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> *filespec* &amp;key *verbose print* 



*if-does-not-exist external-format* 



*→ generalized-boolean* 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or a *pathname designator* . The default is taken from 



<DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. 



*verbose*—a *generalized boolean*. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></DictionaryLink>. 



*print*—a *generalized boolean*. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*load-print\***. 



*if-does-not-exist*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*external-format*—an *external file format designator* . The default is :default. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> <GlossaryTerm styled={true} term={"load"}><i>loads</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by *filespec* into the Lisp environment. 



The manner in which a *source file* is distinguished from a *compiled file* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. If the file specification is not complete and both a *source file* and a *compiled file* exist which might match, then which of those files <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> selects is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



If *filespec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> determines what kind of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> it is and loads directly from the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. If *filespec* is a *logical pathname*, it is translated into a *physical pathname* as if by calling <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> sequentially executes each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> it encounters in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by *filespec*. If the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is a *source file* and the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> chooses to perform *implicit compilation*, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> must recognize *top level forms* as described in Section 3.2.3.1 (Processing of Top Level Forms) and arrange for each *top level form* to be executed before beginning *implicit compilation* of the next. (Note, however, that processing of <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> is controlled by the :execute situation.) 







 



 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> 



If *verbose* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> prints a message in the form of a comment (*i.e.*, with a leading <GlossaryTerm styled={true} term={"semicolon"}><i>semicolon</i></GlossaryTerm>) to *standard output* indicating what <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is being *loaded* and other useful information. If *verbose* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> does not print this information. 



If *print* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> incrementally prints information to *standard output* showing the progress of the *loading* process. For a *source file*, this information might mean printing the *values yielded* by each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> as soon as those <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are returned. For a *compiled file*, what is printed might not reflect precisely the contents of the *source file*, but some information is generally printed. If *print* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> does not print this information. 



If the file named by *filespec* is successfully loaded, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



If the file does not exist, the specific action taken depends on *if-does-not-exist*: if it is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>; otherwise, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> signals an error. 



The *external-format* specifies the *external file format* to be used when opening the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> (see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>), except that when the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by *filespec* is a *compiled file*, the *external-format* is ignored. <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> and <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> cooperate in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> way to assure the preservation of the <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> referred to in the *source file* at the time the *source file* was processed by the *file compiler* under a given *external file format*, regardless of the value of *external-format* at the time the *compiled file* is *loaded*. 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> binds <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> to the values they held before *loading* the file. <DictionaryLink styled={true} term={"load-truename"}><b>\*load-truename\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> to hold the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> of the file being *loaded*. 



**\*load-pathname\*** is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> to hold a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that represents *filespec* merged against the defaults. That is, (pathname (merge-pathnames *filespec*)). 



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



If :if-does-not-exist is supplied and is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, or is not supplied, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> if the file named by *filespec* does not exist, or if the *file system* cannot perform the requested operation. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if (wild-pathname-p *filespec*) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, <DictionaryLink styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as File names) 



