 



In the *for-as-hash* subclause the for or as construct iterates over the elements, keys, and values of a *hash-table*. In this syntax, a compound preposition is used to designate access to a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. The variable *var* takes on the value of each hash key or hash value in the supplied *hash-table*. The following <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> serve as valid prepositions within this syntax: 



being 



The keyword being introduces either the Loop schema hash-key or hash-value. 



each, the 



The <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> each follows the <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> being when hash-key or hash-value is used. The <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> the is used with hash-keys and hash-values only for ease of reading. This agreement isn’t required. 



hash-key, hash-keys 



These <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> access each key entry of the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. If the name hash-value is supplied in a using construct with one of these Loop schemas, the iteration can optionally access the keyed value. The order in which the keys are accessed is undefined; empty slots in the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> are ignored. 



hash-value, hash-values 



These <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keywords</i></GlossaryTerm> access each value entry of a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. If the name hash-key is supplied in a using construct with one of these Loop schemas, the iteration can optionally access the key that corresponds to the value. The order in which the keys are accessed is undefined; empty slots in the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> are ignored. 



using 



The <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> using introduces the optional key or the keyed value to be accessed. It allows access to the hash key if iteration is over the hash values, and the hash value if iteration is over the hash keys. 







 



 



in, of 



These loop prepositions introduce *hash-table*. 



In effect 



being *\{*each *|* the*\} \{*hash-value *|* hash-values *|* hash-key *|* hash-keys*\} \{*in *|* of*\}* 



is a compound preposition. 



Iteration stops when there are no more hash keys or hash values to be referenced in the supplied *hash-table*. 



