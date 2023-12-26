**allocate-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> <ClLinks  term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → new-instance 



**Method Signatures:** 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) &amp;rest *initargs* 



<DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*initargs*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"keyword/value pair"}><i>keyword/value pairs</i></GlossaryTerm> (initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks>). *new-instance*—an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"class"}><i>class</i></ClLinks> is <ClLinks  term={"class"}><i>class</i></ClLinks>. 







 



 



**Description:** 



The generic function <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> creates and returns a new instance of the <ClLinks  term={"class"}><i>class</i></ClLinks>, without initializing it. When the <ClLinks  term={"class"}><i>class</i></ClLinks> is a <GlossaryTerm styled={true} term={"standard class"}><i>standard class</i></GlossaryTerm>, this means that the <ClLinks  term={"slot"}><i>slots</i></ClLinks> are <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>; when the <ClLinks  term={"class"}><i>class</i></ClLinks> is a <GlossaryTerm styled={true} term={"structure class"}><i>structure class</i></GlossaryTerm>, this means the <ClLinks  term={"slot"}><i>slots</i></ClLinks>’ <ClLinks  term={"value"}><i>values</i></ClLinks> are unspecified. 



The caller of <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is expected to have already checked the initialization arguments. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is called by <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <ClLinks  term={"method"}><i>methods</i></ClLinks> to <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> is unspecified. This capability might be added by the *Metaobject Protocol*. 



