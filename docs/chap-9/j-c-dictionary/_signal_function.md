**signal** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> *datum* &amp;rest *arguments →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*datum*, <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"designator"}><i>designators</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of default type <DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>. 



**Description:** 



<GlossaryTerm styled={true} term={"signal"}><i>Signals</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> denoted by the given *datum* and <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not handled, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(defun handle-division-conditions (condition) 
  (format t "Considering condition for division condition handling~%") 
  (when (and (typep condition ’arithmetic-error) 
	     (eq ’/ (arithmetic-error-operation condition))) 
    (invoke-debugger condition))) 
HANDLE-DIVISION-CONDITIONS 
(defun handle-other-arithmetic-errors (condition) 
  (format t "Considering condition for arithmetic condition handling~%") 
  (when (typep condition ’arithmetic-error) 
    (abort))) 
HANDLE-OTHER-ARITHMETIC-ERRORS 
(define-condition a-condition-with-no-handler (condition) ()) 
A-CONDITION-WITH-NO-HANDLER 
(signal ’a-condition-with-no-handler) 
NIL 
(handler-bind ((condition #’handle-division-conditions) 
	       (condition #’handle-other-arithmetic-errors)) 
  (signal ’a-condition-with-no-handler)) 
Considering condition for division condition handling 
Considering condition for arithmetic condition handling 
NIL 
(handler-bind ((arithmetic-error #’handle-division-conditions) 
	       (arithmetic-error #’handle-other-arithmetic-errors)) 
  (signal ’arithmetic-error :operation ’\* :operands ’(1.2 b))) 
Considering condition for division condition handling 
Considering condition for arithmetic condition handling 
Back to Lisp Toplevel 

```
**Side Effects:** 



The debugger might be entered due to <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>. 







 



 



Handlers for the condition being signaled might transfer control. 



**Affected By:** 



Existing handler bindings. 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>, Section 9.1.4 (Signaling and Handling Conditions) 



**Notes:** 



If (typep *datum* \*break-on-signals\*) *yields true*, the debugger is entered prior to beginning the signaling process. The **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> can be used to continue with the signaling process. This is also true for all other <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> that should, might, or must *signal conditions*. 



