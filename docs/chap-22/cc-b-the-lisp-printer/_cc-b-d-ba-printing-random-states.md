 



A specific syntax for printing <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink> is not specified. However, every <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> must arrange to print a *random state object* in such a way that, within the same implementation, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> can construct from the printed representation a copy of the <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> object as if the copy had been made by <DictionaryLink styled={true} term={"make-random-state"}><b>make-random-state</b></DictionaryLink>. 



If the type <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> is effectively implemented by using the machinery for <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, the usual structure syntax can then be used for printing <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> objects; one might look something like 



#S(RANDOM-STATE :DATA #(14 49 98436589 786345 8734658324 ... )) 



where the components are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



