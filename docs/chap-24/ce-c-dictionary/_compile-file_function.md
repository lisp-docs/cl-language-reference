**compile-file** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> *input-file* &amp;key *output-file verbose* 



*print external-format* 



*→ output-truename, warnings-p, failure-p* 



**Arguments and Values:** 



*input-file*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . (Default fillers for unspecified components are taken from <DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>.) 



*output-file*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



*verbose*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"compile-verbose"}><b>\*compile-verbose\*</b></DictionaryLink>. 



*print*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*compile-print\***. 



*external-format*—an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> . The default is :default. 



*output-truename*—a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> (the <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> of the output <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>), or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*warnings-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*failure-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> transforms the contents of the file specified by *input-file* into <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> binary data which are placed in the file specified by *output-file*. 



The <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> to which *input-file* refers should be a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. *output-file* can be used to specify an output <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>; the actual <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> to which <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> will be output is computed as if by calling <DictionaryLink  term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink>. 



If *input-file* or *output-file* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, it is translated into a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> as if by calling <DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>. 



If *verbose* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> prints a message in the form of a comment (*i.e.*, with a leading <GlossaryTerm  term={"semicolon"}><i>semicolon</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm> indicating what <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is being *compiled* and other useful information. If *verbose* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> does not print this information. 



If *print* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, information about <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm> in the file being compiled is printed to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. Exactly what is printed is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but nevertheless some information is printed. If *print* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, no information is printed. 



The *external-format* specifies the <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> to be used when opening the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>; see the System 



 



 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> and <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> must cooperate in such a way that the resulting <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> can be *loaded* without specifying an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> anew; see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> binds <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> and <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> to the values they held before processing the file. 



<DictionaryLink  term={"compile-file-truename"}><b>\*compile-file-truename\*</b></DictionaryLink> is bound by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> to hold the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> of the file being compiled. 



<DictionaryLink  term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></DictionaryLink> is bound by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> to hold a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> denoted by the first argu ment to <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, merged against the defaults; that is, (pathname (merge-pathnames *input-file*)). 



The compiled <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> contained in the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> become available for use when the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is *loaded* into Lisp. Any function definition that is processed by the compiler, including #’(lambda ...) forms and local function definitions made by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> and <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> forms, result in an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> returned by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, *output-truename*, is the <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> of the output file, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the file could not be created. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *warnings-p*, is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> were detected by the compiler, and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> otherwise. 



The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, *failure-p*, is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if no <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> (other than <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>) were detected by the compiler, and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> otherwise. 



For general information about how <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> are processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> , see Section 3.2.3 (File Compilation). 



<GlossaryTerm  term={"program"}><i>Programs</i></GlossaryTerm> to be compiled by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> must only contain <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>; for details on such <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, see Section 3.2.4 (Literal Objects in Compiled Files). For information on how to extend the set of <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm>, see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"make-load-form"}><b>make-load-form</b></DictionaryLink> and Section 3.2.4.4 (Additional Constraints on Externalizable Objects). 



**Affected By:** 



**\*error-output\***, **\*standard-output\***, <DictionaryLink  term={"compile-verbose"}><b>\*compile-verbose\*</b></DictionaryLink>, **\*compile-print\*** 



The computer’s file system. 



**Exceptional Situations:** 



For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Situations in the Compiler). 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if (wild-pathname-p *input-file*) returns true. 



If either the attempt to open the <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm> for input or the attempt to open the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> for output fails, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 







 



 



**See Also:** 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



