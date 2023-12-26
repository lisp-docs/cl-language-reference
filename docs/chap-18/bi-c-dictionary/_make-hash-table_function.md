**make-hash-table** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> &amp;key *test size rehash-size rehash-threshold → hash-table* 



**Arguments and Values:** 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"eq"}><b>eq</b></ClLinks>, <ClLinks  term={"eql"}><b>eql</b></ClLinks>, <ClLinks  term={"equal"}><b>equal</b></ClLinks>, or <ClLinks  term={"equalp"}><b>equalp</b></ClLinks>. The default is <ClLinks  term={"eql"}><b>eql</b></ClLinks>. *size*—a non-negative *integer* . The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*rehash-size*—a *real* of <ClLinks  term={"type"}><i>type</i></ClLinks> (or (integer 1 \*) (float (1.0) \*)). The default is *implementation dependent*. 



*rehash-threshold*—a *real* of <ClLinks  term={"type"}><i>type</i></ClLinks> (real 0 1). The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. *hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**Description:** 



Creates and returns a new <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*test* determines how <ClLinks  term={"key"}><i>keys</i></ClLinks> are compared. An <ClLinks  term={"object"}><i>object</i></ClLinks> is said to be present in the *hash-table* if that <ClLinks  term={"object"}><i>object</i></ClLinks> is the <ClLinks  term={"same"}><i>same</i></ClLinks> under the *test* as the <ClLinks  term={"key"}><i>key</i></ClLinks> for some entry in the *hash-table*. 



*size* is a hint to the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> about how much initial space to allocate in the *hash-table*. This information, taken together with the *rehash-threshold*, controls the approximate number of entries which it should be possible to insert before the table has to grow. The actual size might be 







 



 



rounded up from *size* to the next ‘good’ size; for example, some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> might round to the next prime number. 



*rehash-size* specifies a minimum amount to increase the size of the *hash-table* when it becomes full enough to require rehashing; see *rehash-theshold* below. If *rehash-size* is an *integer* , the expected growth rate for the table is additive and the *integer* is the number of entries to add; if it is a <ClLinks  term={"float"}><i>float</i></ClLinks>, the expected growth rate for the table is multiplicative and the <ClLinks  term={"float"}><i>float</i></ClLinks> is the ratio of the new size to the old size. As with *size*, the actual size of the increase might be rounded up. 



*rehash-threshold* specifies how full the *hash-table* can get before it must grow. It specifies the maximum desired hash-table occupancy level. 



The <ClLinks  term={"value"}><i>values</i></ClLinks> of *rehash-size* and *rehash-threshold* do not constrain the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to use any particular method for computing when and by how much the size of *hash-table* should be enlarged. Such decisions are <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, and these <ClLinks  term={"value"}><i>values</i></ClLinks> only hints from the <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> to the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, and the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to ignore them. 



**Examples:**
```lisp
(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 46142754> 
(setf (gethash "one" table) 1) → 1 
(gethash "one" table) → NIL, *false* 
(setq table (make-hash-table :test ’equal)) → #<HASH-TABLE EQUAL 0/139 46145547> (setf (gethash "one" table) 1) → 1 
(gethash "one" table) → 1, T 
(make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) 
→ #<HASH-TABLE EQL 0/120 46156620> 
```
**See Also:** 



<ClLinks  term={"gethash"}><b>gethash</b></ClLinks>, <ClLinks  term={"hash-table"}><b>hash-table</b></ClLinks> 



