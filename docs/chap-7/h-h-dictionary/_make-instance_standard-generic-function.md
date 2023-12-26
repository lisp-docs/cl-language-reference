**make-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>—a *fresh instance* of *class class*. 







 



 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the given <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



If the second of the above <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> is selected, that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> invokes <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> on the arguments (find-class <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>) and *initargs*. 



The initialization arguments are checked within <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>, <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



