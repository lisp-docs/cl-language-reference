**allocate-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> <ClLinks  term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → new-instance 



**Method Signatures:** 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*initargs*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *keyword/value pairs* (initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks>). *new-instance*—an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"class"}><i>class</i></ClLinks> is <ClLinks  term={"class"}><i>class</i></ClLinks>. 







 



 



**Description:** 



The generic function <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> creates and returns a new instance of the <ClLinks  term={"class"}><i>class</i></ClLinks>, without initializing it. When the <ClLinks  term={"class"}><i>class</i></ClLinks> is a *standard class*, this means that the <ClLinks  term={"slot"}><i>slots</i></ClLinks> are <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>; when the <ClLinks  term={"class"}><i>class</i></ClLinks> is a *structure class*, this means the <ClLinks  term={"slot"}><i>slots</i></ClLinks>’ <ClLinks  term={"value"}><i>values</i></ClLinks> are unspecified. 



The caller of <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is expected to have already checked the initialization arguments. 



The *generic function* <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is called by <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, as described in Section 7.1 (Object Creation and Initialization). 



**See Also:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks  term={"class-of"}><b>class-of</b></ClLinks>, Section 7.1 (Object Creation and Initialization) 



**Notes:** 



The consequences of adding <ClLinks  term={"method"}><i>methods</i></ClLinks> to <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> is unspecified. This capability might be added by the *Metaobject Protocol*. 



