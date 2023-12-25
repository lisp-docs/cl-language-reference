**reverse, nreverse** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> *sequence → reversed-sequence* 



<DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> *sequence → reversed-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*reversed-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> and <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> return a new *sequence* of the same kind as *sequence*, containing the same <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>, but in reverse order. 



<DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> and <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> differ in that <DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> always creates and returns a new *sequence*, whereas <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> might modify and return the given *sequence*. <DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> never modifies the given *sequence*. 



For <DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink>, if *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a *fresh simple array* of <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> one that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a *fresh list*. 



For <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink>, if *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



For <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink>, *sequence* might be destroyed and re-used to produce the result. The result might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. Specifically, when *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> is permitted to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> any part, <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> or <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, of any <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> that is part of the *list structure* of *sequence*. When *sequence* 



is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> is permitted to re-order the elements of *sequence* in order to produce the resulting <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



**Examples:**
```lisp

(setq str "abc") *→* "abc" 
(reverse str) *→* "cba" 
str *→* "abc" 
(setq str (copy-seq str)) *→* "abc" 
(nreverse str) *→* "cba" 
str *→ implementation-dependent* 
(setq l (list 1 2 3)) *→* (1 2 3) 
(nreverse l) *→* (3 2 1) 
l *→ implementation-dependent* 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink> might either create a new *sequence*, modify the argument *sequence*, or both. (<DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink> does not modify *sequence*.) 







 



 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 