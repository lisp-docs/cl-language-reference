**division-by-zero** consists of error conditions that occur because of division by zero. **floating-point-invalid-operation** *Condition Type* 



**Class Precedence List:** 



**floating-point-invalid-operation**, **arithmetic-error**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **floating-point-invalid-operation** consists of error conditions that occur because of certain floating point traps. 



It is *implementation-dependent* whether floating point traps occur, and whether or how they may be enabled or disabled. Therefore, conforming code may establish handlers for this condition, but must not depend on its being *signaled*. 







 



 



