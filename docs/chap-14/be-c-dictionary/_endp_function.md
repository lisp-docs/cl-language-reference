**endp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> *list → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* or a *circular list*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the *empty list*. Returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



**Examples:**
```lisp

(endp nil) *→ true* 
(endp ’(1 2)) *→ false* 
(endp (cddr ’(1 2))) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Notes:** 



The purpose of <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> is to test for the end of *proper list*. Since <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> does not descend into a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, it is well-defined to pass it a *dotted list*. However, if shorter “lists” are iteratively produced by calling <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> on such a *dotted list* and those “lists” are tested with <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink>, a situation that has undefined consequences will eventually result when the *non-nil atom* (which is not in fact a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) finally becomes the argument to <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink>. Since this is the usual way in which <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> is used, it is conservative programming style and consistent with the intent of <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> to treat <DictionaryLink styled={true} term={"endp"}><b>endp</b></DictionaryLink> as simply a function on *proper lists* which happens not to enforce an argument type of *proper list* except when the argument is <GlossaryTerm styled={true} term={"atomic"}><i>atomic</i></GlossaryTerm>. 



