**no-applicable-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> on which no <GlossaryTerm styled={true} term={"applicable method"}><i>applicable method</i></GlossaryTerm> was found. 



*function-arguments*—<GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the *generic-function*. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is called when a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is invoked and no <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is applicable. The <GlossaryTerm styled={true} term={"default method"}><i>default method</i></GlossaryTerm> signals an error. 



The generic function <DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. 







 



 



**Exceptional Situations:** 



The default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



