**remhash** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"remhash"}><b>remhash</b></ClLinks> *key hash-table → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*hash-table*—a *hash table*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Removes the entry for <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> in *hash-table*, if any. Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if there was such an entry, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> otherwise. 



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



 



 



<ClLinks styled={true} term={"maphash"}><b>maphash</b></ClLinks> 



