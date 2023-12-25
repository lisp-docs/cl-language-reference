**revappend, nreconc** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"revappend"}><b>revappend</b></DictionaryLink> *list tail → result-list* 



<DictionaryLink styled={true} term={"nreconc"}><b>nreconc</b></DictionaryLink> *list tail → result-list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list*. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*result-list*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"revappend"}><b>revappend</b></DictionaryLink> constructs a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>2</sub> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, but with the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in reverse order. It then appends (as if by <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink>) the <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> to that reversed list and returns the result. 



<DictionaryLink styled={true} term={"nreconc"}><b>nreconc</b></DictionaryLink> reverses the order of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (as if by <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink>). It then appends (as if by <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink>) the <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm> to that reversed list and returns the result. 



The resulting <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> shares *list structure* with <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>. 







 



 



**revappend, nreconc** 



**Examples:**
```lisp

(let ((list-1 (list 1 2 3)) 
      (list-2 (list ’a ’b ’c))) 
  (print (revappend list-1 list-2)) 
  (print (equal list-1 ’(1 2 3))) 
  (print (equal list-2 ’(a b c)))) 
▷ (3 2 1 A B C) 
▷ T 
▷ T 
*→* T 
(revappend ’(1 2 3) ’()) *→* (3 2 1) 
(revappend ’(1 2 3) ’(a . b)) *→* (3 2 1 A . B) 
(revappend ’() ’(a b c)) *→* (A B C) 
(revappend ’(1 2 3) ’a) *→* (3 2 1 . A) 
(revappend ’() ’a) *→* A ;degenerate case 
(let ((list-1 ’(1 2 3)) 
      (list-2 ’(a b c))) 
  (print (nreconc list-1 list-2)) 
  (print (equal list-1 ’(1 2 3))) 
  (print (equal list-2 ’(a b c)))) 
▷ (3 2 1 A B C) 
▷ NIL 
▷ T 
*→* T 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"revappend"}><b>revappend</b></DictionaryLink> does not modify either of its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. <DictionaryLink styled={true} term={"nreconc"}><b>nreconc</b></DictionaryLink> is permitted to modify <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> but not <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>. 



Although it might be implemented differently, <DictionaryLink styled={true} term={"nreconc"}><b>nreconc</b></DictionaryLink> is constrained to have side-effect behavior equivalent to: 



(nconc (nreverse <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>) 



**See Also:** 



<DictionaryLink styled={true} term={"reverse"}><b>reverse</b></DictionaryLink>, <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink>, <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink> 



**Notes:** 



The following functional equivalences are true, although good <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> will typically use a faster algorithm for achieving the same effect: 







 



 



(revappend *list tail*) *≡* (nconc (reverse <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>) 



(nreconc *list tail*) *≡* (nconc (nreverse <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>) 



