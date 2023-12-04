**find-all-symbols** *Function* 



**Syntax:** 



**find-all-symbols** *string → symbols* 



**Arguments and Values:** 



*string*—a *string designator* . 



*symbols*—a *list* of *symbols*. 



**Description:** 



**find-all-symbols** searches every *registered package* for *symbols* that have a *name* that is the *same* (under **string=**) as *string*. A *list* of all such *symbols* is returned. Whether or how the *list* is ordered is *implementation-dependent*. 



**Examples:**
```lisp
 



(find-all-symbols ’car) 



*→* (CAR) 



<i><sup>or</sup>→</i> (CAR VEHICLES:CAR) 



<i><sup>or</sup>→</i> (VEHICLES:CAR CAR) 



(intern "CAR" (make-package ’temp :use nil)) *→* TEMP::CAR, NIL 



(find-all-symbols ’car) 



*→* (TEMP::CAR CAR) 



<i><sup>or</sup>→</i> (CAR TEMP::CAR) 



<i><sup>or</sup>→</i> (TEMP::CAR CAR VEHICLES:CAR) 



<i><sup>or</sup>→</i> (CAR TEMP::CAR VEHICLES:CAR) 




```
**See Also:** 



**find-symbol** 



