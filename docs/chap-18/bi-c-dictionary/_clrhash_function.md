**clrhash** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"clrhash"}><b>clrhash</b></ClLinks> *hash-table → hash-table* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 







 



 



**Description:** 



Removes all entries from *hash-table*, and then returns that empty <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**Examples:**
```lisp
(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32004073> 
(dotimes (i 100) (setf (gethash i table) (format nil "~R" i))) → NIL 
(hash-table-count table) → 100 
(gethash 57 table) → "fifty-seven", *true* 
(clrhash table) → #<HASH-TABLE EQL 0/120 32004073> 
(hash-table-count table) → 0 
(gethash 57 table) → NIL, *false* 
```
**Side Effects:** 



The *hash-table* is modified. 



