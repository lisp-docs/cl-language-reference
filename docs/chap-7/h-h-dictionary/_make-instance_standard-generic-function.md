**make-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> <ClLinks  term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>, or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—a *fresh instance* of *class class*. 







 



 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> creates and returns a new <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the given <ClLinks  term={"class"}><i>class</i></ClLinks>. 



If the second of the above <ClLinks  term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks  term={"method"}><i>method</i></ClLinks> invokes <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> on the arguments (find-class <ClLinks  term={"class"}><i>class</i></ClLinks>) and *initargs*. 



The initialization arguments are checked within <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"class-of"}><b>class-of</b></ClLinks>, <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks>, <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, Section 7.1 (Object Creation and Initialization) 



