 



The macro <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> is used to define a new named <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



The definition of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> includes: 



*•* The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. For newly-defined *classes* this <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *proper name*. *•* The list of the direct *superclasses* of the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



*•* A set of *slot specifiers*. Each *slot specifier* includes the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and zero or more <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> options. A <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> option pertains only to a single <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition contains two *slot specifiers* with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, an error is signaled. 



*•* A set of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> options. Each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> option pertains to the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> as a whole. 



The <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> options and <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> options of the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form provide mechanisms for the following: *•* Supplying a default initial value <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Requesting that <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for *generic functions* be automatically generated for reading or writing <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



*•* Controlling whether a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is shared by all <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> or whether each <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has its own <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Supplying a set of initialization arguments and initialization argument defaults to be used in <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> creation. 



*•* Indicating that the <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm> is to be other than the default. The :metaclass option is reserved for future use; an implementation can be extended to make use of the :metaclass option. 



*•* Indicating the expected <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> for the value stored in the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Indicating the *documentation string* for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>.  







