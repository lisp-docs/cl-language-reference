 



The functions <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> are required to ensure that *literal objects* referenced within the resulting interpreted or compiled code objects are the <ClLinks  term={"same"}><i>same</i></ClLinks> as the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, on the other hand, must produce a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> that, when loaded with <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, constructs the <ClLinks  term={"object"}><i>objects</i></ClLinks> defined by the <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> and produces references to them. 



In the case of <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <ClLinks  term={"object"}><i>objects</i></ClLinks> constructed by <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> of the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> cannot be spoken of as being the <ClLinks  term={"same"}><i>same</i></ClLinks> as the <ClLinks  term={"object"}><i>objects</i></ClLinks> constructed at compile time, because the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> may be loaded into a different *Lisp image* than the one in which it was compiled. This section defines the concept of <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> which relates <ClLinks  term={"object"}><i>objects</i></ClLinks> in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> to the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in 



the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



The constraints on *literal objects* described in this section apply only to <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>; <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> and <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> do not copy or coalesce constants. 



