**intern** *Function* 



**Syntax:** 



**intern** *string* &amp;optional *package → symbol, status* 



**Arguments and Values:** 



*string*—a *string*. 



*package*—a *package designator* . The default is the *current package*. 



*symbol*—a *symbol*. 



*status*—one of :inherited, :external, :internal, or **nil**. 



**Description:** 



**intern** enters a *symbol* named *string* into *package*. If a *symbol* whose name is the same as *string* is already *accessible* in *package*, it is returned. If no such *symbol* is *accessible* in *package*, a new *symbol* with the given name is created and entered into *package* as an *internal symbol*, or as an *external symbol* if the *package* is the KEYWORD *package*; *package* becomes the *home package* of the created *symbol*. 



The first value returned by **intern**, *symbol*, is the *symbol* that was found or created. The meaning of the *secondary value*, *status*, is as follows: 



:internal 



The *symbol* was found and is *present* in *package* as an *internal symbol*. 



:external 



The *symbol* was found and is *present* as an *external symbol*. 



:inherited 



The *symbol* was found and is inherited via **use-package** (which implies that the *symbol* is internal). 



**nil** 



No pre-existing *symbol* was found, so one was created. 







 



 



It is *implementation-dependent* whether the *string* that becomes the new *symbol*’s *name* is the given *string* or a copy of it. Once a *string* has been given as the *string argument* to *intern* in this situation where a new *symbol* is created, the consequences are undefined if a subsequent attempt is made to alter that *string*. 



**Examples:**
```lisp
 

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 

(intern "Never-Before") *→* |Never-Before|, NIL 

(intern "Never-Before") *→* |Never-Before|, :INTERNAL 

(intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, NIL 

(intern "NEVER-BEFORE" "KEYWORD") *→* :NEVER-BEFORE, :EXTERNAL 


```
**See Also:** 



**find-symbol**, **read**, **symbol**, **unintern**, Section 2.3.4 (Symbols as Tokens) 



**Notes:** 



**intern** does not need to do any name conflict checking because it never creates a new *symbol* if there is already an *accessible symbol* with the name given. 



