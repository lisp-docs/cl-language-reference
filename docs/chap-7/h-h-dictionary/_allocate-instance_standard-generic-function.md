**allocate-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → new-instance 



**Method Signatures:** 



<ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



*initargs*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *keyword/value pairs* (initialization argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>). *new-instance*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> whose <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 







 



 



**Description:** 



The generic function <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> creates and returns a new instance of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, without initializing it. When the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a *standard class*, this means that the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>; when the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a *structure class*, this means the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>’ <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are unspecified. 



The caller of <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is expected to have already checked the initialization arguments. 



The *generic function* <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is called by <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> to <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is unspecified. This capability might be added by the *Metaobject Protocol*. 



