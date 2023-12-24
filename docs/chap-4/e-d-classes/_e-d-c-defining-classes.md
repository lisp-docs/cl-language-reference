 



The macro <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> is used to define a new named <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



The definition of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> includes: 



*•* The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. For newly-defined *classes* this <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *proper name*. *•* The list of the direct *superclasses* of the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



*•* A set of *slot specifiers*. Each *slot specifier* includes the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and zero or more <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> options. A <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> option pertains only to a single <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. If a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> definition contains two *slot specifiers* with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, an error is signaled. 



*•* A set of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> options. Each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> option pertains to the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> as a whole. 



The <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> options and <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> options of the <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form provide mechanisms for the following: *•* Supplying a default initial value <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



*•* Requesting that <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for *generic functions* be automatically generated for reading or writing <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>. 



*•* Controlling whether a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is shared by all <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> or whether each <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> has its own <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



*•* Supplying a set of initialization arguments and initialization argument defaults to be used in <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> creation. 



*•* Indicating that the <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks> is to be other than the default. The :metaclass option is reserved for future use; an implementation can be extended to make use of the :metaclass option. 



*•* Indicating the expected <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> for the value stored in the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



*•* Indicating the *documentation string* for the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>.  







