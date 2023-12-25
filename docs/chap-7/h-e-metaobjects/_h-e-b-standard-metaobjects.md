 



The object system supplies a set of meta-objects, called standard meta-objects. These include the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> and <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the classes <ClLinks  term={"standard-method"}><b>standard-method</b></ClLinks>, <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>, and <ClLinks  term={"method-combination"}><b>method-combination</b></ClLinks>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-method"}><b>standard-method</b></ClLinks> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of <ClLinks  term={"method"}><i>methods</i></ClLinks> defined by the <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> and <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of *generic functions* defined by the forms <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>, and <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> named <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> and is a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of every <ClLinks  term={"class"}><i>class</i></ClLinks> that is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> except itself and <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>. 



*•* Every <ClLinks  term={"method"}><i>method</i></ClLinks> combination object is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"method-combination"}><b>method-combination</b></ClLinks>. 



 



 



