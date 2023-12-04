**not** *Function* 



**Syntax:** 



**not** *x → boolean* 



**Arguments and Values:** 



*x*—a *generalized boolean* (*i.e.*, any *object*). 



*boolean*—a *boolean*. 



**Description:** 



Returns **t** if *x* is *false*; otherwise, returns **nil**. 



**Examples:**
```lisp
 



(not nil) *→* T 



(not ’()) *→* T 



(not (integerp ’sss)) *→* T 



(not (integerp 1)) *→* NIL 



(not 3.7) *→* NIL 



(not ’apple) *→* NIL 




```
**See Also:** 



**null** 



**Notes:** 



**not** is intended to be used to invert the ‘truth value’ of a *boolean* (or *generalized boolean*) whereas **null** is intended to be used to test for the *empty list*. Operationally, **not** and **null** compute the same result; which to use is a matter of style. 



