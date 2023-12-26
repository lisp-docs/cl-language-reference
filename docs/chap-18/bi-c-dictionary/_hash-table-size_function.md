**hash-table-size** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"hash-table-size"}><b>hash-table-size</b></DictionaryLink> *hash-table → size* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the current size of *hash-table*, which is suitable for use in a call to <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> in order to produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> with state corresponding to the current state of the *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"hash-table-count"}><b>hash-table-count</b></DictionaryLink>, <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> 



