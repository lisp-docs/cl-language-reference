**base-string** *Type* 



**Supertypes:** 



**base-string**, **string**, **vector**, **array**, **sequence**, **t** 



**Description:** 



The *type* **base-string** is equivalent to (vector base-char). The *base string* representation is the most efficient *string* representation that can hold an arbitrary sequence of *standard characters*. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(base-string [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (vector base-char *size*); that is, the set of *base strings* of size *size*. 