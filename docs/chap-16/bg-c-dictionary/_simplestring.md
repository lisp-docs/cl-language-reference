**simple-string** *Type* 



**Supertypes:** 



**simple-string**, **string**, **vector**, **simple-array**, **array**, **sequence**, **t** 



**Description:** 



A *simple string* is a specialized one-dimensional *simple array* whose *elements* are of *type* **character** or a *subtype* of *type* **character**. When used as a *type specifier* for object creation, **simple-string** means (simple-array character (*size*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all *types* (simple-array *c* (*size*)) for all *subtypes c* of **character**; that is, the set of *simple strings* of size *size*. 







 



 



