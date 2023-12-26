**remhash** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"remhash"}><b>remhash</b></DictionaryLink> *key hash-table → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Removes the entry for <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> in *hash-table*, if any. Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if there was such an entry, or <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> otherwise. 



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



