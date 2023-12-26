 



The object system supplies a set of meta-objects, called standard meta-objects. These include the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> and <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the classes <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>, <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>, and <DictionaryLink  term={"method-combination"}><b>method-combination</b></DictionaryLink>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of <ClLinks  term={"method"}><i>methods</i></ClLinks> defined by the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> and <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> defined by the forms <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, and <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> named <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> and is a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of every <ClLinks  term={"class"}><i>class</i></ClLinks> that is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> except itself and <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>. 



*•* Every <ClLinks  term={"method"}><i>method</i></ClLinks> combination object is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"method-combination"}><b>method-combination</b></DictionaryLink>. 



 



 



