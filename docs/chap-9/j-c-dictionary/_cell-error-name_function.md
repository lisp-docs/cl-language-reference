**cell-error-name** *Function* 



**Syntax:** 



**cell-error-name** *condition → name* 



**Arguments and Values:** 



*condition*—a *condition* of *type* **cell-error**. 



*name*—an *object*. 



**Description:** 



Returns the *name* of the offending cell involved in the *situation* represented by *condition*. 



The nature of the result depends on the specific *type* of *condition*. For example, if the *condition* is of *type* **unbound-variable**, the result is the *name* of the *unbound variable* which was being *accessed*, if the *condition* is of *type* **undefined-function**, this is the *name* of the *undefined function* which was being *accessed*, and if the *condition* is of *type* **unbound-slot**, this is the *name* of the *slot* which was being *accessed*. 



**See Also:** 



**cell-error**, **unbound-slot**, **unbound-variable**, **undefined-function**, Section 9.1 (Condition System Concepts) 



