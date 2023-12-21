*∗***debugger-hook***∗ Variable* 



**Value Type:** 



a *designator* for a *function* of two *arguments* (a *condition* and the *value* of **\*debugger-hook\*** at the time the debugger was entered), or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



When the *value* of **\*debugger-hook\*** is *non-nil*, it is called prior to normal entry into the debugger, either due to a call to **invoke-debugger** or due to automatic entry into the debugger from a call to **error** or **cerror** with a condition that is not handled. The *function* may either handle the *condition* (transfer control) or return normally (allowing the standard debugger to run). To minimize recursive errors while debugging, **\*debugger-hook\*** is bound to **nil** by **invoke-debugger** prior to calling the *function*. 



**Examples:**
```lisp

(defun one-of (choices &optional (prompt "Choice")) 
  (let ((n (length choices)) (i)) 
    (do ((c choices (cdr c)) (i 1 (+ i 1))) 
	((null c)) 
      (format t "~&[~D] ~A~%" i (car c))) 
    (do () ((typep i ‘(integer 1 ,n))) 
      (format t "~&~A: " prompt) 
      (setq i (read)) 

      
      
      (fresh-line)) 
    (nth (- i 1) choices))) 
(defun my-debugger (condition me-or-my-encapsulation) 
  (format t "~&Fooey: ~A" condition) 
  (let ((restart (one-of (compute-restarts)))) 
    (if (not restart) (error "My debugger got an error.")) 
    (let ((\*debugger-hook\* me-or-my-encapsulation)) 
      (invoke-restart-interactively restart)))) 
(let ((\*debugger-hook\* #’my-debugger)) 
  (+ 3 ’a)) 
▷ Fooey: The argument to +, A, is not a number. 
▷ [1] Supply a replacement for A. 
▷ [2] Return to Cloe Toplevel. 
▷ Choice: 1 
▷ Form to evaluate and use: (+ 5 ’b) 
▷ Fooey: The argument to +, B, is not a number. 
▷ [1] Supply a replacement for B. 
▷ [2] Supply a replacement for A. 
▷ [3] Return to Cloe Toplevel. 
▷ Choice: 1 
▷ Form to evaluate and use: 1 
→ 9 

```
**Affected By:** 



**invoke-debugger** 



**Notes:** 



When evaluating code typed in by the user interactively, it is sometimes useful to have the hook function bind **\*debugger-hook\*** to the *function* that was its second argument so that recursive errors can be handled using the same interactive facility. 



