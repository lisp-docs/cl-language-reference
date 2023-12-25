*∗<DictionaryLink styled={true} term={"debugger-hook"}><b>*debugger-hook*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> (a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> at the time the debugger was entered), or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



When the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, it is called prior to normal entry into the debugger, either due to a call to <DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink> or due to automatic entry into the debugger from a call to <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> or <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> with a condition that is not handled. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may either handle the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> (transfer control) or return normally (allowing the standard debugger to run). To minimize recursive errors while debugging, <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> is bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> by <DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink> prior to calling the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



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
*→* 9 

```
**Affected By:** 



<DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink> 



**Notes:** 



When evaluating code typed in by the user interactively, it is sometimes useful to have the hook function bind <DictionaryLink styled={true} term={"debugger-hook"}><b>\*debugger-hook\*</b></DictionaryLink> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that was its second argument so that recursive errors can be handled using the same interactive facility. 



