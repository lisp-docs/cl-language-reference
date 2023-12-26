 



The :default-initargs class option is inherited. The set of defaulted initialization arguments for a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is the union of the sets of initialization arguments supplied in the :default-initargs class options of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. When more than one default initial value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is supplied 



for a given initialization argument, the default initial value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is used is the one supplied by the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that is most specific according to the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm>. 



If a given :default-initargs class option specifies an initialization argument of the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> more than once, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled.  







