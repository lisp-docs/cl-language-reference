 



The macro <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> is used to define a new named <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



The definition of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> includes: 



*•* The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. For newly-defined *classes* this <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>. *•* The list of the direct *superclasses* of the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*•* A set of <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm>. Each <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> includes the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and zero or more <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> options. A <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> option pertains only to a single <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition contains two <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, an error is signaled. 



*•* A set of <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> options. Each <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> option pertains to the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> as a whole. 



The <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> options and <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> options of the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form provide mechanisms for the following: *•* Supplying a default initial value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Requesting that <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> be automatically generated for reading or writing <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



*•* Controlling whether a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is shared by all <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> or whether each <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> has its own <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Supplying a set of initialization arguments and initialization argument defaults to be used in <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> creation. 



*•* Indicating that the <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm> is to be other than the default. The :metaclass option is reserved for future use; an implementation can be extended to make use of the :metaclass option. 



*•* Indicating the expected <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> for the value stored in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* Indicating the <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>.  







