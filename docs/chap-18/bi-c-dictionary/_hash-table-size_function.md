**hash-table-size** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"hash-table-size"}><b>hash-table-size</b></ClLinks> *hash-table → size* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the current size of *hash-table*, which is suitable for use in a call to <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> in order to produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> with state corresponding to the current state of the *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"hash-table-count"}><b>hash-table-count</b></ClLinks>, <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> 



