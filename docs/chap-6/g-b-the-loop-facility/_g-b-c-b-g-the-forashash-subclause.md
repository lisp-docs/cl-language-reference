 

In the *for-as-hash* subclause the for or as construct iterates over the elements, keys, and values of a *hash-table*. In this syntax, a compound preposition is used to designate access to a *hash table*. The variable *var* takes on the value of each hash key or hash value in the supplied *hash-table*. The following *loop keywords* serve as valid prepositions within this syntax: 

being 

The keyword being introduces either the Loop schema hash-key or hash-value. 

each, the 

The *loop keyword* each follows the *loop keyword* being when hash-key or hash-value is used. The *loop keyword* the is used with hash-keys and hash-values only for ease of reading. This agreement isn’t required. 

hash-key, hash-keys 

These *loop keywords* access each key entry of the *hash table*. If the name hash-value is supplied in a using construct with one of these Loop schemas, the iteration can optionally access the keyed value. The order in which the keys are accessed is undefined; empty slots in the *hash table* are ignored. 

hash-value, hash-values 

These *loop keywords* access each value entry of a *hash table*. If the name hash-key is supplied in a using construct with one of these Loop schemas, the iteration can optionally access the key that corresponds to the value. The order in which the keys are accessed is undefined; empty slots in the *hash table* are ignored. 

using 

The *loop keyword* using introduces the optional key or the keyed value to be accessed. It allows access to the hash key if iteration is over the hash values, and the hash value if iteration is over the hash keys. 

Iteration **6–13**

 

 

in, of 

These loop prepositions introduce *hash-table*. 

In effect 

being *\{*each *|* the*\} \{*hash-value *|* hash-values *|* hash-key *|* hash-keys*\} \{*in *|* of*\}* 

is a compound preposition. 

Iteration stops when there are no more hash keys or hash values to be referenced in the supplied *hash-table*. 

