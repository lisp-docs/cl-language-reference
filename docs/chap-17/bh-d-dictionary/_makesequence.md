**make-sequence** *Function* 



**Syntax:** 



**make-sequence** *result-type size* &amp;key *initial-element → sequence* 



**Arguments and Values:** 



*result-type*—a **sequence** *type specifier* . 



*size*—a non-negative *integer* . 



*initial-element*—an *object*. The default is *implementation-dependent*. 



*sequence*—a *proper sequence*. 



**Description:** 



Returns a *sequence* of the type *result-type* and of length *size*, each of the *elements* of which has been initialized to *initial-element*. 



If the *result-type* is a *subtype* of **list**, the result will be a *list*. 



If the *result-type* is a *subtype* of **vector**, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is **t**; otherwise, an error is signaled. 



**Examples:**
```lisp
 

(make-sequence ’list 0) *→* () 

(make-sequence ’string 26 :initial-element #\.) 

*→* ".........................." 

(make-sequence ’(vector double-float) 2 

:initial-element 1d0) 

*→* #(1.0d0 1.0d0) 

(make-sequence ’(vector \* 2) 3) should signal an error 

(make-sequence ’(vector \* 4) 3) should signal an error 


```
**Affected By:** 



The *implementation*. 



**Exceptional Situations:** 



The consequences are unspecified if *initial-element* is not an *object* which can be stored in the resulting *sequence*. 







 



 



An error of *type* **type-error** must be signaled if the *result-type* is neither a *recognizable subtype* of **list**, nor a *recognizable subtype* of **vector**. 



An error of *type* **type-error** should be signaled if *result-type* specifies the number of elements and *size* is different from that number. 



**See Also:** 



**make-array**, **make-list** 



**Notes:** 



(make-sequence ’string 5) *≡* (make-string 5) 



