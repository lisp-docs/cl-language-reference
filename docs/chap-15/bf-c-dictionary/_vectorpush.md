**vector-push, vector-push-extend** *Function* 



**Syntax:** 



**vector-push** *new-element vector → new-index-p* 



**vector-push-extend** *new-element vector* &amp;optional *extension → new-index* 



**Arguments and Values:** 



*new-element*—an *object*. 



*vector*—a *vector* with a *fill pointer* . 



*extension*—a positive *integer* . The default is *implementation-dependent*. 



*new-index-p*—a *valid array index* for *vector*, or **nil**. 



*new-index*—a *valid array index* for *vector*. 



**Description:** 



**vector-push** and **vector-push-extend** store *new-element* in *vector*. **vector-push** attempts to store *new-element* in the element of *vector* designated by the *fill pointer* , and to increase the *fill pointer* by one. If the (&gt;= (fill-pointer *vector*) (array-dimension *vector* 0)), neither *vector* nor its *fill pointer* are affected. Otherwise, the store and increment take place and **vector-push** returns the former value of the *fill pointer* which is one less than the one it leaves in *vector*. 



**vector-push-extend** is just like **vector-push** except that if the *fill pointer* gets too large, *vector* is extended using **adjust-array** so that it can contain more elements. *Extension* is the minimum number of elements to be added to *vector* if it must be extended. 



**vector-push** and **vector-push-extend** return the index of *new-element* in *vector*. If (&gt;= (fill-pointer *vector*) (array-dimension *vector* 0)), **vector-push** returns **nil**. 



**Examples:**
```lisp
 

(vector-push (setq fable (list ’fable)) 

(setq fa (make-array 8 

:fill-pointer 2 



 

 

:initial-element ’first-one))) *→* 2 

(fill-pointer fa) *→* 3 

(eq (aref fa 2) fable) *→ true* 

(vector-push-extend #\X 

(setq aa 

(make-array 5 

:element-type ’character 

:adjustable t 

:fill-pointer 3))) *→* 3 

(fill-pointer aa) *→* 4 

(vector-push-extend #\Y aa 4) *→* 4 

(array-total-size aa) *→* at least 5 

(vector-push-extend #\Z aa 4) *→* 5 

(array-total-size aa) *→* 9 ;(or more) 


```
**Affected By:** 



The value of the *fill pointer* . 



How *vector* was created. 



**Exceptional Situations:** 



An error of *type* **error** is signaled by **vector-push-extend** if it tries to extend *vector* and *vector* is not *actually adjustable*. 



An error of *type* **error** is signaled if *vector* does not have a *fill pointer* . 



**See Also:** 



**adjustable-array-p**, **fill-pointer**, **vector-pop** 



