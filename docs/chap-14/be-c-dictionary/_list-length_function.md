**list-length** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"list-length"}><b>list-length</b></ClLinks> *list → length* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



<ClLinks styled={true} term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. Returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



**Examples:**
```lisp
(list-length ’(a b c d)) → 4 
(list-length ’(a (b c) d)) → 3 
(list-length ’()) → 0 
(list-length nil) → 0 
(defun circular-list (&rest elements) 
  (let ((cycle (copy-list elements))) 
    (nconc cycle cycle))) 
(list-length (circular-list ’a ’b)) → NIL 
(list-length (circular-list ’a)) → NIL 
(list-length (circular-list)) → 0 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



**See Also:** 



<ClLinks styled={true} term={"length"}><b>length</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"list-length"}><b>list-length</b></ClLinks> could be implemented as follows: 



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



