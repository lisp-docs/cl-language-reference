**declaim** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink> *\{declaration-specifier\}*\* *! implementation-dependent* 



Evaluation and 



 



 



**Arguments and Values:** 



*declaration-specifier*—a <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifier</i></GlossaryTerm> ; not evaluated. 



**Description:** 



Establishes the <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm> specified by the *declaration-specifiers*. 



If a use of this macro appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> in a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> being processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> , the proclamations are also made at compile-time. As with other defining macros, it is unspecified whether or not the compile-time side-e↵ects of a <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink> persist after the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> has been *compiled*. 



**Examples:**
```lisp

```
**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 



