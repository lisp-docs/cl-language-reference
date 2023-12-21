**class-name** *Standard Generic Function* 



**Syntax:** 



**class-name** *class ! name* 



**Method Signatures:** 



**class-name** (*class* **class**) 



**Arguments and Values:** 



*class*—a *class object*. 



*name*—a *symbol*. 



**Description:** 



Returns the *name* of the given *class*. 



**See Also:** 



**find-class**, Section 4.3 (Classes) 



**Notes:** 



If *S* is a *symbol* such that *S* =(class-name *C*) and *C* =(find-class *S*), then *S* is the proper name of *C*. For further discussion, see Section 4.3 (Classes). 



The name of an anonymous *class* is **nil**. 







 



 



**(setf class-name)** *Standard Generic Function* 



**Syntax:** 



**(setf class-name)** *new-value class ! new-value* 



**Method Signatures:** 



**(setf class-name)** *new-value* (*class* **class**) 



**Arguments and Values:** 



*new-value*—a *symbol*. 



*class*—a *class*. 



**Description:** 



The generic function (setf class-name) sets the name of a *class* object. 



**See Also:** 



**find-class**, *proper name*, Section 4.3 (Classes) 



