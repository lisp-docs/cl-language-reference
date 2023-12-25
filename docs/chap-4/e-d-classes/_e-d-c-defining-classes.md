 



The macro <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> is used to define a new named <ClLinks  term={"class"}><i>class</i></ClLinks>. 



The definition of a <ClLinks  term={"class"}><i>class</i></ClLinks> includes: 



*•* The <ClLinks  term={"name"}><i>name</i></ClLinks> of the new <ClLinks  term={"class"}><i>class</i></ClLinks>. For newly-defined *classes* this <ClLinks  term={"name"}><i>name</i></ClLinks> is a *proper name*. *•* The list of the direct *superclasses* of the new <ClLinks  term={"class"}><i>class</i></ClLinks>. 



*•* A set of *slot specifiers*. Each *slot specifier* includes the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> and zero or more <ClLinks  term={"slot"}><i>slot</i></ClLinks> options. A <ClLinks  term={"slot"}><i>slot</i></ClLinks> option pertains only to a single <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If a <ClLinks  term={"class"}><i>class</i></ClLinks> definition contains two *slot specifiers* with the same <ClLinks  term={"name"}><i>name</i></ClLinks>, an error is signaled. 



*•* A set of <ClLinks  term={"class"}><i>class</i></ClLinks> options. Each <ClLinks  term={"class"}><i>class</i></ClLinks> option pertains to the <ClLinks  term={"class"}><i>class</i></ClLinks> as a whole. 



The <ClLinks  term={"slot"}><i>slot</i></ClLinks> options and <ClLinks  term={"class"}><i>class</i></ClLinks> options of the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form provide mechanisms for the following: *•* Supplying a default initial value <ClLinks  term={"form"}><i>form</i></ClLinks> for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* Requesting that <ClLinks  term={"method"}><i>methods</i></ClLinks> for *generic functions* be automatically generated for reading or writing <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



*•* Controlling whether a given <ClLinks  term={"slot"}><i>slot</i></ClLinks> is shared by all <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> or whether each <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> has its own <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* Supplying a set of initialization arguments and initialization argument defaults to be used in <ClLinks  term={"instance"}><i>instance</i></ClLinks> creation. 



*•* Indicating that the <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks> is to be other than the default. The :metaclass option is reserved for future use; an implementation can be extended to make use of the :metaclass option. 



*•* Indicating the expected <ClLinks  term={"type"}><i>type</i></ClLinks> for the value stored in the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* Indicating the *documentation string* for the <ClLinks  term={"slot"}><i>slot</i></ClLinks>.  







