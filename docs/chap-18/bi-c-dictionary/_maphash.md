**maphash** *Function* 



**Syntax:** 



**maphash** *function hash-table →* **nil** 



**Arguments and Values:** 



*function*—a *designator* for a *function* of two *arguments*, the *key* and the *value*. 



*hash-table*—a *hash table*. 



**Description:** 



Iterates over all entries in the *hash-table*. For each entry, the *function* is called with two *arguments*–the *key* and the *value* of that entry. 



The consequences are unspecified if any attempt is made to add or remove an entry from the *hash-table* while a **maphash** is in progress, with two exceptions: the *function* can use can use **setf** of **gethash** to change the *value* part of the entry currently being processed, or it can use **remhash** to remove that entry. 



**Examples:**
```lisp
 

(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32304110> 

(dotimes (i 10) (setf (gethash i table) i)) *→* NIL 

(let ((sum-of-squares 0)) 

(maphash #’(lambda (key val) 

(let ((square (\* val val))) 

(incf sum-of-squares square) 

(setf (gethash key table) square))) 

table) 

sum-of-squares) *→* 285 

(hash-table-count table) *→* 10 

(maphash #’(lambda (key val) 

(when (oddp val) (remhash key table))) 

table) *→* NIL 

(hash-table-count table) *→* 5 

(maphash #’(lambda (k v) (print (list k v))) table) 

(0 0) 

(8 64) 

(2 4) 

(6 36) 

(4 16) 

*→* NIL 


```
**Side Effects:** 



None, other than any which might be done by the *function*. 







 



 



**See Also:** 



**loop**, **with-hash-table-iterator**, Section 3.6 (Traversal Rules and Side Effects) 



