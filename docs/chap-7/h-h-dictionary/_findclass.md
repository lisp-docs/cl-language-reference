**find-class** *Accessor* 



**Syntax:** 



**find-class** *symbol* &optional *errorp environment → class* 



**(setf (find-class** *symbol* &optional *errorp environment***)** *new-class***)** 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*errorp*—a *generalized boolean*. The default is *true*. 



*environment* – same as the **&environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&environment** argument has *dynamic extent*; the consequences are undefined if the **&environment** argument is referred to outside the *dynamic extent* of the macro expansion function. 



*class*—a *class object*, or **nil**. 







 



 



**Description:** 



Returns the *class object* named by the *symbol* in the *environment*. If there is no such *class*, **nil** is returned if *errorp* is *false*; otherwise, if *errorp* is *true*, an error is signaled. 



The *class* associated with a particular *symbol* can be changed by using **setf** with **find-class**; or, if the new *class* given to **setf** is **nil**, the *class* association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the *class* associated 



with a *symbol* that is defined as a *type specifier* in this standard. See Section 4.3.7 (Integrating Types and Classes). 



When using **setf** of **find-class**, any *errorp* argument is *evaluated* for effect, but any *values* it returns are ignored; the *errorp parameter* is permitted primarily so that the *environment parameter* can be used. 



The *environment* might be used to distinguish between a compile-time and a run-time environment. 



**Exceptional Situations:** 



If there is no such *class* and *errorp* is *true*, **find-class** signals an error of *type* **error**. 



**See Also:** 



**defmacro**, Section 4.3.7 (Integrating Types and Classes) 



