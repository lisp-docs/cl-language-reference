**maphash** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"maphash"}><b>maphash</b></ClLinks> *function hash-table →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>, the <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



*hash-table*—a *hash table*. 



**Description:** 



Iterates over all entries in the *hash-table*. For each entry, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called with two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>–the <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of that entry. 



The consequences are unspecified if any attempt is made to add or remove an entry from the *hash-table* while a <ClLinks styled={true} term={"maphash"}><b>maphash</b></ClLinks> is in progress, with two exceptions: the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can use can use <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"gethash"}><b>gethash</b></ClLinks> to change the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> part of the entry currently being processed, or it can use <ClLinks styled={true} term={"remhash"}><b>remhash</b></ClLinks> to remove that entry. 



**Examples:**
```lisp

(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32304110> 
(dotimes (i 10) (setf (gethash i table) i)) → NIL 
(let ((sum-of-squares 0)) 
  (maphash #’(lambda (key val) 
	       (let ((square (\* val val))) 
		 (incf sum-of-squares square) 
		 (setf (gethash key table) square))) 
	     table) 
  sum-of-squares) → 285 
(hash-table-count table) → 10 
(maphash #’(lambda (key val) 
	     (when (oddp val) (remhash key table))) 
	   table) → NIL 
(hash-table-count table) → 5 
(maphash #’(lambda (k v) (print (list k v))) table) 
(0 0) 
(8 64) 
(2 4) 
(6 36) 
(4 16) 
→ NIL 

```
**Side Effects:** 



None, other than any which might be done by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>, <ClLinks styled={true} term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



