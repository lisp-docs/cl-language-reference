**typep** *Function* 



**Syntax:** 



**typep** *object type-specifier* &amp;optional *environment → generalized-boolean* 



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
```lisp
 



(typep 12 ’integer) *→ true* 



(typep (1+ most-positive-fixnum) ’fixnum) *→ false* 



(typep nil t) *→ true* 



(typep nil nil) *→ false* 



(typep 1 ’(mod 2)) *→ true* 



(typep #c(1 1) ’(complex (eql 1))) *→ true* 



;; To understand this next example, you might need to refer to 



;; Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). (typep #c(0 0) ’(complex (eql 0))) *→ false* 



Let A<i><sub>x</sub></i> and A<i><sub>y</sub></i> be two <i>type specifiers</i> that denote different <i>types</i>, but for which 



(upgraded-array-element-type ’A<i><sub>x</sub></i>) 



and 



(upgraded-array-element-type ’A<i><sub>y</sub></i>) 



denote the same *type*. Notice that 



(typep (make-array 0 :element-type ’A<i><sub>x</sub></i>) ’(array A<i><sub>x</sub></i>)) <i>→ true</i> 



(typep (make-array 0 :element-type ’A<i><sub>y</sub></i>) ’(array A<i><sub>y</sub></i>)) <i>→ true</i> 



(typep (make-array 0 :element-type ’A<i><sub>x</sub></i>) ’(array A<i><sub>y</sub></i>)) <i>→ true</i> 



(typep (make-array 0 :element-type ’A<i><sub>y</sub></i>) ’(array A<i><sub>x</sub></i>)) <i>→ true</i> 




```
**Exceptional Situations:** 



An error of *type* **error** is signaled if *type-specifier* is values, or a *type specifier* list whose first element is either **function** or **values**. 



The consequences are undefined if the *type-specifier* is not a *type specifier* . 



**See Also:** 



**type-of**, **upgraded-array-element-type**, **upgraded-complex-part-type**, Section 4.2.3 (Type Specifiers) 



**Notes:** 



*Implementations* are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of **deftype** information at runtime.  







