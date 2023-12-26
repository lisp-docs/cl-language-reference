**hash-table-rehash-threshold** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"hash-table-rehash-threshold"}><b>hash-table-rehash-threshold</b></ClLinks> *hash-table → rehash-threshold* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*rehash-threshold*—a *real* of <ClLinks  term={"type"}><i>type</i></ClLinks> (real 0 1). 



**Description:** 



Returns the current rehash threshold of *hash-table*, which is suitable for use in a call to <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> in order to produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) 
→ #<HASH-TABLE EQL 0/100 2562446> 
(hash-table-rehash-threshold table) → 0.5 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks>, <ClLinks  term={"hash-table-rehash-size"}><b>hash-table-rehash-size</b></ClLinks> 







 



 



