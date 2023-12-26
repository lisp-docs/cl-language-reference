 



A <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> can be redefined if the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is also a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. Redefining a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> modifies the existing *class object* to reflect the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition; it does not create a new *class object* for the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. Any *method object* created by a :reader, :writer, or :accessor option specified by the old <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form is removed from the corresponding <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> specified by the new <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form are added.  







When the class *C* is redefined, changes are propagated to its <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> and to <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of any of its *subclasses*. Updating such an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> occurs at an <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> time, but no later than the next time a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of that <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is read or written. Updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> does not change its identity as defined by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. The updating process may change the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> of that particular <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, but it does not create a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. Whether updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> consumes storage is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



Note that redefining a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> may cause <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> to be added or deleted. If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is redefined in a way that changes the set of *local slots accessible* in <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm>, the <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> are updated. It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> are updated if a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is redefined in a way that does not change the set of *local slots accessible* in <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm>. 



The value of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> that is specified as shared both in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and in the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is retained. If such a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> was unbound in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, it is unbound in the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. <GlossaryTerm  term={"slot"}><i>Slots</i></GlossaryTerm> that were local in the old <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and that are shared in the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> are initialized. Newly added <GlossaryTerm styled={true} term={"shared slot"}><i>shared slots</i></GlossaryTerm> are initialized. 



Each newly added <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> is set to the result of evaluating the <GlossaryTerm styled={true} term={"captured initialization form"}><i>captured initialization form</i></GlossaryTerm> for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> that was specified in the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> for the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. If there was no <GlossaryTerm styled={true} term={"initialization form"}><i>initialization form</i></GlossaryTerm>, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is unbound. 



If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is redefined in such a way that the set of *local slots accessible* in an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is changed, a two-step process of updating the <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> takes place. The process may be explicitly started by invoking the generic function <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>. This two-step process can happen in other circumstances in some implementations. For example, in some implementations this two-step process is triggered if the order of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in storage is changed. 



The first step modifies the structure of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> by adding new <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> and discarding <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> that are not defined in the new version of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The second step initializes the newly-added <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> and performs any other user-defined actions. These two steps are further specified in the next two sections. 



