**array** *System Class* 

**Class Precedence List:** 

**array**, **t** 

**Description:** 

An &#60;i&#62;array&#60;/i&#62; contains &#60;i&#62;objects&#60;/i&#62; arranged according to a Cartesian coordinate system. An &#60;i&#62;array&#60;/i&#62; provides mappings from a set of &#60;i&#62;fixnums &#123;i&#60;/i&#62;&#60;sub&#62;0&#60;/sub&#62;&#60;i&#62;, i&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;&#60;i&#62;, . . . , i&#60;sub&#62;r−&#60;/sub&#62;&#60;/i&#62;1&#60;/sub&#62;&#60;i&#62;&#125;&#60;/i&#62; to corresponding &#60;i&#62;elements&#60;/i&#62; of the &#60;i&#62;array&#60;/i&#62;, where 0 &#60;i&#62;≤ i&#60;sub&#62;j&#60;/sub&#62;&#60;/i&#62; &#60; &#60;i&#62;d&#60;sub&#62;j&#60;/sub&#62;&#60;/i&#62; , &#60;i&#62;r&#60;/i&#62; is the rank of the array, and &#60;i&#62;d&#60;sub&#62;j&#60;/sub&#62;&#60;/i&#62; is the size of &#60;i&#62;dimension j&#60;/i&#62; of the array. 

When an *array* is created, the program requesting its creation may declare that all *elements* are of a particular *type*, called the *expressed array element type*. The implementation is permitted to *upgrade* this type in order to produce the *actual array element type*, which is the *element type* for the *array* is actually *specialized*. See the *function* **upgraded-array-element-type**. 

**Compound Type Specifier Kind:** 

Specializing. 

**Compound Type Specifier Syntax:** 

(array [*&#123;element-type |* **\****&#125;* [*dimension-spec*]]) 

*dimension-spec::*=*rank |* **\*** *|* (*&#123;dimension |* **\****&#125;*\*) 

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

