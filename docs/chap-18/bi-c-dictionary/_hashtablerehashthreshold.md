**hash-table-rehash-threshold** *Function* 



**Syntax:** 



**hash-table-rehash-threshold** *hash-table → rehash-threshold* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*rehash-threshold*—a *real* of *type* (real 0 1). 



**Description:** 



Returns the current rehash threshold of *hash-table*, which is suitable for use in a call to **make-hash-table** in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
 

(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) 

*→* #<HASH-TABLE EQL 0/100 2562446> 

(hash-table-rehash-threshold table) *→* 0.5 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *hash-table* is not a *hash table*. 



**See Also:** 



**make-hash-table**, **hash-table-rehash-size** 







 



 



