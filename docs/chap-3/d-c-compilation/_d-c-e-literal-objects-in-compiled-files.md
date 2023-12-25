 



The functions <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> are required to ensure that *literal objects* referenced within the resulting interpreted or compiled code objects are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the *source code*. <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, on the other hand, must produce a *compiled file* that, when loaded with <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, constructs the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> defined by the *source code* and produces references to them. 



In the case of <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> constructed by <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> of the *compiled file* cannot be spoken of as being the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> constructed at compile time, because the *compiled file* may be loaded into a different *Lisp image* than the one in which it was compiled. This section defines the concept of <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> which relates <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the *evaluation environment* to the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in 



the *run-time environment*. 



The constraints on *literal objects* described in this section apply only to <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>; <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> do not copy or coalesce constants. 



