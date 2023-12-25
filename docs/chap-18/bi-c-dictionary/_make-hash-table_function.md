**make-hash-table** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> &amp;key *test size rehash-size rehash-threshold → hash-table* 



**Arguments and Values:** 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for one of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, or <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>. *size*—a non-negative *integer* . The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*rehash-size*—a *real* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (or (integer 1 \*) (float (1.0) \*)). The default is *implementation dependent*. 



*rehash-threshold*—a *real* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (real 0 1). The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. *hash-table*—a *hash table*. 



**Description:** 



Creates and returns a new *hash table*. 



*test* determines how <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> are compared. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is said to be present in the *hash-table* if that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under the *test* as the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> for some entry in the *hash-table*. 



*size* is a hint to the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> about how much initial space to allocate in the *hash-table*. This information, taken together with the *rehash-threshold*, controls the approximate number of entries which it should be possible to insert before the table has to grow. The actual size might be 







 



 



rounded up from *size* to the next ‘good’ size; for example, some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> might round to the next prime number. 



*rehash-size* specifies a minimum amount to increase the size of the *hash-table* when it becomes full enough to require rehashing; see *rehash-theshold* below. If *rehash-size* is an *integer* , the expected growth rate for the table is additive and the *integer* is the number of entries to add; if it is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, the expected growth rate for the table is multiplicative and the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is the ratio of the new size to the old size. As with *size*, the actual size of the increase might be rounded up. 



*rehash-threshold* specifies how full the *hash-table* can get before it must grow. It specifies the maximum desired hash-table occupancy level. 



The <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of *rehash-size* and *rehash-threshold* do not constrain the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to use any particular method for computing when and by how much the size of *hash-table* should be enlarged. Such decisions are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, and these <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> only hints from the <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to ignore them. 



**Examples:**
```lisp

(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 46142754> 
(setf (gethash "one" table) 1) *→* 1 
(gethash "one" table) *→* NIL, *false* 
(setq table (make-hash-table :test ’equal)) *→* #<HASH-TABLE EQUAL 0/139 46145547> (setf (gethash "one" table) 1) *→* 1 
(gethash "one" table) *→* 1, T 
(make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) 
*→* #<HASH-TABLE EQL 0/120 46156620> 

```
**See Also:** 



<DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink>, <DictionaryLink styled={true} term={"hash-table"}><b>hash-table</b></DictionaryLink> 



