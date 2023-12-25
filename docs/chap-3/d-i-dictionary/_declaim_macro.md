**declaim** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> *\{declaration-specifier\}*\* *! implementation-dependent* 



Evaluation and 



 



 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



Establishes the <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> specified by the *declaration-specifiers*. 



If a use of this macro appears as a *top level form* in a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> being processed by the *file compiler* , the proclamations are also made at compile-time. As with other defining macros, it is unspecified whether or not the compile-time side-e↵ects of a <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> persist after the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> has been *compiled*. 



**Examples:**
```lisp


```
**See Also:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> 



