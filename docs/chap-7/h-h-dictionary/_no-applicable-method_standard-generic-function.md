**no-applicable-method** *Standard Generic Function* 



**Syntax:** 



**no-applicable-method** *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



**no-applicable-method** (*generic-function* **t**) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a *generic function* on which no *applicable method* was found. 



*function-arguments*—*arguments* to the *generic-function*. 



*result*—an *object*. 



**Description:** 



The generic function **no-applicable-method** is called when a *generic function* is invoked and no *method* on that *generic function* is applicable. The *default method* signals an error. 



The generic function **no-applicable-method** is not intended to be called by programmers. Programmers may write *methods* for it. 







 



 



**Exceptional Situations:** 



The default *method* signals an error of *type* **error**. 



**See Also:** 



