**maphash** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"maphash"}><b>maphash</b></DictionaryLink> *function hash-table →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



*hash-table*—a *hash table*. 



**Description:** 



Iterates over all entries in the *hash-table*. For each entry, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called with two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>–the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of that entry. 



The consequences are unspecified if any attempt is made to add or remove an entry from the *hash-table* while a <DictionaryLink styled={true} term={"maphash"}><b>maphash</b></DictionaryLink> is in progress, with two exceptions: the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can use can use <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink> to change the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> part of the entry currently being processed, or it can use <DictionaryLink styled={true} term={"remhash"}><b>remhash</b></DictionaryLink> to remove that entry. 



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



None, other than any which might be done by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



