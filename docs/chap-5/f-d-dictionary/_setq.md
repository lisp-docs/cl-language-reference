**setq** *Special Form* 



**Syntax:** 



**setq** *\&#123;↓pair\&#125;*\* *→ result* 



*pair::*=*var form* 



**Pronunciation:** 



[ **set kyu-** ] 



**Arguments and Values:** 



*var*—a *symbol* naming a *variable* other than a *constant variable*. 



*form*—a *form*. 



*result*—the *primary value* of the last *form*, or **nil** if no *pairs* were supplied. 



**Description:** 



Assigns values to *variables*. 



(setq *var1 form1 var2 form2* ...) is the simple variable assignment statement of Lisp. First *form1* is evaluated and the result is stored in the variable *var1*, then *form2* is evaluated and the result stored in *var2*, and so forth. **setq** may be used for assignment of both lexical and dynamic variables. 



If any *var* refers to a *binding* made by **symbol-macrolet**, then that *var* is treated as if **setf** (not **setq**) had been used. 



**Examples:**
```lisp
 



;; A simple use of SETQ to establish values for variables. 



(setq a 1 b 2 c 3) *→* 3 



a *→* 1 



b *→* 2 



c *→* 3 



;; Use of SETQ to update values by sequential assignment. 



Data and Control 











(setq a (1+ b) b (1+ a) c (+ a b)) *→* 7 



a *→* 3 



b *→* 4 



c *→* 7 



;; This illustrates the use of SETQ on a symbol macro. 



(let ((x (list 10 20 30))) 



(symbol-macrolet ((y (car x)) (z (cadr x))) 



(setq y (1+ z) z (1+ y)) 



(list x y z))) 



*→* ((21 22 30) 21 22) 




```
**Side Effects:** 



The *primary value* of each *form* is assigned to the corresponding *var*. 



**See Also:** 



**psetq**, **set**, **setf** 



