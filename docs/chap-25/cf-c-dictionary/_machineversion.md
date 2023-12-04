**machine-version** *Function* 



**Syntax:** 



**machine-version** *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



Returns a *string* that identifies the version of the computer hardware on which Common Lisp is running, or **nil** if no such value can be computed. 







 



 



**Examples:**
```lisp
 



(machine-version) *→* "KL-10, microcode 9" 




```
**Affected By:** 



The machine version, and the *implementation*. 



**See Also:** 



**machine-type**, **machine-instance** 



