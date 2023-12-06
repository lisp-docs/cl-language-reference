**proclaim** *Function* 



**Syntax:** 



**proclaim** *declaration-specifier ! implementation-dependent* 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* . 



**Description:** 



*Establishes* the *declaration* specified by *declaration-specifier* in the *global environment*. 



Such a *declaration*, sometimes called a *global declaration* or a *proclamation*, is always in force unless locally *shadowed*. 



*Names* of *variables* and *functions* within *declaration-specifier* refer to *dynamic variables* and global *function* definitions, respectively. 







 



 



Figure 3–22 shows a list of *declaration identifiers* that can be used with **proclaim**. 



|**declaration inline optimize type ftype notinline special**|

| :- |





**Figure 3–22. Global Declaration Specifiers** 



An implementation is free to support other (*implementation-defined*) *declaration identifiers* as well. **Examples:**
```lisp
 



(defun declare-variable-types-globally (type vars) 



(proclaim ‘(type ,type ,@vars)) 



type) 



;; Once this form is executed, the dynamic variable \*TOLERANCE\* 



;; must always contain a float. 



(declare-variable-types-globally ’float ’(\*tolerance\*)) 



*!* FLOAT 




```
**See Also:** 



**declaim**, **declare**, Section 3.2 (Compilation) 



**Notes:** 



Although the *execution* of a **proclaim** *form* has e↵ects that might a↵ect compilation, the compiler does not make any attempt to recognize and specially process **proclaim** *forms*. A *proclamation* such as the following, even if a *top level form*, does not have any e↵ect until it is executed: 



(proclaim ’(special \*x\*)) 



If compile time side e↵ects are desired, **eval-when** may be useful. For example: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(proclaim ’(special \*x\*))) 



In most such cases, however, it is preferrable to use **declaim** for this purpose. 



Since 