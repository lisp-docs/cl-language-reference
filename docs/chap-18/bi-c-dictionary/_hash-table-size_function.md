**hash-table-size** *Function* 



**Syntax:** 



**hash-table-size** *hash-table → size* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the current size of *hash-table*, which is suitable for use in a call to **make-hash-table** in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *hash-table* is not a *hash table*. 



**See Also:** 



**hash-table-count**, **make-hash-table** 



