**if** *Special Operator* 



**Syntax:** 



<ClLinks  term={"if"}><b>if</b></ClLinks> *test-form then-form* [*else-form*] → \{result\}\* 



**Arguments and Values:** 



*Test-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Then-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Else-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*results*—if the *test-form yielded true*, the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the *then-form*; otherwise, the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the *else-form*. 















**Description:** 



<ClLinks  term={"if"}><b>if</b></ClLinks> allows the execution of a <ClLinks  term={"form"}><i>form</i></ClLinks> to be dependent on a single *test-form*. 



First *test-form* is evaluated. If the result is <ClLinks  term={"true"}><i>true</i></ClLinks>, then *then-form* is selected; otherwise *else-form* is selected. Whichever form is selected is then evaluated. 



**Examples:**
```lisp
(if t 1) → 1 
(if nil 1 2) → 2 
(defun test () 
  (dolist (truth-value ’(t nil 1 (a b c))) 
    (if truth-value (print ’true) (print ’false)) 
    (prin1 truth-value))) → TEST 
(test) 
▷ TRUE T 
▷ FALSE NIL 
▷ TRUE 1 
▷ TRUE (A B C) 
→ NIL 
```
**See Also:** 



<ClLinks  term={"cond"}><b>cond</b></ClLinks>, <ClLinks  term={"unless"}><b>unless</b></ClLinks>, <ClLinks  term={"when"}><b>when</b></ClLinks> 



**Notes:** 



(if *test-form then-form else-form*) 



*≡* (cond (*test-form then-form*) (t *else-form*)) 



