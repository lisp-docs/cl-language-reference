**nthcdr** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"nthcdr"}><b>nthcdr</b></DictionaryLink> *n list → tail* 



**Arguments and Values:** 



*n*—a non-negative *integer* . 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* or a *circular list*. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that would be obtained by calling <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> *n* times in succession. 



 



 



**Examples:**
```lisp

(nthcdr 0 ’()) *→* NIL 
(nthcdr 3 ’()) *→* NIL 
(nthcdr 0 ’(a b c)) *→* (A B C) 
(nthcdr 2 ’(a b c)) *→* (C) 
(nthcdr 4 ’(a b c)) *→* () 
(nthcdr 1 ’(0 . 1)) *→* 1 
(locally (declare (optimize (safety 3))) 
  (nthcdr 3 ’(0 . 1))) 
Error: Attempted to take CDR of 1. 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *n* is not a non-negative *integer* . 



For *n* being an integer greater than 1, the error checking done by (nthcdr *n list*) is the same as for (nthcdr (- *n* 1) (cdr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)); see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, <DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink>, <DictionaryLink styled={true} term={"rest"}><b>rest</b></DictionaryLink> 



