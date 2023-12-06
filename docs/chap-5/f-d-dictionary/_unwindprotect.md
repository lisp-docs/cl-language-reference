**unwind-protect** *Special Operator* 



**Syntax:** 



**unwind-protect** *protected-form \{cleanup-form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



*protected-form*—a *form*. 



*cleanup-form*—a *form*. 



*results*—the *values* of the *protected-form*. 



**Description:** 



**unwind-protect** evaluates *protected-form* and guarantees that *cleanup-forms* are executed before **unwind-protect** exits, whether it terminates normally or is aborted by a control transfer of some kind. **unwind-protect** is intended to be used to make sure that certain side effects take place after the evaluation of *protected-form*. 



If a *non-local exit* occurs during execution of *cleanup-forms*, no special action is taken. The *cleanup-forms* of **unwind-protect** are not protected by that **unwind-protect**. 



**unwind-protect** protects against all attempts to exit from *protected-form*, including **go**, **handler-case**, **ignore-errors**, **restart-case**, **return-from**, **throw**, and **with-simple-restart**. 



Undoing of *handler* and *restart bindings* during an exit happens in parallel with the undoing of the bindings of *dynamic variables* and **catch** tags, in the reverse order in which they were established. The effect of this is that *cleanup-form* sees the same *handler* and *restart bindings*, as well as *dynamic variable bindings* and **catch** tags, as were visible when the **unwind-protect** was entered. 



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

(setq state (1+ x))) *→* DUMMY-FUNCTION 

(catch ’abort (dummy-function 1)) *→* 2 

state *→* 2 

(catch ’abort (dummy-function ’trash)) *→* NOT-A-NUMBER 

state *→* RUNNING 

(catch ’abort (unwind-protect (dummy-function ’trash) 

(setq state ’aborted))) *→* NOT-A-NUMBER 

state *→* ABORTED 

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

(format t "The inner catch returns &#126;s.&#126;%" 

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



