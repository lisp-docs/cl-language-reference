**hash-table-size** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"hash-table-size"}><b>hash-table-size</b></ClLinks> *hash-table → size* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the current size of *hash-table*, which is suitable for use in a call to <ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks> in order to produce a *hash table* with state corresponding to the current state of the *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a *hash table*. 



**See Also:** 



<ClLinks styled={true} term={"hash-table-count"}><b>hash-table-count</b></ClLinks>, <ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks> 



