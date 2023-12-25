 



The generic function <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The object system provides several mechanisms for specifying how a new <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is to be initialized. For example, it is possible to specify the initial values for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in newly created <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> either by giving arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> or by providing default initial values. Further initialization 



activities can be performed by <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> written for *generic functions* that are part of the initialization protocol. The complete initialization protocol is described in Section 7.1 (Object Creation and Initialization). 



