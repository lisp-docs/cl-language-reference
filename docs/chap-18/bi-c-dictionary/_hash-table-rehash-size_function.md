**hash-table-rehash-size** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"hash-table-rehash-size"}><b>hash-table-rehash-size</b></DictionaryLink> *hash-table → rehash-size* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*rehash-size*—a *real* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (or (integer 1 \*) (float (1.0) \*)). 



**Description:** 



Returns the current rehash size of *hash-table*, suitable for use in a call to <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> in order to produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> with state corresponding to the current state of the *hash-table*. 



**Examples:**
```lisp
(setq table (make-hash-table :size 100 :rehash-size 1.4)) 
→ #<HASH-TABLE EQL 0/100 2556371> 
(hash-table-rehash-size table) → 1.4 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>, <DictionaryLink  term={"hash-table-rehash-threshold"}><b>hash-table-rehash-threshold</b></DictionaryLink> 



**Notes:** 



If the hash table was created with an *integer* rehash size, the result is an *integer* , indicating that the rate of growth of the *hash-table* when rehashed is intended to be additive; otherwise, the result 



Hash 



 



 



is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, indicating that the rate of growth of the *hash-table* when rehashed is intended to be multiplicative. However, this value is only advice to the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>; the actual amount by which the *hash-table* will grow upon rehash is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



