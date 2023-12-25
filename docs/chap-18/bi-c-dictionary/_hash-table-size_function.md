**hash-table-size** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"hash-table-size"}><b>hash-table-size</b></DictionaryLink> *hash-table → size* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the current size of *hash-table*, which is suitable for use in a call to <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a *hash table*. 



**See Also:** 



<DictionaryLink styled={true} term={"hash-table-count"}><b>hash-table-count</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> 



