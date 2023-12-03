**typep** *Function* 

**Syntax:** 

**typep** *object type-specifier* &optional *environment → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*type-specifier*—any *type specifier* except **values**, or a *type specifier* list whose first element is either **function** or **values**. 

*environment*—an *environment object*. The default is **nil**, denoting the *null lexical environment* and the and current *global environment*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is of the *type* specified by *type-specifier*; otherwise, returns *false*. A *type-specifier* of the form (satisfies fn) is handled by applying the function fn to *object*. 

(typep *object* ’(array *type-specifier*)), where *type-specifier* is not \*, returns *true* if and only if *object* is an *array* that could be the result of supplying *type-specifier* as the :element-type argument to **make-array**. (array \*) refers to all *arrays* regardless of element type, while (array *type-specifier*) refers only to those *arrays* that can result from giving *type-specifier* as the :element-type argument to **make-array**. A similar interpretation applies to (simple-array *type-specifier*) and (vector *type-specifier*). See Section 15.1.2.1 (Array Upgrading). 

(typep *object* ’(complex *type-specifier*)) returns *true* for all *complex* numbers that can result from giving *numbers* of type *type-specifier* to the *function* **complex**, plus all other *complex* numbers of the same specialized representation. Both the real and the imaginary parts of any such *complex* number must satisfy:  



**typep** 

(typep realpart ’type-specifier) 

(typep imagpart ’type-specifier) 

See the *function* **upgraded-complex-part-type**. 

**Examples:** 

(typep 12 ’integer) *→ true* 

(typep (1+ most-positive-fixnum) ’fixnum) *→ false* 

(typep nil t) *→ true* 

(typep nil nil) *→ false* 

(typep 1 ’(mod 2)) *→ true* 

(typep #c(1 1) ’(complex (eql 1))) *→ true* 

;; To understand this next example, you might need to refer to 

;; Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). (typep #c(0 0) ’(complex (eql 0))) *→ false* 

Let A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62; and A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62; be two &#60;i&#62;type specifiers&#60;/i&#62; that denote different &#60;i&#62;types&#60;/i&#62;, but for which 

(upgraded-array-element-type ’A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62;) 

and 

(upgraded-array-element-type ’A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;) 

denote the same *type*. Notice that 

(typep (make-array 0 :element-type ’A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62;) ’(array A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62;)) &#60;i&#62;→ true&#60;/i&#62; 

(typep (make-array 0 :element-type ’A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;) ’(array A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;)) &#60;i&#62;→ true&#60;/i&#62; 

(typep (make-array 0 :element-type ’A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62;) ’(array A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;)) &#60;i&#62;→ true&#60;/i&#62; 

(typep (make-array 0 :element-type ’A&#60;i&#62;&#60;sub&#62;y&#60;/sub&#62;&#60;/i&#62;) ’(array A&#60;i&#62;&#60;sub&#62;x&#60;/sub&#62;&#60;/i&#62;)) &#60;i&#62;→ true&#60;/i&#62; 

**Exceptional Situations:** 

An error of *type* **error** is signaled if *type-specifier* is values, or a *type specifier* list whose first element is either **function** or **values**. 

The consequences are undefined if the *type-specifier* is not a *type specifier* . 

**See Also:** 

**type-of**, **upgraded-array-element-type**, **upgraded-complex-part-type**, Section 4.2.3 (Type Specifiers) 

**Notes:** 

*Implementations* are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of **deftype** information at runtime.  



