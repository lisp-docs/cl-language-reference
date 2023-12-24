**compile-file** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> *input-file* &amp;key *output-file verbose* 



*print external-format* 



*→ output-truename, warnings-p, failure-p* 



**Arguments and Values:** 



*input-file*—a *pathname designator* . (Default fillers for unspecified components are taken from <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>.) 



*output-file*—a *pathname designator* . The default is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



*verbose*—a *generalized boolean*. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"compile-verbose"}><b>\*compile-verbose\*</b></ClLinks>. 



*print*—a *generalized boolean*. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*compile-print\***. 



*external-format*—an *external file format designator* . The default is :default. 



*output-truename*—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> (the <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> of the output <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>), or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*warnings-p*—a *generalized boolean*. 



*failure-p*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> transforms the contents of the file specified by *input-file* into <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> binary data which are placed in the file specified by *output-file*. 



The <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> to which *input-file* refers should be a *source file*. *output-file* can be used to specify an output <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>; the actual <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> of the *compiled file* to which *compiled code* will be output is computed as if by calling <ClLinks styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks>. 



If *input-file* or *output-file* is a *logical pathname*, it is translated into a *physical pathname* as if by calling <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. 



If *verbose* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> prints a message in the form of a comment (*i.e.*, with a leading <ClLinks styled={true} term={"semicolon"}><i>semicolon</i></ClLinks>) to *standard output* indicating what <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is being *compiled* and other useful information. If *verbose* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> does not print this information. 



If *print* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, information about *top level forms* in the file being compiled is printed to *standard output*. Exactly what is printed is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but nevertheless some information is printed. If *print* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, no information is printed. 



The *external-format* specifies the *external file format* to be used when opening the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>; see the System 



 



 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> and <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> must cooperate in such a way that the resulting *compiled file* can be *loaded* without specifying an *external file format* anew; see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> binds <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> and <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> to the values they held before processing the file. 



<ClLinks styled={true} term={"compile-file-truename"}><b>\*compile-file-truename\*</b></ClLinks> is bound by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> to hold the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> of the file being compiled. 



<ClLinks styled={true} term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></ClLinks> is bound by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> to hold a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> denoted by the first argu ment to <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, merged against the defaults; that is, (pathname (merge-pathnames *input-file*)). 



The compiled <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> contained in the *compiled file* become available for use when the *compiled file* is *loaded* into Lisp. Any function definition that is processed by the compiler, including #’(lambda ...) forms and local function definitions made by <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks>, <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks> and <ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> forms, result in an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>. 



The *primary value* returned by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, *output-truename*, is the <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> of the output file, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the file could not be created. 



The *secondary value*, *warnings-p*, is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if no <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> or <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks> were detected by the compiler, and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> otherwise. 



The *tertiary value*, *failure-p*, is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if no <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> or <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks> (other than <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks>) were detected by the compiler, and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> otherwise. 



For general information about how <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> are processed by the *file compiler* , see Section 3.2.3 (File Compilation). 



<ClLinks styled={true} term={"program"}><i>Programs</i></ClLinks> to be compiled by the *file compiler* must only contain *externalizable objects*; for details on such <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, see Section 3.2.4 (Literal Objects in Compiled Files). For information on how to extend the set of *externalizable objects*, see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> and Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



**Affected By:** 



**\*error-output\***, **\*standard-output\***, <ClLinks styled={true} term={"compile-verbose"}><b>\*compile-verbose\*</b></ClLinks>, **\*compile-print\*** 



The computer’s file system. 



**Exceptional Situations:** 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Situations in the Compiler). 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if (wild-pathname-p *input-file*) returns true. 



If either the attempt to open the *source file* for input or the attempt to open the *compiled file* for output fails, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 







 



 



**See Also:** 



<ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>, <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



