**remhash** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"remhash"}><b>remhash</b></DictionaryLink> *key hash-table → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*hash-table*—a *hash table*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Removes the entry for <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> in *hash-table*, if any. Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if there was such an entry, or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> otherwise. 



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



 



 



<DictionaryLink styled={true} term={"maphash"}><b>maphash</b></DictionaryLink> 



