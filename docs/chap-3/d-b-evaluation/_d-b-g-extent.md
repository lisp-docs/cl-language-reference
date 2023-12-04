 



Contorted-example works only because the *function* named by f is invoked during the *extent* of the *exit point*. Once the flow of execution has left the block, the *exit point* is *disestablished*. For example: 



(defun invalid-example () 



(let ((y (block here #’(lambda (z) (return-from here z))))) 



(if (numberp y) y (funcall y 5)))) 



One might expect the call (invalid-example) to produce 5 by the following incorrect reasoning: **let** binds y to the value of **block**; this value is a *function* resulting from the *lambda expression*. Because y is not a number, it is invoked on the value 5. The **return-from** should then return this value from the *exit point* named here, thereby exiting from the block again and giving y the value 5 which, being a number, is then returned as the value of the call to invalid-example. 



The argument fails only because *exit points* have *dynamic extent*. The argument is correct up to the execution of **return-from**. The execution of **return-from** should signal an error of *type* **control-error**, however, not because it cannot refer to the *exit point*, but because it does correctly refer to an *exit point* and that *exit point* has been *disestablished*. 



A reference by name to a dynamic *exit point* binding such as a *catch tag* refers to the most recently *established binding* of that name that has not been *disestablished*. For example: 



(defun fun1 (x) 



(catch ’trap (+ 3 (fun2 x)))) 



(defun fun2 (y) 



(catch ’trap (\* 5 (fun3 y)))) 



(defun fun3 (z) 



(throw ’trap z))  







Consider the call (fun1 7). The result is 10. At the time the **throw** is executed, there are two outstanding catchers with the name trap: one established within procedure fun1, and the other within procedure fun2. The latter is the more recent, and so the value 7 is returned from **catch** in fun2. Viewed from within fun3, the **catch** in fun2 shadows the one in fun1. Had fun2 been defined as 



(defun fun2 (y) 



(catch ’snare (\* 5 (fun3 y)))) 



then the two *exit points* would have different *names*, and therefore the one in fun1 would not be shadowed. The result would then have been 7. 



