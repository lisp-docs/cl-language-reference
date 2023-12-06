**psetq** *Macro* 



**Syntax:** 



**psetq** *\{↓pair\}*\* *→* **nil** 



*pair::*=*var form* 



**Pronunciation:** 



**psetq**: [ **p—e set kyu-** ] 



**Arguments and Values:** 



*var*—a *symbol* naming a *variable* other than a *constant variable*. 



*form*—a *form*. 



**Description:** 



Assigns values to *variables*. 



This is just like **setq**, except that the assignments happen “in parallel.” That is, first all of the forms are evaluated, and only then are the variables set to the resulting values. In this way, the assignment to one variable does not affect the value computation of another in the way that would occur with **setq**’s sequential assignment. 



If any *var* refers to a *binding* made by **symbol-macrolet**, then that *var* is treated as if **psetf** (not **psetq**) had been used. 















**Examples:**
```lisp
 



;; A simple use of PSETQ to establish values for variables. 



;; As a matter of style, many programmers would prefer SETQ 



;; in a simple situation like this where parallel assignment 



;; is not needed, but the two have equivalent effect. 



(psetq a 1 b 2 c 3) *→* NIL 



a *→* 1 



b *→* 2 



c *→* 3 



;; Use of PSETQ to update values by parallel assignment. 



;; The effect here is very different than if SETQ had been used. 



(psetq a (1+ b) b (1+ a) c (+ a b)) *→* NIL 



a *→* 3 



b *→* 2 



c *→* 3 



;; Use of PSETQ on a symbol macro. 



(let ((x (list 10 20 30))) 



(symbol-macrolet ((y (car x)) (z (cadr x))) 



(psetq y (1+ z) z (1+ y)) 



(list x y z))) 



*→* ((21 11 30) 21 11) 



;; Use of parallel assignment to swap values of A and B. 



(let ((a 1) (b 2)) 



(psetq a b b a) 



(values a b)) 



*→* 2, 1 




```
**Side Effects:** 



The values of *forms* are assigned to *vars*. 



**See Also:** 



**psetf**, **setq** 



