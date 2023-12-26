**unwind-protect** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> *protected-form \{cleanup-form\}*\* → \{result\}\* 



**Arguments and Values:** 



*protected-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*cleanup-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the *protected-form*. 



**Description:** 



<ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> evaluates *protected-form* and guarantees that *cleanup-forms* are executed before <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> exits, whether it terminates normally or is aborted by a control transfer of some kind. <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> is intended to be used to make sure that certain side effects take place after the evaluation of *protected-form*. 



If a <GlossaryTerm styled={true} term={"non-local exit"}><i>non-local exit</i></GlossaryTerm> occurs during execution of *cleanup-forms*, no special action is taken. The *cleanup-forms* of <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> are not protected by that <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks>. 



<ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> protects against all attempts to exit from *protected-form*, including <ClLinks  term={"go"}><b>go</b></ClLinks>, <ClLinks  term={"handler-case"}><b>handler-case</b></ClLinks>, <ClLinks  term={"ignore-errors"}><b>ignore-errors</b></ClLinks>, <ClLinks  term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, <ClLinks  term={"throw"}><b>throw</b></ClLinks>, and <ClLinks  term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks>. 



Undoing of <ClLinks  term={"handler"}><i>handler</i></ClLinks> and *restart bindings* during an exit happens in parallel with the undoing of the bindings of <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> and <ClLinks  term={"catch"}><b>catch</b></ClLinks> tags, in the reverse order in which they were established. The effect of this is that *cleanup-form* sees the same <ClLinks  term={"handler"}><i>handler</i></ClLinks> and *restart bindings*, as well as *dynamic variable bindings* and <ClLinks  term={"catch"}><b>catch</b></ClLinks> tags, as were visible when the <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> was entered. 



**Examples:**
```lisp
(tagbody 
   (let ((x 3)) 
     Data and Control 

     **unwind-protect** 
     (unwind-protect 
	  (if (numberp x) (go out)) 
       (print x))) 
 out 
 ...) 
When **go** is executed, the call to **print** is executed first, and then the transfer of control to the tag out is completed. 
(defun dummy-function (x) 
  (setq state ’running) 
  (unless (numberp x) (throw ’abort ’not-a-number)) 
  (setq state (1+ x))) → DUMMY-FUNCTION 
(catch ’abort (dummy-function 1)) → 2 
state → 2 
(catch ’abort (dummy-function ’trash)) → NOT-A-NUMBER 
state → RUNNING 
(catch ’abort (unwind-protect (dummy-function ’trash) 
		(setq state ’aborted))) → NOT-A-NUMBER 
state → ABORTED 
The following code is not correct: 
(unwind-protect 
     (progn (incf \*access-count\*) 
	    (perform-access)) 
  (decf \*access-count\*)) 
If an exit occurs before completion of **incf**, the **decf** *form* is executed anyway, resulting in an incorrect value for \*access-count\*. The correct way to code this is as follows: 
(let ((old-count \*access-count\*)) 
  (unwind-protect 
       (progn (incf \*access-count\*) 
	      (perform-access)) 
    (setq \*access-count\* old-count))) 
;;; The following returns 2. 
(block nil 
  (unwind-protect (return 1) 
    (return 2))) 
;;; The following has undefined consequences. 
(block a 
  (block b 
    (unwind-protect (return-from a 1) 

      **unwind-protect** 
      (return-from b 2)))) 
;;; The following returns 2. 
(catch nil 
  (unwind-protect (throw nil 1) 
    (throw nil 2))) 
;;; The following has undefined consequences because the catch of B is 
;;; passed over by the first THROW, hence portable programs must assume 
;;; its dynamic extent is terminated. The binding of the catch tag is not 
;;; yet disestablished and therefore it is the target of the second throw. 
(catch ’a 
  (catch ’b 
    (unwind-protect (throw ’a 1) 
      (throw ’b 2)))) 
;;; The following prints "The inner catch returns :SECOND-THROW" 
;;; and then returns :OUTER-CATCH. 
(catch ’foo 
  (format t "The inner catch returns ~s.~%" 
	  (catch ’foo 
	    (unwind-protect (throw ’foo :first-throw) 
	      (throw ’foo :second-throw)))) 
  :outer-catch) 
;;; The following returns 10. The inner CATCH of A is passed over, but 
;;; because that CATCH is disestablished before the THROW to A is executed, 
;;; it isn’t seen. 
(catch ’a 
  (catch ’b 
    (unwind-protect (1+ (catch ’a (throw ’b 1))) 
      (throw ’a 10)))) 
;;; The following has undefined consequences because the extent of 
;;; the (CATCH ’BAR ...) exit ends when the (THROW ’FOO ...) 
;;; commences. 
(catch ’foo 
  (catch ’bar 
    (unwind-protect (throw ’foo 3) 
      (throw ’bar 4) 
      (print ’xxx)))) 
Data and Control 

;;; The following returns 4; XXX is not printed. 
;;; The (THROW ’FOO ...) has no effect on the scope of the BAR 
;;; catch tag or the extent of the (CATCH ’BAR ...) exit. 
(catch ’bar 
  (catch ’foo 
    (unwind-protect (throw ’foo 3) 
      (throw ’bar 4) 
      (print ’xxx)))) 
;;; The following prints 5. 
(block nil 
  (let ((x 5)) 
    (declare (special x)) 
    (unwind-protect (return) 
      (print x)))) 
```
**See Also:** 



<ClLinks  term={"catch"}><b>catch</b></ClLinks>, <ClLinks  term={"go"}><b>go</b></ClLinks>, <ClLinks  term={"handler-case"}><b>handler-case</b></ClLinks>, <ClLinks  term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks  term={"return"}><b>return</b></ClLinks>, <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, <ClLinks  term={"throw"}><b>throw</b></ClLinks>, Section 3.1 (Evaluation) 