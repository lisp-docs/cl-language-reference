**list-length** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"list-length"}><b>list-length</b></DictionaryLink> *list → length* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list* or a *circular list*. 



<GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *proper list*. Returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *circular list*. 



**Examples:**
```lisp

(list-length ’(a b c d)) *→* 4 
(list-length ’(a (b c) d)) *→* 3 
(list-length ’()) *→* 0 
(list-length nil) *→* 0 
(defun circular-list (&rest elements) 
  (let ((cycle (copy-list elements))) 
    (nconc cycle cycle))) 
(list-length (circular-list ’a ’b)) *→* NIL 
(list-length (circular-list ’a)) *→* NIL 
(list-length (circular-list)) *→* 0 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list* or a *circular list*. 



**See Also:** 



<DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"list-length"}><b>list-length</b></DictionaryLink> could be implemented as follows: 



(defun list-length (x) 



(do ((n 0 (+ n 2)) ;Counter. 



(fast x (cddr fast)) ;Fast pointer: leaps by 2. 







 



 



(slow x (cdr slow))) ;Slow pointer: leaps by 1. 



(nil) 



;; If fast pointer hits the end, return the count. 



(when (endp fast) (return n)) 



(when (endp (cdr fast)) (return (+ n 1))) 



;; If fast pointer eventually equals slow pointer, 



;; then we must be stuck in a circular list. 



;; (A deeper property is the converse: if we are 



;; stuck in a circular list, then eventually the 



;; fast pointer will equal the slow pointer. 



;; That fact justifies this implementation.) 



(when (and (eq fast slow) (&gt; n 0)) (return nil)))) 



