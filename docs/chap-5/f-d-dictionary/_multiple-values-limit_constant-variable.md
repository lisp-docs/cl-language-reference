**multiple-values-limit** *Constant Variable* 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is *implementation-dependent*. 



**Description:** 



The upper exclusive bound on the number of *values* that may be returned from a *function*, bound or assigned by **multiple-value-bind** or **multiple-value-setq**, or passed as a first argument to **nth-value**. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



**lambda-parameters-limit**, **call-arguments-limit** 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



