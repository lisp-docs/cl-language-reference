**with-compilation-unit** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks> ([[ *↓option* ]]) <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



*option::*=:override *override* 



**Arguments and Values:** 



*override*—a *generalized boolean*; evaluated. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 







 



 



**Description:** 



Executes <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> from left to right. Within the *dynamic environment* of <ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>, actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to <ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>. 



The set of *options* permitted may be extended by the implementation, but the only <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> keyword is :override. 



If nested dynamically only the outer call to <ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks> has any effect unless the value associated with :override is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, in which case warnings are deferred only to the end of the innermost call for which *override* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



The function <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> provides the effect of 



(with-compilation-unit (:override nil) ...) 



around its <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. 



Any <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> extensions can only be provided as the result of an explicit programmer request by use of an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> keyword. <ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword :override. 



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



<ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> 



System 



 



 



*∗<ClLinks styled={true} term={"features"}><b><ClLinks styled={true} term={"feature"}><i>features</i></ClLinks></b></ClLinks>∗* 



