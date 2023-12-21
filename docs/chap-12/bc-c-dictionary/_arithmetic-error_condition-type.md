**arithmetic-error** *Condition Type* 



**Class Precedence List:** 



**arithmetic-error**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **arithmetic-error** consists of error conditions that occur during arithmetic operations. The operation and operands are initialized with the initialization arguments named :operation and :operands to **make-condition**, and are *accessed* by the functions **arithmetic-error-operation** and **arithmetic-error-operands**. 



**See Also:** 



**arithmetic-error-operation**, **arithmetic-error-operands** 



<b><sup>arithmetic-error-operands, arithmetic-error</sup> operation</b> <i>Function</i> 



**Syntax:** 



**arithmetic-error-operands** *condition ! operands* 



**arithmetic-error-operation** *condition ! operation* 



**Arguments and Values:** 



*condition*—a *condition* of *type* **arithmetic-error**. 



*operands*—a *list*. 



*operation*—a *function designator* . 



**Description:** 



**arithmetic-error-operands** returns a *list* of the operands which were used in the o↵ending call to the operation that signaled the *condition*. 







 



 



**arithmetic-error-operation** returns a *list* of the o↵ending operation in the o↵ending call that signaled the *condition*. 



**See Also:** 



**arithmetic-error**, Chapter 9 (Conditions) 



**Notes:** 



