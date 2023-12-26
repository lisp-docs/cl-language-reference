 



The generic function <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> creates and returns a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The object system provides several mechanisms for specifying how a new <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is to be initialized. For example, it is possible to specify the initial values for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in newly created <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> either by giving arguments to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> or by providing default initial values. Further initialization 



activities can be performed by <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> written for <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> that are part of the initialization protocol. The complete initialization protocol is described in Section 7.1 (Object Creation and Initialization). 



