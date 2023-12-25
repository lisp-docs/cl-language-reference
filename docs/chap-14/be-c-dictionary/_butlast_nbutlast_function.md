**butlast, nbutlast** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"butlast"}><b>butlast</b></DictionaryLink> <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> &amp;optional *n → result-list* 



<DictionaryLink styled={true} term={"nbutlast"}><b>nbutlast</b></DictionaryLink> <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> &amp;optional *n → result-list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* but must not be a *circular list*. 



*n*—a non-negative *integer* . 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"butlast"}><b>butlast</b></DictionaryLink> returns a copy of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> from which the last *n* conses have been omitted. If *n* is not supplied, its value is 1. If there are fewer than *n* conses in <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned and, in the case of <DictionaryLink styled={true} term={"nbutlast"}><b>nbutlast</b></DictionaryLink>, <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not modified. 



<DictionaryLink styled={true} term={"nbutlast"}><b>nbutlast</b></DictionaryLink> is like <DictionaryLink styled={true} term={"butlast"}><b>butlast</b></DictionaryLink>, but <DictionaryLink styled={true} term={"nbutlast"}><b>nbutlast</b></DictionaryLink> may modify <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. It changes the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the *cons n*+1 from the end of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(setq lst ’(1 2 3 4 5 6 7 8 9)) *→* (1 2 3 4 5 6 7 8 9) 
(butlast lst) *→* (1 2 3 4 5 6 7 8) 
(butlast lst 5) *→* (1 2 3 4) 
(butlast lst (+ 5 5)) *→* NIL 
lst *→* (1 2 3 4 5 6 7 8 9) 
(nbutlast lst 3) *→* (1 2 3 4 5 6) 
lst *→* (1 2 3 4 5 6) 
(nbutlast lst 99) *→* NIL 
lst *→* (1 2 3 4 5 6) 
(butlast ’(a b c d)) *→* (A B C) 
(butlast ’((a b) (c d))) *→* ((A B)) 
(butlast ’(a)) *→* NIL 
(butlast nil) *→* NIL 
(setq foo (list ’a ’b ’c ’d)) *→* (A B C D) 
(nbutlast foo) *→* (A B C) 
foo *→* (A B C) 



(nbutlast (list ’a)) *→* NIL 
(nbutlast ’()) *→* NIL 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list* or a *dotted list*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *n* is not a non-negative *integer* . 



**Notes:** 



(butlast *list n*) *≡* (ldiff <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (last *list n*)) 



