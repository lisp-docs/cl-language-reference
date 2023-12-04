**simple-array** *Type* 



**Supertypes:** 



**simple-array**, **array**, **t** 



**Description:** 



The *type* of an *array* that is not displaced to another *array*, has no *fill pointer* , and is not *expressly adjustable* is a *subtype* of *type* **simple-array**. The concept of a *simple array* exists to allow the implementation to use a specialized representation and to allow the user to declare that certain values will always be *simple arrays*. 



The *types* **simple-vector**, **simple-string**, and **simple-bit-vector** are *disjoint subtypes* of *type* **simple-array**, for they respectively mean (simple-array t (\*)), the union of all (simple-array *c* (\*)) for any *c* being a *subtype* of *type* **character**, and (simple-array bit (\*)). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-array [*\&#123;element-type |* **\****\&#125;* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\&#123;dimension |* **\****\&#125;*\*) 



**Compound Type Specifier Arguments:** 



*dimension*—a *valid array dimension*. 



*element-type*—a *type specifier* . 



*rank*—a non-negative *fixnum*. 







 



 



**Compound Type Specifier Description:** 



This *compound type specifier* is treated exactly as the corresponding *compound type specifier* for *type* **array** would be treated, except that the set is further constrained to include only *simple arrays*. 



**Notes:** 



It is *implementation-dependent* whether *displaced arrays*, *vectors* with *fill pointers*, or arrays that are *actually adjustable* are *simple arrays*. 



(simple-array \*) refers to all *simple arrays* regardless of element type, (simple-array *type specifier*) refers only to those *simple arrays* that can result from giving *type-specifier* as the :element-type argument to **make-array**. 



