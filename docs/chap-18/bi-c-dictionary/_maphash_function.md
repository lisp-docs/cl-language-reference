**maphash** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"maphash"}><b>maphash</b></DictionaryLink> *function hash-table →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, the <ClLinks  term={"key"}><i>key</i></ClLinks> and the <ClLinks  term={"value"}><i>value</i></ClLinks>. 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**Description:** 



Iterates over all entries in the *hash-table*. For each entry, the <ClLinks  term={"function"}><i>function</i></ClLinks> is called with two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>–the <ClLinks  term={"key"}><i>key</i></ClLinks> and the <ClLinks  term={"value"}><i>value</i></ClLinks> of that entry. 



The consequences are unspecified if any attempt is made to add or remove an entry from the *hash-table* while a <DictionaryLink  term={"maphash"}><b>maphash</b></DictionaryLink> is in progress, with two exceptions: the <ClLinks  term={"function"}><i>function</i></ClLinks> can use can use <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink> to change the <ClLinks  term={"value"}><i>value</i></ClLinks> part of the entry currently being processed, or it can use <DictionaryLink  term={"remhash"}><b>remhash</b></DictionaryLink> to remove that entry. 



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



None, other than any which might be done by the <ClLinks  term={"function"}><i>function</i></ClLinks>. 







 



 



**See Also:** 



<DictionaryLink  term={"loop"}><b>loop</b></DictionaryLink>, <DictionaryLink  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



