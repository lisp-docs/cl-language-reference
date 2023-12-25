**declaim** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"declaim"}><b>declaim</b></ClLinks> *\{declaration-specifier\}*\* *! implementation-dependent* 



Evaluation and 



 



 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



Establishes the <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> specified by the *declaration-specifiers*. 



If a use of this macro appears as a *top level form* in a <ClLinks  term={"file"}><i>file</i></ClLinks> being processed by the *file compiler* , the proclamations are also made at compile-time. As with other defining macros, it is unspecified whether or not the compile-time side-e↵ects of a <ClLinks  term={"declaim"}><b>declaim</b></ClLinks> persist after the <ClLinks  term={"file"}><i>file</i></ClLinks> has been *compiled*. 



**Examples:**
```lisp

```
**See Also:** 



<ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> 



