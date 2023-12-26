 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is called by <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> to initialize a newly created <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. It uses <GlossaryTerm styled={true} term={"standard method combination"}><i>standard method combination</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> can be defined in order to perform any initialization that cannot be achieved simply by supplying initial values for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



During initialization, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is invoked after the following actions have been taken: 



 



 



*•* The *defaulted initialization argument list* has been computed by combining the supplied <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> with any default initialization arguments for the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*•* The validity of the *defaulted initialization argument list* has been checked. If any of the initialization arguments has not been declared as valid, an error is signaled. 



*•* A new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> whose <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are unbound has been created. 



The generic function <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> is called with the new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> and the defaulted initialization arguments. There is a system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. This <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> calls the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> to fill in the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> according to the initialization arguments and the :initform forms for the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>; the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called with the following arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, and the defaulted initialization arguments. 



Note that <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> provides the *defaulted initialization argument list* in its call to <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, so the first step performed by the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> takes into account both the initialization arguments provided in the call to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> and the *defaulted initialization argument list*. 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> can be defined to specify actions to be taken when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is initialized. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> are defined, they will be run after the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. 



The object system provides two <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that are useful in the bodies of <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> methods. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-boundp"}><b>slot-boundp</b></DictionaryLink> returns a *generic boolean* value that indicates whether a specified <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has a value; this provides a mechanism for writing <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> that initialize <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> only if they have not already been initialized. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-makunbound"}><b>slot-makunbound</b></DictionaryLink> causes the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> to have no value. 



