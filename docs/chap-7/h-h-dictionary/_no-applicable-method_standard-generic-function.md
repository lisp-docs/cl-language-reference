**no-applicable-method** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> (*generic-function* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a *generic function* on which no *applicable method* was found. 



*function-arguments*—<GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the *generic-function*. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is called when a *generic function* is invoked and no <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on that *generic function* is applicable. The *default method* signals an error. 



The generic function <DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is not intended to be called by programmers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. 







 



 



**Exceptional Situations:** 



The default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



