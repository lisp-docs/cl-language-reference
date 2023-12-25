**with-compilation-unit** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink> ([[ *↓option* ]]) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{result\}*\* 



*option::*=:override *override* 



**Arguments and Values:** 



*override*—a *generalized boolean*; evaluated. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 







 



 



**Description:** 



Executes <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> from left to right. Within the *dynamic environment* of <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>, actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>. 



The set of *options* permitted may be extended by the implementation, but the only <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> keyword is :override. 



If nested dynamically only the outer call to <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink> has any effect unless the value associated with :override is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, in which case warnings are deferred only to the end of the innermost call for which *override* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



The function <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> provides the effect of 



(with-compilation-unit (:override nil) ...) 



around its <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. 



Any <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> extensions can only be provided as the result of an explicit programmer request by use of an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> keyword. <GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword :override. 



**Examples:**
```lisp

If an *implementation* would normally defer certain kinds of warnings, such as warnings about undefined functions, to the end of a compilation unit (such as a *file*), the following example shows how to cause those warnings to be deferred to the end of the compilation of several files. 
(defun compile-files (&rest files) 
  (with-compilation-unit () 
    (mapcar #’(lambda (file) (compile-file file)) files))) 
(compile-files "A" "B" "C") 
Note however that if the implementation does not normally defer any warnings, use of *with-compilation-unit* might not have any effect. 

```
**See Also:** 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> 



System 



 



 



*∗<DictionaryLink styled={true} term={"features"}><b><GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm></b></DictionaryLink>∗* 



