**signal** *Function* 



**Syntax:** 



**signal** *datum* &amp;rest *arguments →* **nil** 



**Arguments and Values:** 



*datum*, *arguments*—*designators* for a *condition* of default type **simple-condition**. 



**Description:** 



*Signals* the *condition* denoted by the given *datum* and *arguments*. If the *condition* is not handled, **signal** returns **nil**. 



**Examples:**
```lisp

(defun handle-division-conditions (condition) 
  (format t "Considering condition for division condition handling&#126;%") 
  (when (and (typep condition ’arithmetic-error) 
	     (eq ’/ (arithmetic-error-operation condition))) 
    (invoke-debugger condition))) 
HANDLE-DIVISION-CONDITIONS 
(defun handle-other-arithmetic-errors (condition) 
  (format t "Considering condition for arithmetic condition handling&#126;%") 
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



The debugger might be entered due to **\*break-on-signals\***. 







 



 



Handlers for the condition being signaled might transfer control. 



**Affected By:** 



Existing handler bindings. 



**\*break-on-signals\*** 



**See Also:** 



**\*break-on-signals\***, **error**, **simple-condition**, Section 9.1.4 (Signaling and Handling Conditions) 



**Notes:** 



If (typep *datum* \*break-on-signals\*) *yields true*, the debugger is entered prior to beginning the signaling process. The **continue** *restart* can be used to continue with the signaling process. This is also true for all other *functions* and *macros* that should, might, or must *signal conditions*. 



