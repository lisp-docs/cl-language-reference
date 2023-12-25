**no-next-method** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> *generic-function method* &amp;rest *args → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> (*generic-function* <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



(<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



&amp;rest *args* 



**Arguments and Values:** 



*generic-function* – *generic function* to which <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> belongs. 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> – <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> that contained the call to <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> for which there is no next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. *args* – arguments to <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called by <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> when there is no *next method*. 



The *generic function* <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. 



**Exceptional Situations:** 



The system-supplied <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> 







 



 



