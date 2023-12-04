**machine-instance** *Function* 



**Syntax:** 



**machine-instance** *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



Returns a *string* that identifies the particular instance of the computer hardware on which Common Lisp is running, or **nil** if no such *string* can be computed. 



**Examples:**
```lisp
 



(machine-instance) 



*→* "ACME.COM" 



<i><sup>or</sup>→</i> "S/N 123231" 



<i><sup>or</sup>→</i> "18.26.0.179" 



<i><sup>or</sup>→</i> "AA-00-04-00-A7-A4" 




```
**Affected By:** 



The machine instance, and the *implementation*. 







 



 



**See Also:** 



**machine-type**, **machine-version** 



