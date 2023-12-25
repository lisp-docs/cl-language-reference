**error** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> *datum* &amp;rest *arguments →* 



**Arguments and Values:** 



*datum*, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type <DictionaryLink styled={true} term={"simple-error"}><b>simple-error</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> effectively invokes <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> on the denoted <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



If the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not handled, (invoke-debugger <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) is done. As a consequence of calling <DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> cannot directly return; the only exit from <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> can come by non-local transfer of control in a handler or by use of an interactive debugging command. 



**Examples:**
```lisp

(defun factorial (x) 
  (cond ((or (not (typep x ’integer)) (minusp x)) 
	 (error "~S is not a valid argument to FACTORIAL." x)) 
	((zerop x) 1) 

	
	
	**error** 
	(t (\* x (factorial (- x 1)))))) 
*→* FACTORIAL 
(factorial 20) 
*→* 2432902008176640000 
(factorial -1) 
▷ Error: -1 is not a valid argument to FACTORIAL. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return to Lisp Toplevel. 
▷ Debug> 
(setq a ’fred) 
*→* FRED 
(if (numberp a) (1+ a) (error "~S is not a number." A)) 
▷ Error: FRED is not a number. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return to Lisp Toplevel. 
▷ Debug> :Continue 1 
▷ Return to Lisp Toplevel. 
(define-condition not-a-number (error) 
  ((argument :reader not-a-number-argument :initarg :argument)) 
  (:report (lambda (condition stream) 
	     (format stream "~S is not a number." 
		     (not-a-number-argument condition))))) 
*→* NOT-A-NUMBER 
(if (numberp a) (1+ a) (error ’not-a-number :argument a)) 
▷ Error: FRED is not a number. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Return to Lisp Toplevel. 
▷ Debug> :Continue 1 
▷ Return to Lisp Toplevel. 

```
**Side Effects:** 



<GlossaryTerm styled={true} term={"handler"}><i>Handlers</i></GlossaryTerm> for the specified condition, if any, are invoked and might have side effects. Program execution might stop, and the debugger might be entered. 



**Affected By:** 



Existing handler bindings. 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



Signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *datum* and <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are not <GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignore-errors"}><b>ignore-errors</b></DictionaryLink>, <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"handler-bind"}><b>handler-bind</b></DictionaryLink>, Section 9.1 (Condition 



 



 



System Concepts) 



**Notes:** 



Some implementations may provide debugger commands for interactively returning from individual stack frames. However, it should be possible for the programmer to feel confident about writing code like: 



(defun wargames:no-win-scenario () 



(if (error "pushing the button would be stupid.")) 



(push-the-button)) 



In this scenario, there should be no chance that <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> will return and the button will get pushed. 



While the meaning of this program is clear and it might be proven ‘safe’ by a formal theorem prover, such a proof is no guarantee that the program is safe to execute. Compilers have been known to have bugs, computers to have signal glitches, and human beings to manually intervene in ways that are not always possible to predict. Those kinds of errors, while beyond the scope of the condition system to formally model, are not beyond the scope of things that should seriously be considered when writing code that could have the kinds of sweeping effects hinted at by this example. 



