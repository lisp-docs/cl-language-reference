**endp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> *list → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. Returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



**Examples:**
```lisp
(endp nil) → true 
(endp ’(1 2)) → false 
(endp (cddr ’(1 2))) → true 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Notes:** 



The purpose of <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> is to test for the end of <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. Since <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> does not descend into a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, it is well-defined to pass it a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>. However, if shorter “lists” are iteratively produced by calling <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> on such a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> and those “lists” are tested with <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink>, a situation that has undefined consequences will eventually result when the *non-nil atom* (which is not in fact a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) finally becomes the argument to <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink>. Since this is the usual way in which <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> is used, it is conservative programming style and consistent with the intent of <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> to treat <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> as simply a function on <GlossaryTerm styled={true} term={"proper list"}><i>proper lists</i></GlossaryTerm> which happens not to enforce an argument type of <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> except when the argument is <GlossaryTerm styled={true} term={"atomic"}><i>atomic</i></GlossaryTerm>. 



