**array-element-type** *Function* 



**Syntax:** 



**array-element-type** *array → typespec* 



**Arguments and Values:** 



*array*—an *array*. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* which represents the *actual array element type* of the array, which is the set of *objects* that such an *array* can hold. (Because of *array upgrading*, this *type specifier* can in some cases denote a *supertype* of the *expressed array element type* of the *array*.) 







 



 



**Examples:**
```lisp
 



(array-element-type (make-array 4)) *→* T 



(array-element-type (make-array 12 :element-type ’(unsigned-byte 8))) 



*→ implementation-dependent* 



(array-element-type (make-array 12 :element-type ’(unsigned-byte 5))) 



*→ implementation-dependent* 



(array-element-type (make-array 5 :element-type ’(mod 5))) 



could be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. 




```
**Affected By:** 



The *implementation*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its argument is not an *array*. 



**See Also:** 



**array**, **make-array**, **subtypep**, **upgraded-array-element-type** 



