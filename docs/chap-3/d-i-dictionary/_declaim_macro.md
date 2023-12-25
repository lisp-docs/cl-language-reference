**declaim** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> *\{declaration-specifier\}*\* *! implementation-dependent* 



Evaluation and 



 



 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



Establishes the <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> specified by the *declaration-specifiers*. 



If a use of this macro appears as a *top level form* in a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> being processed by the *file compiler* , the proclamations are also made at compile-time. As with other defining macros, it is unspecified whether or not the compile-time side-e↵ects of a <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> persist after the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> has been *compiled*. 



**Examples:**
```lisp

```
**See Also:** 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> 



