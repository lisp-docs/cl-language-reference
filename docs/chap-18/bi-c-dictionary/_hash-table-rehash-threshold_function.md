**hash-table-rehash-threshold** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"hash-table-rehash-threshold"}><b>hash-table-rehash-threshold</b></DictionaryLink> *hash-table → rehash-threshold* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*rehash-threshold*—a *real* of <ClLinks  term={"type"}><i>type</i></ClLinks> (real 0 1). 



**Description:** 



Returns the current rehash threshold of *hash-table*, which is suitable for use in a call to <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> in order to produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) 
→ #<HASH-TABLE EQL 0/100 2562446> 
(hash-table-rehash-threshold table) → 0.5 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>, <DictionaryLink  term={"hash-table-rehash-size"}><b>hash-table-rehash-size</b></DictionaryLink> 







 



 



