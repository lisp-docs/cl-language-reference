**last** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"last"}><b>last</b></DictionaryLink> <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> &amp;optional *n → tail* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* but must not be a *circular list*. 



*n*—a non-negative *integer* . The default is 1. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"last"}><b>last</b></DictionaryLink> returns the last *n conses* (not the last *n* elements) of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>). If <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is (), <DictionaryLink styled={true} term={"last"}><b>last</b></DictionaryLink> returns (). 



If *n* is zero, the atom that terminates <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is returned. If *n* is greater than or equal to the number of <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> cells in <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Examples:**
```lisp

(last nil) *→* NIL 
(last ’(1 2 3)) *→* (3) 
(last ’(1 2 . 3)) *→* (2 . 3) 
(setq x (list ’a ’b ’c ’d)) *→* (A B C D) 
(last x) *→* (D) 
(rplacd (last x) (list ’e ’f)) x *→* (A B C D E F) 
(last x) *→* (F) 
(last ’(a b c)) *→* (C) 
(last ’(a b c) 0) *→* () 
(last ’(a b c) 1) *→* (C) 



(last ’(a b c) 2) *→* (B C) 
(last ’(a b c) 3) *→* (A B C) 
(last ’(a b c) 4) *→* (A B C) 
(last ’(a . b) 0) *→* B 
(last ’(a . b) 1) *→* (A . B) 
(last ’(a . b) 2) *→* (A . B) 

```
**Exceptional Situations:** 



The consequences are undefined if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *circular list*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *n* is not a non-negative *integer* . 



**See Also:** 



<DictionaryLink styled={true} term={"butlast"}><b>butlast</b></DictionaryLink>, <DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink> 



**Notes:** 



The following code could be used to define <DictionaryLink styled={true} term={"last"}><b>last</b></DictionaryLink>. 



(defun last (list &amp;optional (n 1)) 



(check-type n (integer 0)) 



(do ((l list (cdr l)) 



(r list) 



(i 0 (+ i 1))) 



((atom l) r) 



(if (&gt;= i n) (pop r)))) 



