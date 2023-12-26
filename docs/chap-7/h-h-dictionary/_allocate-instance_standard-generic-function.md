**allocate-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> &amp;rest *initargs* &amp;key &amp;allow-other-keys → new-instance 



**Method Signatures:** 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*initargs*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"keyword/value pair"}><i>keyword/value pairs</i></GlossaryTerm> (initialization argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>). *new-instance*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 







 



 



**Description:** 



The generic function <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> creates and returns a new instance of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, without initializing it. When the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"standard class"}><i>standard class</i></GlossaryTerm>, this means that the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>; when the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"structure class"}><i>structure class</i></GlossaryTerm>, this means the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>’ <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are unspecified. 



The caller of <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is expected to have already checked the initialization arguments. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is called by <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> to <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is unspecified. This capability might be added by the *Metaobject Protocol*. 



