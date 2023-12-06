**continue** *Restart* 



**Data Arguments Required:** 



None. 



**Description:** 



The **continue** *restart* is generally part of protocols where there is a single “obvious” way to continue, such as in **break** and **cerror**. Some user-defined protocols may also wish to incorporate it for similar reasons. In general, however, it is more reliable to design a special purpose restart with a name that more directly suits the particular application. 



**Examples:**
```lisp
 



(let ((x 3)) 



(handler-bind ((error #’(lambda (c) 



(let ((r (find-restart ’continue c))) 



(when r (invoke-restart r)))))) 



(cond ((not (floatp x)) 



(cerror "Try floating it." "&#126;D is not a float." x) 



(float x)) 



(t x)))) *→* 3.0 




```
**See Also:** 



Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), **invoke-restart**, **continue** (*function*), **assert**, **cerror** 



