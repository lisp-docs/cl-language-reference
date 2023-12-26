**hash-table-test** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"hash-table-test"}><b>hash-table-test</b></ClLinks> *hash-table → test* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . For the four *standardized hash table* test <ClLinks  term={"function"}><i>functions</i></ClLinks> (see <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks>), the *test* value returned is always a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> per mits additional tests, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether such tests are returned as *function objects* or <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm>. 



**Description:** 



Returns the test used for comparing <ClLinks  term={"key"}><i>keys</i></ClLinks> in *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> 



Hash 



 



 



