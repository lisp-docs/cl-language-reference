**compile-file** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> *input-file* &amp;key *output-file verbose* 



*print external-format* 



*→ output-truename, warnings-p, failure-p* 



**Arguments and Values:** 



*input-file*—a *pathname designator* . (Default fillers for unspecified components are taken from <ClLinks  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>.) 



*output-file*—a *pathname designator* . The default is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



*verbose*—a *generalized boolean*. The default is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"compile-verbose"}><b>\*compile-verbose\*</b></ClLinks>. 



*print*—a *generalized boolean*. The default is the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*compile-print\***. 



*external-format*—an *external file format designator* . The default is :default. 



*output-truename*—a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> (the <ClLinks  term={"truename"}><b>truename</b></ClLinks> of the output <ClLinks  term={"file"}><i>file</i></ClLinks>), or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*warnings-p*—a *generalized boolean*. 



*failure-p*—a *generalized boolean*. 



**Description:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> transforms the contents of the file specified by *input-file* into <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> binary data which are placed in the file specified by *output-file*. 



The <ClLinks  term={"file"}><i>file</i></ClLinks> to which *input-file* refers should be a *source file*. *output-file* can be used to specify an output <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>; the actual <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> of the *compiled file* to which *compiled code* will be output is computed as if by calling <ClLinks  term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks>. 



If *input-file* or *output-file* is a *logical pathname*, it is translated into a *physical pathname* as if by calling <ClLinks  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. 



If *verbose* is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> prints a message in the form of a comment (*i.e.*, with a leading <ClLinks  term={"semicolon"}><i>semicolon</i></ClLinks>) to *standard output* indicating what <ClLinks  term={"file"}><i>file</i></ClLinks> is being *compiled* and other useful information. If *verbose* is <ClLinks  term={"false"}><i>false</i></ClLinks>, <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> does not print this information. 



If *print* is <ClLinks  term={"true"}><i>true</i></ClLinks>, information about *top level forms* in the file being compiled is printed to *standard output*. Exactly what is printed is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but nevertheless some information is printed. If *print* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, no information is printed. 



The *external-format* specifies the *external file format* to be used when opening the <ClLinks  term={"file"}><i>file</i></ClLinks>; see the System 



 



 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> 



<ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"open"}><b>open</b></ClLinks>. <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> and <ClLinks  term={"load"}><b>load</b></ClLinks> must cooperate in such a way that the resulting *compiled file* can be *loaded* without specifying an *external file format* anew; see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"load"}><b>load</b></ClLinks>. 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> binds <ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> and <ClLinks  term={"package"}><b>\*package\*</b></ClLinks> to the values they held before processing the file. 



<ClLinks  term={"compile-file-truename"}><b>\*compile-file-truename\*</b></ClLinks> is bound by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> to hold the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> of the file being compiled. 



<ClLinks  term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></ClLinks> is bound by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> to hold a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> denoted by the first argu ment to <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, merged against the defaults; that is, (pathname (merge-pathnames *input-file*)). 



The compiled <ClLinks  term={"function"}><i>functions</i></ClLinks> contained in the *compiled file* become available for use when the *compiled file* is *loaded* into Lisp. Any function definition that is processed by the compiler, including #’(lambda ...) forms and local function definitions made by <ClLinks  term={"flet"}><b>flet</b></ClLinks>, <ClLinks  term={"labels"}><b>labels</b></ClLinks> and <ClLinks  term={"defun"}><b>defun</b></ClLinks> forms, result in an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>. 



The *primary value* returned by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, *output-truename*, is the <ClLinks  term={"truename"}><b>truename</b></ClLinks> of the output file, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the file could not be created. 



The *secondary value*, *warnings-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> or <ClLinks  term={"warning"}><b>warning</b></ClLinks> were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



The *tertiary value*, *failure-p*, is <ClLinks  term={"false"}><i>false</i></ClLinks> if no <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> or <ClLinks  term={"warning"}><b>warning</b></ClLinks> (other than <ClLinks  term={"style-warning"}><b>style-warning</b></ClLinks>) were detected by the compiler, and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



For general information about how <ClLinks  term={"file"}><i>files</i></ClLinks> are processed by the *file compiler* , see Section 3.2.3 (File Compilation). 



<ClLinks  term={"program"}><i>Programs</i></ClLinks> to be compiled by the *file compiler* must only contain *externalizable objects*; for details on such <ClLinks  term={"object"}><i>objects</i></ClLinks>, see Section 3.2.4 (Literal Objects in Compiled Files). For information on how to extend the set of *externalizable objects*, see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"make-load-form"}><b>make-load-form</b></ClLinks> and Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



**Affected By:** 



**\*error-output\***, **\*standard-output\***, <ClLinks  term={"compile-verbose"}><b>\*compile-verbose\*</b></ClLinks>, **\*compile-print\*** 



The computer’s file system. 



**Exceptional Situations:** 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Situations in the Compiler). 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> might be signaled if (wild-pathname-p *input-file*) returns true. 



If either the attempt to open the *source file* for input or the attempt to open the *compiled file* for output fails, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled. 







 



 



**See Also:** 



<ClLinks  term={"compile"}><b>compile</b></ClLinks>, <ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



