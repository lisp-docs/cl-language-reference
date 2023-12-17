**lisp-implementation-type, lisp-implementation-version** *Function* 



**Syntax:** 



**lisp-implementation-type** ⟨*no arguments*⟩ → description* 



**lisp-implementation-version** ⟨*no arguments*⟩ → description* 



**Arguments and Values:** 



*description*—a *string* or **nil**. 



**Description:** 



**lisp-implementation-type** and **lisp-implementation-version** identify the current implementation of Common Lisp. 



**lisp-implementation-type** returns a *string* that identifies the generic name of the particular Common Lisp implementation. 



**lisp-implementation-version** returns a *string* that identifies the version of the particular Common Lisp implementation. 



If no appropriate and relevant result can be produced, **nil** is returned instead of a *string*. **Examples:**
```lisp

(lisp-implementation-type) 
→ "ACME Lisp" 
<i><sup>or</sup>→</i> "Joe’s Common Lisp" 
(lisp-implementation-version) 
→ "1.3a" 
→ "V2" 
<i><sup>or</sup>→</i> "Release 17.3, ECO #6" 

```
