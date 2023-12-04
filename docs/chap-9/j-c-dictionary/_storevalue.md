**store-value** *Restart* 



**Data Arguments Required:** 



a value to use instead (on an ongoing basis). 



**Description:** 



The **store-value** *restart* is generally used by *handlers* trying to recover from errors of *types* such as **cell-error** or **type-error**, which may wish to supply a replacement datum to be stored permanently. 



**Examples:**
```lisp
 



(defun type-error-auto-coerce (c) 



(when (typep c ’type-error) 



(let ((r (find-restart ’store-value c))) 



(handler-case (let ((v (coerce (type-error-datum c) 







 



 



(type-error-expected-type c)))) 



(invoke-restart r v)) 



(error ()))))) *→* TYPE-ERROR-AUTO-COERCE 



(let ((x 3)) 



(handler-bind ((type-error #’type-error-auto-coerce)) 



(check-type x float) 



x)) *→* 3.0 




```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), **invoke-restart**, **store-value** (*function*), **ccase**, **check-type**, **ctypecase**, **use-value** (*function* and *restart*) 



