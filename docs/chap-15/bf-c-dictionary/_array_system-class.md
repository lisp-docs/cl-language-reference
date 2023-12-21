**array** *System Class* 



**Class Precedence List:** 



**array**, **t** 



**Description:** 



An <i>array</i> contains <i>objects</i> arranged according to a Cartesian coordinate system. An <i>array</i> provides mappings from a set of <i>fixnums \{i</i><sub>0</sub><i>, i</i><sub>1</sub><i>, . . . , i<sub>r−</sub></i>1<i>\}</i> to corresponding <i>elements</i> of the <i>array</i>, where 0 <i>≤ i<sub>j</sub></i> &lt; <i>d<sub>j</sub></i> , <i>r</i> is the rank of the array, and <i>d<sub>j</sub></i> is the size of <i>dimension j</i> of the array. 



When an *array* is created, the program requesting its creation may declare that all *elements* are of a particular *type*, called the *expressed array element type*. The implementation is permitted to *upgrade* this type in order to produce the *actual array element type*, which is the *element type* for the *array* is actually *specialized*. See the *function* **upgraded-array-element-type**. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



*dimension*—a *valid array dimension*. 



*element-type*—a *type specifier* . 



*rank*—a non-negative *fixnum*. 



**Compound Type Specifier Description:** 



This denotes the set of *arrays* whose *element type*, *rank*, and *dimensions* match any given *element-type*, *rank*, and *dimensions*. Specifically: 



If *element-type* is the *symbol* **\***, *arrays* are not excluded on the basis of their *element type*. Otherwise, only those *arrays* are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If the *dimension-spec* is a *rank*, the set includes only those *arrays* having that *rank*. If the *dimension-spec* is a *list* of *dimensions*, the set includes only those *arrays* having a *rank* given by the *length* of the *dimensions*, and having the indicated *dimensions*; in this case, **\*** matches any value for the corresponding *dimension*. If the *dimension-spec* is the *symbol* **\***, the set is not restricted on the basis of *rank* or *dimension*. 







 



 



**See Also:** 



**\*print-array\***, **aref**, **make-array**, **vector**, Section 2.4.8.12 (Sharpsign A), Section 22.1.3.8 (Printing Other Arrays) 



**Notes:** 



Note that the type (array t) is a proper *subtype* of the type (array \*). The reason is that the type (array t) is the set of *arrays* that can hold any *object* (the *elements* are of *type* **t**, which includes all *objects*). On the other hand, the type (array \*) is the set of all *arrays* whatsoever, 



including for example *arrays* that can hold only *characters*. The type (array character) is not a *subtype* of the type (array t); the two sets are *disjoint* because the type (array character) is not the set of all *arrays* that can hold *characters*, but rather the set of *arrays* that are specialized to hold precisely *characters* and no other *objects*. 



