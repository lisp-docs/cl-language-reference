**handler-bind** *Macro* 



**Syntax:** 



**handler-bind** (*\{↓binding\}*\*) *\{form\}*\* *→ \{result\}*\* 



*binding::*=(*type handler*) 



**Arguments and Values:** 



*type*—a *type specifier* . 



*handler*—a *form*; evaluated to produce a *handler-function*. 



*handler-function*—a *designator* for a *function* of one *argument*. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



Executes *forms* in a *dynamic environment* where the indicated *handler bindings* are in effect. 



Each *handler* should evaluate to a *handler-function*, which is used to handle *conditions* of the given *type* during execution of the *forms*. This *function* should take a single argument, the *condition* being signaled. 



If more than one *handler binding* is supplied, the *handler bindings* are searched sequentially from top to bottom in search of a match (by visual analogy with **typecase**). If an appropriate *type* is found, the associated handler is run in a *dynamic environment* where none of these *handler* bindings are visible (to avoid recursive errors). If the *handler declines*, the search continues for another *handler* . 



If no appropriate *handler* is found, other *handlers* are sought from dynamically enclosing contours. If no *handler* is found outside, then **signal** returns or **error** enters the debugger. 



**Examples:**
```lisp
 



In the following code, if an unbound variable error is signaled in the body (and not handled by an intervening handler), the first function is called. 







 



 



(handler-bind ((unbound-variable #’(lambda ...)) 



(error #’(lambda ...))) 



...) 



If any other kind of error is signaled, the second function is called. In either case, neither handler is active while executing the code in the associated function. 



(defun trap-error-handler (condition) 



(format \*error-output\* "&#126;&amp;&#126;A&#126;&amp;" condition) 



(throw ’trap-errors nil)) 



(defmacro trap-errors (&amp;rest forms) 



‘(catch ’trap-errors 



(handler-bind ((error #’trap-error-handler)) 



,@forms))) 



(list (trap-errors (signal "Foo.") 1) 



(trap-errors (error "Bar.") 2) 



(+ 1 2)) 



▷ Bar. 



*→* (1 NIL 3) 



Note that “Foo.” is not printed because the condition made by **signal** is a *simple condition*, which is not of *type* **error**, so it doesn’t trigger the handler for **error** set up by trap-errors. 




```
**See Also:** 



**handler-case** 



