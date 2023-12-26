**allocate-instance** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> <ClLinks  term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → new-instance 



**Method Signatures:** 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*initargs*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"keyword/value pair"}><i>keyword/value pairs</i></GlossaryTerm> (initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks>). *new-instance*—an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"class"}><i>class</i></ClLinks> is <ClLinks  term={"class"}><i>class</i></ClLinks>. 







 



 



**Description:** 



The generic function <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> creates and returns a new instance of the <ClLinks  term={"class"}><i>class</i></ClLinks>, without initializing it. When the <ClLinks  term={"class"}><i>class</i></ClLinks> is a <GlossaryTerm styled={true} term={"standard class"}><i>standard class</i></GlossaryTerm>, this means that the <ClLinks  term={"slot"}><i>slots</i></ClLinks> are <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>; when the <ClLinks  term={"class"}><i>class</i></ClLinks> is a <GlossaryTerm styled={true} term={"structure class"}><i>structure class</i></GlossaryTerm>, this means the <ClLinks  term={"slot"}><i>slots</i></ClLinks>’ <ClLinks  term={"value"}><i>values</i></ClLinks> are unspecified. 



The caller of <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is expected to have already checked the initialization arguments. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is called by <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks  term={"class-of"}><b>class-of</b></ClLinks>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <ClLinks  term={"method"}><i>methods</i></ClLinks> to <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is unspecified. This capability might be added by the *Metaobject Protocol*. 



