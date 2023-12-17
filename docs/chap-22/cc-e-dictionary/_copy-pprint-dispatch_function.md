**copy-pprint-dispatch** *Function* 



**Syntax:** 



**copy-pprint-dispatch** &amp;optional *table → new-table* 



**Arguments and Values:** 



*table*—a *pprint dispatch table*, or **nil**. 



*new-table*—a *fresh pprint dispatch table*. 



**Description:** 



Creates and returns a copy of the specified *table*, or of the *value* of **\*print-pprint-dispatch\*** if no *table* is specified, or of the initial *value* of **\*print-pprint-dispatch\*** if **nil** is specified. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *table* is not a *pprint dispatch table*. 



