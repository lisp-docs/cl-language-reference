 



The :default-initargs class option is inherited. The set of defaulted initialization arguments for a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is the union of the sets of initialization arguments supplied in the :default-initargs class options of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. When more than one default initial value <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is supplied 



for a given initialization argument, the default initial value <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is used is the one supplied by the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is most specific according to the *class precedence list*. 



If a given :default-initargs class option specifies an initialization argument of the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> more than once, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled.  







