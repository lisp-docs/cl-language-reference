**remhash** *Function* 



**Syntax:** 



**remhash** *key hash-table → generalized-boolean* 



**Arguments and Values:** 



*key*—an *object*. 



*hash-table*—a *hash table*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Removes the entry for *key* in *hash-table*, if any. Returns *true* if there was such an entry, or *false* otherwise. 



**Examples:**
```lisp
 



(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32115666> 



(setf (gethash 100 table) "C") *→* "C" 



(gethash 100 table) *→* "C", *true* 



(remhash 100 table) *→ true* 



(gethash 100 table) *→* NIL, *false* 



(remhash 100 table) *→ false* 




```
**Side Effects:** 



The *hash-table* is modified. 



Hash 



 



 



**maphash** 



