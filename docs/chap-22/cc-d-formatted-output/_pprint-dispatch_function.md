**pprint-dispatch** *Function* 



**Syntax:** 



**pprint-dispatch** *object* &amp;optional *table → function, found-p* 



**Arguments and Values:** 



*object*—an *object*. 



*table*—a *pprint dispatch table*, or **nil**. The default is the *value* of **\*print-pprint-dispatch\***. *function*—a *function designator* . 



*found-p*—a *generalized boolean*. 



**Description:** 



Retrieves the highest priority function in *table* that is associated with a *type specifier* that matches *object*. The function is chosen by finding all of the *type specifiers* in *table* that match the *object* and selecting the highest priority function associated with any of these *type specifiers*. If there is more than one highest priority function, an arbitrary choice is made. If no *type specifiers* match the *object*, a function is returned that prints *object* using **print-object**. 



The *secondary value*, *found-p*, is *true* if a matching *type specifier* was found in *table*, or *false* otherwise. 



If *table* is **nil**, retrieval is done in the *initial pprint dispatch table*. 



**Affected By:** 



The state of the *table*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *table* is neither a *pprint-dispatch-table* nor **nil**. 



 



 



**Notes:** 



(let ((\*print-pretty\* t)) 



(write object :stream s)) 



*≡* (funcall (pprint-dispatch object) s object) 



