 



A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is a *direct instance* of <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> can be redefined if the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is also a *direct instance* of <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. Redefining a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> modifies the existing *class object* to reflect the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition; it does not create a new *class object* for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. Any *method object* created by a :reader, :writer, or :accessor option specified by the old <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form is removed from the corresponding *generic function*. *Methods* specified by the new <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form are added.  







When the class *C* is redefined, changes are propagated to its <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> and to <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of any of its *subclasses*. Updating such an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> occurs at an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> time, but no later than the next time a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is read or written. Updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> does not change its identity as defined by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. The updating process may change the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> of that particular <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, but it does not create a new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. Whether updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> consumes storage is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



Note that redefining a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> may cause <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> to be added or deleted. If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is redefined in a way that changes the set of *local slots accessible* in <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> are updated. It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> are updated if a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is redefined in a way that does not change the set of *local slots accessible* in <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm>. 



The value of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that is specified as shared both in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is retained. If such a *shared slot* was unbound in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, it is unbound in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"slot"}><i>Slots</i></GlossaryTerm> that were local in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and that are shared in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> are initialized. Newly added *shared slots* are initialized. 



Each newly added *shared slot* is set to the result of evaluating the *captured initialization form* for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that was specified in the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. If there was no *initialization form*, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is unbound. 



If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is redefined in such a way that the set of *local slots accessible* in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is changed, a two-step process of updating the <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> takes place. The process may be explicitly started by invoking the generic function <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink>. This two-step process can happen in other circumstances in some implementations. For example, in some implementations this two-step process is triggered if the order of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in storage is changed. 



The first step modifies the structure of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> by adding new *local slots* and discarding *local slots* that are not defined in the new version of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The second step initializes the newly-added *local slots* and performs any other user-defined actions. These two steps are further specified in the next two sections. 



