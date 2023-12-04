**last** *Function* 



**Syntax:** 



**last** *list* &optional *n → tail* 



**Arguments and Values:** 



*list*—a *list*, which might be a *dotted list* but must not be a *circular list*. 



*n*—a non-negative *integer* . The default is 1. 



*tail*—an *object*. 



**Description:** 



**last** returns the last *n conses* (not the last *n* elements) of *list*). If *list* is (), **last** returns (). 



If *n* is zero, the atom that terminates *list* is returned. If *n* is greater than or equal to the number of *cons* cells in *list*, the result is *list*. 



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



The consequences are undefined if *list* is a *circular list*. Should signal an error of *type* **type-error** if *n* is not a non-negative *integer* . 



**See Also:** 



**butlast**, **nth** 



**Notes:** 



The following code could be used to define **last**. 



(defun last (list &optional (n 1)) 



(check-type n (integer 0)) 



(do ((l list (cdr l)) 



(r list) 



(i 0 (+ i 1))) 



((atom l) r) 



(if (>= i n) (pop r)))) 



