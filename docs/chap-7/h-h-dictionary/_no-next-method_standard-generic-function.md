**no-next-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> *generic-function method* &amp;rest *args → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



(<ClLinks  term={"method"}><i>method</i></ClLinks> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



&amp;rest *args* 



**Arguments and Values:** 



*generic-function* – <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> to which <ClLinks  term={"method"}><i>method</i></ClLinks> belongs. 



<ClLinks  term={"method"}><i>method</i></ClLinks> – <ClLinks  term={"method"}><i>method</i></ClLinks> that contained the call to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> for which there is no next <ClLinks  term={"method"}><i>method</i></ClLinks>. *args* – arguments to <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is called by <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> when there is no <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 



**Exceptional Situations:** 



The system-supplied <ClLinks  term={"method"}><i>method</i></ClLinks> on <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> 







 



 



