**simple-base-string** *Type* 



**Supertypes:** 



**simple-base-string**, **base-string**, **simple-string**, **string**, **vector**, **simple-array**, **array**, **sequence**, **t** 



**Description:** 



The *type* **simple-base-string** is equivalent to (simple-array base-char (\*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-base-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (simple-array base-char (*size*)); that is, the set of *simple base strings* of size *size*. 



