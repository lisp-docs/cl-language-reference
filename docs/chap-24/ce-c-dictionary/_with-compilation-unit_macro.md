**with-compilation-unit** *Macro* 



**Syntax:** 



**with-compilation-unit** ([[ *↓option* ]]) *\{form\}*\* → \{result\}\* 



*option::*=:override *override* 



**Arguments and Values:** 



*override*—a *generalized boolean*; evaluated. The default is **nil**. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 







 



 



**Description:** 



Executes *forms* from left to right. Within the *dynamic environment* of **with-compilation-unit**, actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to **with-compilation-unit**. 



The set of *options* permitted may be extended by the implementation, but the only *standardized* keyword is :override. 



If nested dynamically only the outer call to **with-compilation-unit** has any effect unless the value associated with :override is *true*, in which case warnings are deferred only to the end of the innermost call for which *override* is *true*. 



The function **compile-file** provides the effect of 



(with-compilation-unit (:override nil) ...) 



around its *code*. 



Any *implementation-dependent* extensions can only be provided as the result of an explicit programmer request by use of an *implementation-dependent* keyword. *Implementations* are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword :override. 



**Examples:**
```lisp

If an *implementation* would normally defer certain kinds of warnings, such as warnings about undefined functions, to the end of a compilation unit (such as a *file*), the following example shows how to cause those warnings to be deferred to the end of the compilation of several files. 
(defun compile-files (&amp;rest files) 
		      (with-compilation-unit () 
			(mapcar #’(lambda (file) (compile-file file)) files))) 
  (compile-files "A" "B" "C") 
  Note however that if the implementation does not normally defer any warnings, use of *with-compilation-unit* might not have any effect. 

```
**See Also:** 



**compile**, **compile-file** 



System 



 



 



*∗***features***∗* 



