**identity** *Function* 



**Syntax:** 



**identity** *object → object* 



**Arguments and Values:** 



*object*—an *object*. 



**Description:** 



Returns its argument *object*. 



**Examples:**
```lisp
 



(identity 101) *→* 101 



(mapcan #’identity (list (list 1 2 3) ’(4 5 6))) *→* (1 2 3 4 5 6) 




```
**Notes:** 



**identity** is intended for use with functions that require a *function* as an argument. 



(eql x (identity x)) returns *true* for all possible values of *x*, but (eq x (identity x)) might return *false* when *x* is a *number* or *character* . 















**identity** could be defined by 



(defun identity (x) x) 



