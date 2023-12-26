**no-next-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> *generic-function method* &amp;rest *args → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



(<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



&amp;rest *args* 



**Arguments and Values:** 



*generic-function* – <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> to which <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> belongs. 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> – <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> that contained the call to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> for which there is no next <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. *args* – arguments to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called by <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> when there is no <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. 



**Exceptional Situations:** 



The system-supplied <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> 







 



 



