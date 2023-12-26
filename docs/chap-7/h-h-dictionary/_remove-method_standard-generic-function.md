**remove-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> *generic-function method → generic-function* 



**Method Signatures:** 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>—a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> removes a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> from *generic-function* by modifying the *generic-function* (if necessary). 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> must not signal an error if the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is not one of the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> on the *generic-function*. 



**See Also:** 



<DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> 



