**make-instance** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ instance* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



*initargs*—an *initialization argument list*. 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>—a *fresh instance* of *class class*. 







 



 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



If the second of the above <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> is selected, that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> invokes <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> on the arguments (find-class <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) and *initargs*. 



The initialization arguments are checked within <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>. 



The *generic function* <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>, <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



