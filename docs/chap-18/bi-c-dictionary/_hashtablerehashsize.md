**hash-table-rehash-size** *Function* 



**Syntax:** 



**hash-table-rehash-size** *hash-table → rehash-size* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*rehash-size*—a *real* of *type* (or (integer 1 \*) (float (1.0) \*)). 



**Description:** 



Returns the current rehash size of *hash-table*, suitable for use in a call to **make-hash-table** in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
 



(setq table (make-hash-table :size 100 :rehash-size 1.4)) 



*→* #<HASH-TABLE EQL 0/100 2556371> 



(hash-table-rehash-size table) *→* 1.4 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *hash-table* is not a *hash table*. 



**See Also:** 



**make-hash-table**, **hash-table-rehash-threshold** 



**Notes:** 



If the hash table was created with an *integer* rehash size, the result is an *integer* , indicating that the rate of growth of the *hash-table* when rehashed is intended to be additive; otherwise, the result 



Hash 



 



 



is a *float*, indicating that the rate of growth of the *hash-table* when rehashed is intended to be multiplicative. However, this value is only advice to the *implementation*; the actual amount by which the *hash-table* will grow upon rehash is *implementation-dependent*. 



