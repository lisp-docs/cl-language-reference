**revappend, nreconc** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"revappend"}><b>revappend</b></ClLinks> *list tail → result-list* 



<ClLinks styled={true} term={"nreconc"}><b>nreconc</b></ClLinks> *list tail → result-list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a *proper list*. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*result-list*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"revappend"}><b>revappend</b></ClLinks> constructs a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>2</sub> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, but with the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in reverse order. It then appends (as if by <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks>) the <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> to that reversed list and returns the result. 



<ClLinks styled={true} term={"nreconc"}><b>nreconc</b></ClLinks> reverses the order of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (as if by <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks>). It then appends (as if by <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks>) the <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> to that reversed list and returns the result. 



The resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> shares *list structure* with <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>. 







 



 



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
→ T 
(revappend ’(1 2 3) ’()) → (3 2 1) 
(revappend ’(1 2 3) ’(a . b)) → (3 2 1 A . B) 
(revappend ’() ’(a b c)) → (A B C) 
(revappend ’(1 2 3) ’a) → (3 2 1 . A) 
(revappend ’() ’a) → A ;degenerate case 
(let ((list-1 ’(1 2 3)) 
      (list-2 ’(a b c))) 
  (print (nreconc list-1 list-2)) 
  (print (equal list-1 ’(1 2 3))) 
  (print (equal list-2 ’(a b c)))) 
▷ (3 2 1 A B C) 
▷ NIL 
▷ T 
→ T 

```
**Side Effects:** 



<ClLinks styled={true} term={"revappend"}><b>revappend</b></ClLinks> does not modify either of its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. <ClLinks styled={true} term={"nreconc"}><b>nreconc</b></ClLinks> is permitted to modify <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> but not <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>. 



Although it might be implemented differently, <ClLinks styled={true} term={"nreconc"}><b>nreconc</b></ClLinks> is constrained to have side-effect behavior equivalent to: 



(nconc (nreverse <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>) 



**See Also:** 



<ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks>, <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks>, <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks> 



**Notes:** 



The following functional equivalences are true, although good <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> will typically use a faster algorithm for achieving the same effect: 







 



 



(revappend *list tail*) *≡* (nconc (reverse <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>) 



(nreconc *list tail*) *≡* (nconc (nreverse <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>) 



