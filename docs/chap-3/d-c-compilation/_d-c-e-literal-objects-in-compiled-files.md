 



The functions <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> are required to ensure that *literal objects* referenced within the resulting interpreted or compiled code objects are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, on the other hand, must produce a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> that, when loaded with <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, constructs the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> and produces references to them. 



In the case of <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> constructed by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> of the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> cannot be spoken of as being the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> constructed at compile time, because the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> may be loaded into a different *Lisp image* than the one in which it was compiled. This section defines the concept of <GlossaryTerm  term={"similarity"}><i>similarity</i></GlossaryTerm> which relates <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> to the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in 



the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The constraints on *literal objects* described in this section apply only to <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>; <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> do not copy or coalesce constants. 



