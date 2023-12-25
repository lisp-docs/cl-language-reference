**allocate-instance** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ new-instance* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



*initargs*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *keyword/value pairs* (initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>). *new-instance*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 







 



 



**Description:** 



The generic function <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> creates and returns a new instance of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, without initializing it. When the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a *standard class*, this means that the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>; when the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a *structure class*, this means the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>’ <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are unspecified. 



The caller of <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is expected to have already checked the initialization arguments. 



The *generic function* <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is called by <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> to <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is unspecified. This capability might be added by the *Metaobject Protocol*. 



