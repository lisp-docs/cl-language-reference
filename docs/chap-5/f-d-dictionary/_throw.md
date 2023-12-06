**throw** *Special Operator* 



**Syntax:** 



**throw** *tag result-form →* 



**Arguments and Values:** 



*tag*—a *catch tag*; evaluated. 



*result-form*—a *form*; evaluated as described below. 



Data and Control 











**throw** 



**Description:** 



**throw** causes a non-local control transfer to a **catch** whose tag is **eq** to *tag*. 



*Tag* is evaluated first to produce an *object* called the throw tag; then *result-form* is evaluated, and its results are saved. If the *result-form* produces multiple values, then all the values are saved. The most recent outstanding **catch** whose *tag* is **eq** to the throw tag is exited; the saved results are returned as the value or values of **catch**. 



The transfer of control initiated by **throw** is performed as described in Section 5.2 (Transfer of Control to an Exit Point). 



**Examples:**
```lisp
 



(catch ’result 



(setq i 0 j 0) 



(loop (incf j 3) (incf i) 



(if (= i 3) (throw ’result (values i j))))) *→* 3, 9 



(catch nil 



(unwind-protect (throw nil 1) 



(throw nil 2))) *→* 2 



The consequences of the following are undefined because the **catch** of b is passed over by the first **throw**, hence portable programs must assume that its *dynamic extent* is terminated. The *binding* of the *catch tag* is not yet *disestablished* and therefore it is the target of the second **throw**. 



(catch ’a 



(catch ’b 



(unwind-protect (throw ’a 1) 



(throw ’b 2)))) 



The following prints “The inner catch returns :SECOND-THROW” and then returns :outer-catch. 



(catch ’foo 



(format t "The inner catch returns &#126;s.&#126;%" 



(catch ’foo 



(unwind-protect (throw ’foo :first-throw) 



(throw ’foo :second-throw)))) 



:outer-catch) 



▷ The inner catch returns :SECOND-THROW 



*→* :OUTER-CATCH 




```
**Exceptional Situations:** 



If there is no outstanding *catch tag* that matches the throw tag, no unwinding of the stack is 











performed, and an error of *type* **control-error** is signaled. When the error is signaled, the *dynamic environment* is that which was in force at the point of the **throw**. 



**See Also:** 



**block**, **catch**, **return-from**, **unwind-protect**, Section 3.1 (Evaluation) 



**Notes:** 



**catch** and **throw** are normally used when the *exit point* must have *dynamic scope* (*e.g.*, the **throw** is not lexically enclosed by the **catch**), while **block** and **return** are used when *lexical scope* is sufficient. 



