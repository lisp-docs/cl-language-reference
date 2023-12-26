**remhash** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"remhash"}><b>remhash</b></DictionaryLink> *key hash-table → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"key"}><i>key</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Removes the entry for <ClLinks  term={"key"}><i>key</i></ClLinks> in *hash-table*, if any. Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if there was such an entry, or <ClLinks  term={"false"}><i>false</i></ClLinks> otherwise. 



**Examples:**
```lisp
(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32115666> 
(setf (gethash 100 table) "C") → "C" 
(gethash 100 table) → "C", *true* 
(remhash 100 table) → true 
(gethash 100 table) → NIL, *false* 
(remhash 100 table) → false 
```
**Side Effects:** 



The *hash-table* is modified. 



Hash 



 



 



<DictionaryLink  term={"maphash"}><b>maphash</b></DictionaryLink> 



