**simple-vector** *Type* 



**Supertypes:** 



**simple-vector**, **vector**, **simple-array**, **array**, **sequence**, **t** 



**Description:** 



The *type* of a *vector* that is not displaced to another *array*, has no *fill pointer* , is not *expressly adjustable* and is able to hold elements of any *type* is a *subtype* of *type* **simple-vector**. 



The *type* **simple-vector** is a *subtype* of *type* **vector**, and is a *subtype* of *type* (vector t). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. The default is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This is the same as (simple-array t (*size*)). 







 



 



