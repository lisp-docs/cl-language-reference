**vector-pop** *Function* 



**Syntax:** 



**vector-pop** *vector → element* 



**Arguments and Values:** 



*vector*—a *vector* with a *fill pointer* . 



*element*—an *object*. 



**Description:** 



Decreases the *fill pointer* of *vector* by one, and retrieves the *element* of *vector* that is designated by the new *fill pointer* . 



**Examples:**
```lisp
 



(vector-push (setq fable (list ’fable)) 



(setq fa (make-array 8 



:fill-pointer 2 



:initial-element ’sisyphus))) *→* 2 



(fill-pointer fa) *→* 3 



(eq (vector-pop fa) fable) *→ true* 



(vector-pop fa) *→* SISYPHUS 



(fill-pointer fa) *→* 1 




```
**Side Effects:** 



The *fill pointer* is decreased by one. 



**Affected By:** 



The value of the *fill pointer* . 







 



 



**Exceptional Situations:** 



An error of *type* **type-error** is signaled if *vector* does not have a *fill pointer* . 



If the *fill pointer* is zero, **vector-pop** signals an error of *type* **error**. 



**See Also:** 



**vector-push**, **vector-push-extend**, **fill-pointer** 



