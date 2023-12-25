 



The *generic function* <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is called by <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> to initialize a newly created <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. It uses *standard method combination*. *Methods* for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> can be defined in order to perform any initialization that cannot be achieved simply by supplying initial values for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



During initialization, <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is invoked after the following actions have been taken: 



 



 



*•* The *defaulted initialization argument list* has been computed by combining the supplied *initialization argument list* with any default initialization arguments for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



*•* The validity of the *defaulted initialization argument list* has been checked. If any of the initialization arguments has not been declared as valid, an error is signaled. 



*•* A new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are unbound has been created. 



The generic function <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is called with the new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> and the defaulted initialization arguments. There is a system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> whose *parameter specializer* is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. This <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> calls the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> to fill in the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> according to the initialization arguments and the :initform forms for the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>; the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, and the defaulted initialization arguments. 



Note that <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> provides the *defaulted initialization argument list* in its call to <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, so the first step performed by the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> takes into account both the initialization arguments provided in the call to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> and the *defaulted initialization argument list*. 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> can be defined to specify actions to be taken when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is initialized. If only *after methods* for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> are defined, they will be run after the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. 



The object system provides two <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that are useful in the bodies of <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> methods. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> returns a *generic boolean* value that indicates whether a specified <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has a value; this provides a mechanism for writing *after methods* for <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> that initialize <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> only if they have not already been initialized. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> causes the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> to have no value. 



