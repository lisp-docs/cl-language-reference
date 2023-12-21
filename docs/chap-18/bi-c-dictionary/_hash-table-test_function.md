**hash-table-test** *Function* 



**Syntax:** 



**hash-table-test** *hash-table → test* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*test*—a *function designator* . For the four *standardized hash table* test *functions* (see **make-hash-table**), the *test* value returned is always a *symbol*. If an *implementation* per mits additional tests, it is *implementation-dependent* whether such tests are returned as *function objects* or *function names*. 



**Description:** 



Returns the test used for comparing *keys* in *hash-table*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *hash-table* is not a *hash table*. 



**See Also:** 



**make-hash-table** 



Hash 



 



 



