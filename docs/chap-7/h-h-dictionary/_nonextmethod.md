**no-next-method** *Standard Generic Function* 



**Syntax:** 



**no-next-method** *generic-function method* &rest *args → \&#123;result\&#125;*\* 



**Method Signatures:** 



**no-next-method** (*generic-function* **standard-generic-function**) 



(*method* **standard-method**) 



&rest *args* 



**Arguments and Values:** 



*generic-function* – *generic function* to which *method* belongs. 



*method* – *method* that contained the call to **call-next-method** for which there is no next *method*. *args* – arguments to **call-next-method**. 



*result*—an *object*. 



**Description:** 



The *generic function* **no-next-method** is called by **call-next-method** when there is no *next method*. 



The *generic function* **no-next-method** is not intended to be called by programmers. Programmers may write *methods* for it. 



**Exceptional Situations:** 



The system-supplied *method* on **no-next-method** signals an error of *type* **error**. 



**See Also:** 



**call-next-method** 







 



 



