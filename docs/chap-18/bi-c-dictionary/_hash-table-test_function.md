**hash-table-test** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"hash-table-test"}><b>hash-table-test</b></DictionaryLink> *hash-table → test* 



**Arguments and Values:** 



*hash-table*—a *hash table*. 



*test*—a *function designator* . For the four *standardized hash table* test <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> (see <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>), the *test* value returned is always a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. If an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> per mits additional tests, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether such tests are returned as *function objects* or *function names*. 



**Description:** 



Returns the test used for comparing <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> in *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a *hash table*. 



**See Also:** 



<DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> 



Hash 



 



 



