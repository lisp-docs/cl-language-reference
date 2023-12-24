**make-instance** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> &amp;rest *initargs* &amp;key &amp;allow-other-keys → instance 



**Method Signatures:** 



<ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) &amp;rest *initargs* 



<ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) &amp;rest *initargs* 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



*initargs*—an *initialization argument list*. 



<ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>—a *fresh instance* of *class class*. 







 



 



**Description:** 



The *generic function* <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> creates and returns a new <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the given <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



If the second of the above <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> invokes <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> on the arguments (find-class <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) and *initargs*. 



The initialization arguments are checked within <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>. 



The *generic function* <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> may be used as described in Section 7.1 (Object Creation and Initialization). 



**Exceptional Situations:** 



If any of the initialization arguments has not been declared as valid, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>, <ClLinks styled={true} term={"allocate-instance"}><b>allocate-instance</b></ClLinks>, <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, Section 7.1 (Object Creation and Initialization) 



