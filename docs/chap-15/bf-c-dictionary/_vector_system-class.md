**vector** *System Class* 



**Class Precedence List:** 



**vector**, **array**, **sequence**, **t** 



**Description:** 



Any one-dimensional *array* is a *vector* . 



The *type* **vector** is a *subtype* of *type* **array**; for all *types* x, (vector x) is the same as (array x (\*)). The *type* (vector t), the *type* **string**, and the *type* **bit-vector** are *disjoint subtypes* of *type* **vector**. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(vector [*\{element-type |* **\****\}* [*\{size |* **\****\}*]]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative *fixnum*. 



*element-type*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of specialized *vectors* whose *element type* and *dimension* match the specified values. Specifically: 



If *element-type* is the *symbol* **\***, *vectors* are not excluded on the basis of their *element type*. Otherwise, only those *vectors* are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 







 



 



If a *size* is specified, the set includes only those *vectors* whose only *dimension* is *size*. If the *symbol* **\*** is specified instead of a *size*, the set is not restricted on the basis of *dimension*. 



**See Also:** 



Section 15.1.2.2 (Required Kinds of Specialized Arrays), Section 2.4.8.3 (Sharpsign Left Parenthesis), Section 22.1.3.7 (Printing Other Vectors), Section 2.4.8.12 (Sharpsign A) 



**Notes:** 



The *type* (vector *e s*) is equivalent to the *type* (array *e* (*s*)). 



The type (vector bit) has the name **bit-vector**. 



The union of all *types* (vector *C*), where *C* is any *subtype* of **character**, has the name **string**. 



(vector \*) refers to all *vectors* regardless of element type, (vector *type-specifier*) refers only to those *vectors* that can result from giving *type-specifier* as the :element-type argument to **make-array**. 



