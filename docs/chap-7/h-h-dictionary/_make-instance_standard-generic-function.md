**make-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> <ClLinks  term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>, or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>—a *fresh instance* of *class class*. 







 



 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the given <ClLinks  term={"class"}><i>class</i></ClLinks>. 



If the second of the above <ClLinks  term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks  term={"method"}><i>method</i></ClLinks> invokes <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> on the arguments (find-class <ClLinks  term={"class"}><i>class</i></ClLinks>) and *initargs*. 



The initialization arguments are checked within <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>, <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



