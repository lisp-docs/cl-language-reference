**signal** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> *datum* &amp;rest *arguments →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*datum*, <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>—<ClLinks styled={true} term={"designator"}><i>designators</i></ClLinks> for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of default type <ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"signal"}><i>Signals</i></ClLinks> the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> denoted by the given *datum* and <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. If the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not handled, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



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



The debugger might be entered due to <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>. 







 



 



Handlers for the condition being signaled might transfer control. 



**Affected By:** 



Existing handler bindings. 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>, Section 9.1.4 (Signaling and Handling Conditions) 



**Notes:** 



If (typep *datum* \*break-on-signals\*) *yields true*, the debugger is entered prior to beginning the signaling process. The **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> can be used to continue with the signaling process. This is also true for all other <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> and <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> that should, might, or must *signal conditions*. 



