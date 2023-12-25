*∗<ClLinks styled={true} term={"debugger-hook"}><b>*debugger-hook*</b></ClLinks>∗ Variable* 



**Value Type:** 



a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> (a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> at the time the debugger was entered), or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



When the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, it is called prior to normal entry into the debugger, either due to a call to <ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks> or due to automatic entry into the debugger from a call to <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> or <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> with a condition that is not handled. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may either handle the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> (transfer control) or return normally (allowing the standard debugger to run). To minimize recursive errors while debugging, <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> is bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> by <ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks> prior to calling the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



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



<ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks> 



**Notes:** 



When evaluating code typed in by the user interactively, it is sometimes useful to have the hook function bind <ClLinks styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that was its second argument so that recursive errors can be handled using the same interactive facility. 



