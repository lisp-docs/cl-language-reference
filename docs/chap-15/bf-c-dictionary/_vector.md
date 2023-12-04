**vector** *Function* 



**Syntax:** 



**vector** &rest *objects → vector* 



**Arguments and Values:** 



*object*—an *object*. 



*vector*—a *vector* of *type* (vector t \*). 



**Description:** 



Creates a *fresh simple general vector* whose size corresponds to the number of *objects*. The *vector* is initialized to contain the *objects*. 



**Examples:**
```lisp
 



(arrayp (setq v (vector 1 2 ’sirens))) *→ true* 



(vectorp v) *→ true* 



(simple-vector-p v) *→ true* 



(length v) *→* 3 







 



 




```
**See Also:** 



**make-array** 



**Notes:** 



**vector** is analogous to **list**. 



(vector a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>) 



*≡* (make-array (list *n*) :element-type t 



:initial-contents 



(list a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>)) 



