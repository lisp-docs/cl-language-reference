**string** *System Class* 



**Class Precedence List:** 



**string**, **vector**, **array**, **sequence**, **t** 



**Description:** 



A *string* is a *specialized vector* whose *elements* are of *type* **character** or a *subtype* of *type* **character**. When used as a *type specifier* for object creation, **string** means (vector character). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*, or the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all *types* (array *c* (*size*)) for all *subtypes c* of **character**; that is, the set of *strings* of size *size*. 



**See Also:** 



Section 16.1 (String Concepts), Section 2.4.5 (Double-Quote), Section 22.1.3.4 (Printing Strings) 