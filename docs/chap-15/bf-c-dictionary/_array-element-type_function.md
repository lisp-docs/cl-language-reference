**array-element-type** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks> *array → typespec* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* which represents the *actual array element type* of the array, which is the set of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that such an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> can hold. (Because of *array upgrading*, this *type specifier* can in some cases denote a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the *expressed array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>.) 







 



 



**Examples:**
```lisp
(array-element-type (make-array 4)) → T 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 8))) 
→ implementation-dependent 
(array-element-type (make-array 12 :element-type ’(unsigned-byte 5))) 
→ implementation-dependent 
(array-element-type (make-array 5 :element-type ’(mod 5))) 
could be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. 
```
**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks>, <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> 



