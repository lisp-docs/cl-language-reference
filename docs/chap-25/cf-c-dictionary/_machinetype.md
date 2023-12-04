**machine-type** *Function* 



**Syntax:** 



**machine-type** *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



Returns a *string* that identifies the generic name of the computer hardware on which Common Lisp is running. 



**Examples:**
```lisp
 



(machine-type) 



*→* "DEC PDP-10" 



<i><sup>or</sup>→</i> "Symbolics LM-2" 




```
**Affected By:** 



The machine type. The implementation. 



**See Also:** 



**machine-version** 



