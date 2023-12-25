**compile-file** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> *input-file* &amp;key *output-file verbose* 



*print external-format* 



*→ output-truename, warnings-p, failure-p* 



**Arguments and Values:** 



*input-file*—a *pathname designator* . (Default fillers for unspecified components are taken from <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>.) 



*output-file*—a *pathname designator* . The default is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



*verbose*—a *generalized boolean*. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"compile-verbose"}><b>\*compile-verbose\*</b></DictionaryLink>. 



*print*—a *generalized boolean*. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*compile-print\***. 



*external-format*—an *external file format designator* . The default is :default. 



*output-truename*—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> (the <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> of the output <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>), or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*warnings-p*—a *generalized boolean*. 



*failure-p*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> transforms the contents of the file specified by *input-file* into <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> binary data which are placed in the file specified by *output-file*. 



The <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> to which *input-file* refers should be a *source file*. *output-file* can be used to specify an output <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>; the actual <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> of the *compiled file* to which *compiled code* will be output is computed as if by calling <DictionaryLink styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink>. 



If *input-file* or *output-file* is a *logical pathname*, it is translated into a *physical pathname* as if by calling <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>. 



If *verbose* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> prints a message in the form of a comment (*i.e.*, with a leading <GlossaryTerm styled={true} term={"semicolon"}><i>semicolon</i></GlossaryTerm>) to *standard output* indicating what <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is being *compiled* and other useful information. If *verbose* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> does not print this information. 



If *print* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, information about *top level forms* in the file being compiled is printed to *standard output*. Exactly what is printed is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but nevertheless some information is printed. If *print* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, no information is printed. 



The *external-format* specifies the *external file format* to be used when opening the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>; see the System 



 



 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>. <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> and <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> must cooperate in such a way that the resulting *compiled file* can be *loaded* without specifying an *external file format* anew; see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> binds <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> to the values they held before processing the file. 



<DictionaryLink styled={true} term={"compile-file-truename"}><b>\*compile-file-truename\*</b></DictionaryLink> is bound by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> to hold the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> of the file being compiled. 



<DictionaryLink styled={true} term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></DictionaryLink> is bound by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> to hold a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> denoted by the first argu ment to <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, merged against the defaults; that is, (pathname (merge-pathnames *input-file*)). 



The compiled <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> contained in the *compiled file* become available for use when the *compiled file* is *loaded* into Lisp. Any function definition that is processed by the compiler, including #’(lambda ...) forms and local function definitions made by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> and <DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> forms, result in an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. 



The *primary value* returned by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, *output-truename*, is the <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> of the output file, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the file could not be created. 



The *secondary value*, *warnings-p*, is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> were detected by the compiler, and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> otherwise. 



The *tertiary value*, *failure-p*, is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> (other than <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>) were detected by the compiler, and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> otherwise. 



For general information about how <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> are processed by the *file compiler* , see Section 3.2.3 (File Compilation). 



<GlossaryTerm styled={true} term={"program"}><i>Programs</i></GlossaryTerm> to be compiled by the *file compiler* must only contain *externalizable objects*; for details on such <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, see Section 3.2.4 (Literal Objects in Compiled Files). For information on how to extend the set of *externalizable objects*, see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> and Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



**Affected By:** 



**\*error-output\***, **\*standard-output\***, <DictionaryLink styled={true} term={"compile-verbose"}><b>\*compile-verbose\*</b></DictionaryLink>, **\*compile-print\*** 



The computer’s file system. 



**Exceptional Situations:** 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Situations in the Compiler). 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if (wild-pathname-p *input-file*) returns true. 



If either the attempt to open the *source file* for input or the attempt to open the *compiled file* for output fails, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



