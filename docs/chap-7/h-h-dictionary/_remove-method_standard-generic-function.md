**remove-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> *generic-function method → generic-function* 



**Method Signatures:** 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



<ClLinks  term={"method"}><i>method</i></ClLinks> 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a <ClLinks  term={"method"}><i>method</i></ClLinks>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> removes a <ClLinks  term={"method"}><i>method</i></ClLinks> from *generic-function* by modifying the *generic-function* (if necessary). 



<DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink> must not signal an error if the <ClLinks  term={"method"}><i>method</i></ClLinks> is not one of the <ClLinks  term={"method"}><i>methods</i></ClLinks> on the *generic-function*. 



**See Also:** 



<DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> 



