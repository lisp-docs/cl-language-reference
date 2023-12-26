**load** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> *filespec* &amp;key *verbose print* 



*if-does-not-exist external-format* 



→ generalized-boolean 



**Arguments and Values:** 



*filespec*—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is taken from 



<ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. 



*verbose*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></ClLinks>. 



*print*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*load-print\***. 



*if-does-not-exist*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*external-format*—an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> . The default is :default. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> <ClLinks styled={true} term={"load"}><i>loads</i></ClLinks> the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec* into the Lisp environment. 



The manner in which a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> is distinguished from a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. If the file specification is not complete and both a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> exist which might match, then which of those files <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> selects is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



If *filespec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> determines what kind of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> it is and loads directly from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. If *filespec* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, it is translated into a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> as if by calling <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> sequentially executes each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> it encounters in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec*. If the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> and the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> chooses to perform <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> must recognize <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm> as described in Section 3.2.3.1 (Processing of Top Level Forms) and arrange for each <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> to be executed before beginning <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm> of the next. (Note, however, that processing of <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> by <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> is controlled by the :execute situation.) 







 



 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> 



If *verbose* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> prints a message in the form of a comment (*i.e.*, with a leading <ClLinks styled={true} term={"semicolon"}><i>semicolon</i></ClLinks>) to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm> indicating what <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is being *loaded* and other useful information. If *verbose* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> does not print this information. 



If *print* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> incrementally prints information to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm> showing the progress of the *loading* process. For a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, this information might mean printing the *values yielded* by each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> as soon as those <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are returned. For a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>, what is printed might not reflect precisely the contents of the <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, but some information is generally printed. If *print* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> does not print this information. 



If the file named by *filespec* is successfully loaded, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



If the file does not exist, the specific action taken depends on *if-does-not-exist*: if it is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>; otherwise, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> signals an error. 



The *external-format* specifies the <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> to be used when opening the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> (see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>), except that when the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec* is a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>, the *external-format* is ignored. <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> and <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> cooperate in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> way to assure the preservation of the <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> referred to in the <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> at the time the <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> was processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> under a given <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm>, regardless of the value of *external-format* at the time the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is *loaded*. 



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



If :if-does-not-exist is supplied and is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, or is not supplied, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> if the file named by *filespec* does not exist, or if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if (wild-pathname-p *filespec*) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, <ClLinks styled={true} term={"load-verbose"}><b>\*load-verbose\*</b></ClLinks>, <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as File names) 



