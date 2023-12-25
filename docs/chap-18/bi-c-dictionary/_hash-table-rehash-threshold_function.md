**hash-table-rehash-threshold** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"hash-table-rehash-threshold"}><b>hash-table-rehash-threshold</b></ClLinks> *hash-table → rehash-threshold* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*rehash-threshold*—a *real* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (real 0 1). 



**Description:** 



Returns the current rehash threshold of *hash-table*, which is suitable for use in a call to <ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks> in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) 
→ #<HASH-TABLE EQL 0/100 2562446> 
(hash-table-rehash-threshold table) → 0.5 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a *hash table*. 



**See Also:** 



<ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks>, <ClLinks styled={true} term={"hash-table-rehash-size"}><b>hash-table-rehash-size</b></ClLinks> 







 



 



