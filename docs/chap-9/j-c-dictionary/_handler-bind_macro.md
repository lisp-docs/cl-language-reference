**handler-bind** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink> (<GlossaryTerm styled={true} term={"binding"}><i>\{↓binding\}</i></GlossaryTerm>\*) <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{result\}*\* 



<GlossaryTerm styled={true} term={"binding"}><i>binding::</i></GlossaryTerm>=(*type handler*) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *type specifier* . 



<GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a *handler-function*. 



*handler-function*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Executes <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a *dynamic environment* where the indicated *handler bindings* are in effect. 



Each <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> should evaluate to a *handler-function*, which is used to handle <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> during execution of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> should take a single argument, the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being signaled. 



If more than one *handler binding* is supplied, the *handler bindings* are searched sequentially from top to bottom in search of a match (by visual analogy with <DictionaryLink styled={true} term={"typecase"}><b>typecase</b></DictionaryLink>). If an appropriate <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is found, the associated handler is run in a *dynamic environment* where none of these <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> bindings are visible (to avoid recursive errors). If the *handler declines*, the search continues for another <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> . 



If no appropriate <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is found, other <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> are sought from dynamically enclosing contours. If no <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> is found outside, then <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> returns or <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> enters the debugger. 



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
*→* (1 NIL 3) 
Note that “Foo.” is not printed because the condition made by **signal** is a *simple condition*, which is not of *type* **error**, so it doesn’t trigger the handler for **error** set up by trap-errors. 

```
**See Also:** 



<DictionaryLink styled={true} term={"handler-case"}><b>handler-case</b></DictionaryLink> 



