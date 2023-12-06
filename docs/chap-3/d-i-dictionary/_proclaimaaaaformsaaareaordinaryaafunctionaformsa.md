**proclaim** *forms* are ordinary *function forms*, *macro forms* can expand into them. **declaim** *Macro* 



**Syntax:** 



**declaim** *\{declaration-specifier\}*\* *! implementation-dependent* 



Evaluation and 



 



 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



Establishes the *declarations* specified by the *declaration-specifiers*. 



If a use of this macro appears as a *top level form* in a *file* being processed by the *file compiler* , the proclamations are also made at compile-time. As with other defining macros, it is unspecified whether or not the compile-time side-e↵ects of a **declaim** persist after the *file* has been *compiled*. 



**Examples:**
```lisp
 




```
**See Also:** 



**declare**, **proclaim** 



