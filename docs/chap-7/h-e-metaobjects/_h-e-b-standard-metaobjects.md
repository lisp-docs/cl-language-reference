 



The object system supplies a set of meta-objects, called standard meta-objects. These include the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> and <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the classes <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>, <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>, and <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>. 



*•* The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks> is the default <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> defined by the <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> and <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



*•* The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks> is the default <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of *generic functions* defined by the forms <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>, and <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>. 



*•* The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks> and is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of every <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks> except itself and <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>. 



*•* Every <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> combination object is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>. 



 



 



