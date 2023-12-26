**hash-table-test** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"hash-table-test"}><b>hash-table-test</b></DictionaryLink> *hash-table → test* 



**Arguments and Values:** 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . For the four *standardized hash table* test <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> (see <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>), the *test* value returned is always a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. If an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> per mits additional tests, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether such tests are returned as *function objects* or <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm>. 



**Description:** 



Returns the test used for comparing <GlossaryTerm  term={"key"}><i>keys</i></GlossaryTerm> in *hash-table*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *hash-table* is not a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> 



Hash 



 



 



