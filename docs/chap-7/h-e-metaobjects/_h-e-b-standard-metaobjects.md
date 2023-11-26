**7.4.1 Standard Meta-objects** 

The object system supplies a set of meta-objects, called standard meta-objects. These include the *class* **standard-object** and *instances* of the classes **standard-method**, **standard-generic-function**, and **method-combination**. 

*•* The *class* **standard-method** is the default *class* of *methods* defined by the **defmethod** and **defgeneric** *forms*. 

*•* The *class* **standard-generic-function** is the default *class* of *generic functions* defined by the forms **defmethod**, **defgeneric**, and **defclass**. 

*•* The *class* named **standard-object** is an *instance* of the *class* **standard-class** and is a *superclass* of every *class* that is an *instance* of **standard-class** except itself and **structure-class**. 

*•* Every *method* combination object is an *instance* of a *subclass* of *class* **method-combination**. 

 

 

