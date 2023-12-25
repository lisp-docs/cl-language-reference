**hash-table-count** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"hash-table-count"}><b>hash-table-count</b></ClLinks> *hash-table → count* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*count*—a non-negative *integer* . 



**Description:** 



Returns the number of entries in the *hash-table*. If *hash-table* has just been created or newly cleared (see <ClLinks  term={"clrhash"}><b>clrhash</b></ClLinks>) the entry count is 0. 



**Examples:**
```lisp
(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32115135> 
(hash-table-count table) → 0 
(setf (gethash 57 table) "fifty-seven") → "fifty-seven" 
(hash-table-count table) → 1 
(dotimes (i 100) (setf (gethash i table) i)) → NIL 
(hash-table-count table) → 100 
```
**Affected By:** 



<ClLinks  term={"clrhash"}><b>clrhash</b></ClLinks>, <ClLinks  term={"remhash"}><b>remhash</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"gethash"}><b>gethash</b></ClLinks> 



**See Also:** 



<ClLinks  term={"hash-table-size"}><b>hash-table-size</b></ClLinks> 







 



 



**Notes:** 



The following relationships are functionally correct, although in practice using <ClLinks  term={"hash-table-count"}><b>hash-table-count</b></ClLinks> is probably much faster: 



(hash-table-count *table*) *≡* 



(loop for value being the hash-values of *table* count t) *≡* 



(let ((total 0)) 



(maphash #’(lambda (key value) 



(declare (ignore key value)) 



(incf total)) 



*table*) 



total) 



