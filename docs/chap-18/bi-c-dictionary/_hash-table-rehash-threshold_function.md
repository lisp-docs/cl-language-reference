**hash-table-rehash-threshold** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"hash-table-rehash-threshold"}><b>hash-table-rehash-threshold</b></DictionaryLink> *hash-table → rehash-threshold* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*rehash-threshold*—a *real* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (real 0 1). 



**Description:** 



Returns the current rehash threshold of *hash-table*, which is suitable for use in a call to <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp

(setq table (make-hash-table :size 100 :rehash-threshold 0.5)) 
*→* #<HASH-TABLE EQL 0/100 2562446> 
(hash-table-rehash-threshold table) *→* 0.5 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a *hash table*. 



**See Also:** 



<DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>, <DictionaryLink styled={true} term={"hash-table-rehash-size"}><b>hash-table-rehash-size</b></DictionaryLink> 







 



 



