**list-length** *Function* 



**Syntax:** 



**list-length** *list → length* 



**Arguments and Values:** 



*list*—a *proper list* or a *circular list*. 



*length*—a non-negative *integer* , or **nil**. 



**Description:** 



Returns the *length* of *list* if *list* is a *proper list*. Returns **nil** if *list* is a *circular list*. 



**Examples:**
```lisp
 



(list-length ’(a b c d)) *→* 4 



(list-length ’(a (b c) d)) *→* 3 



(list-length ’()) *→* 0 



(list-length nil) *→* 0 



(defun circular-list (&amp;rest elements) 



(let ((cycle (copy-list elements))) 



(nconc cycle cycle))) 



(list-length (circular-list ’a ’b)) *→* NIL 



(list-length (circular-list ’a)) *→* NIL 



(list-length (circular-list)) *→* 0 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *list* is not a *proper list* or a *circular list*. 



**See Also:** 



**length** 



**Notes:** 



**list-length** could be implemented as follows: 



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



