**handler-bind** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"handler-bind"}><b>handler-bind</b></ClLinks> (<ClLinks styled={true} term={"binding"}><i>\{↓binding\}</i></ClLinks>\*) <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



<ClLinks styled={true} term={"binding"}><i>binding::</i></ClLinks>=(*type handler*) 



**Arguments and Values:** 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>—a *type specifier* . 



<ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce a *handler-function*. 



*handler-function*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Executes <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in a *dynamic environment* where the indicated *handler bindings* are in effect. 



Each <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> should evaluate to a *handler-function*, which is used to handle <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of the given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> during execution of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> should take a single argument, the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being signaled. 



If more than one *handler binding* is supplied, the *handler bindings* are searched sequentially from top to bottom in search of a match (by visual analogy with <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks>). If an appropriate <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is found, the associated handler is run in a *dynamic environment* where none of these <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> bindings are visible (to avoid recursive errors). If the *handler declines*, the search continues for another <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> . 



If no appropriate <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is found, other <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> are sought from dynamically enclosing contours. If no <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> is found outside, then <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> returns or <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> enters the debugger. 



**Examples:**
```lisp

In the following code, if an unbound variable error is signaled in the body (and not handled by an intervening handler), the first function is called. 



(handler-bind ((unbound-variable #’(lambda ...)) 
	       (error #’(lambda ...))) 
  ...) 
If any other kind of error is signaled, the second function is called. In either case, neither handler is active while executing the code in the associated function. 
(defun trap-error-handler (condition) 
  (format \*error-output\* "~&~A~&" condition) 
  (throw ’trap-errors nil)) 
(defmacro trap-errors (&rest forms) 
  ‘(catch ’trap-errors 
     (handler-bind ((error #’trap-error-handler)) 
       ,@forms))) 
(list (trap-errors (signal "Foo.") 1) 
      (trap-errors (error "Bar.") 2) 
      (+ 1 2)) 
▷ Bar. 
→ (1 NIL 3) 
Note that “Foo.” is not printed because the condition made by **signal** is a *simple condition*, which is not of *type* **error**, so it doesn’t trigger the handler for **error** set up by trap-errors. 

```
**See Also:** 



<ClLinks styled={true} term={"handler-case"}><b>handler-case</b></ClLinks> 



