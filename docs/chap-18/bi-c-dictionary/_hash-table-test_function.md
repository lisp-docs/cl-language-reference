**hash-table-test** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"hash-table-test"}><b>hash-table-test</b></ClLinks> *hash-table → test* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*test*—a *function designator* . For the four *standardized hash table* test <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> (see <ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks>), the *test* value returned is always a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. If an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> per mits additional tests, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether such tests are returned as *function objects* or *function names*. 



**Description:** 



Returns the test used for comparing <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> in *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a *hash table*. 



**See Also:** 



<ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks> 



Hash 



 



 



