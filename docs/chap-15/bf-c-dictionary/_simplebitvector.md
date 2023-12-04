**simple-bit-vector** *Type* 



**Supertypes:** 



**simple-bit-vector**, **bit-vector**, **vector**, **simple-array**, **array**, **sequence**, **t** 



**Description:** 



The *type* of a *bit vector* that is not displaced to another *array*, has no *fill pointer* , and is not *expressly adjustable* is a *subtype* of *type* **simple-bit-vector**. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-bit-vector [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. The default is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the same type as the *type* (simple-array bit (*size*)); that is, the set of *simple bit vectors* of size *size*. 



