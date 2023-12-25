**typep** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"typep"}><b>typep</b></ClLinks> *object type-specifier* &amp;optional *environment → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*type-specifier*—any *type specifier* except <ClLinks  term={"values"}><b>values</b></ClLinks>, or a *type specifier* list whose first element is either <ClLinks  term={"function"}><b>function</b></ClLinks> or <ClLinks  term={"values"}><b>values</b></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an *environment object*. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, denoting the *null lexical environment* and the and current *global environment*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of the <ClLinks  term={"type"}><i>type</i></ClLinks> specified by *type-specifier*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. A *type-specifier* of the form (satisfies fn) is handled by applying the function fn to <ClLinks  term={"object"}><i>object</i></ClLinks>. 



(typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’(array *type-specifier*)), where *type-specifier* is not \*, returns <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if <ClLinks  term={"object"}><i>object</i></ClLinks> is an <ClLinks  term={"array"}><i>array</i></ClLinks> that could be the result of supplying *type-specifier* as the :element-type argument to <ClLinks  term={"make-array"}><b>make-array</b></ClLinks>. (array \*) refers to all <ClLinks  term={"array"}><i>arrays</i></ClLinks> regardless of element type, while (array *type-specifier*) refers only to those <ClLinks  term={"array"}><i>arrays</i></ClLinks> that can result from giving *type-specifier* as the :element-type argument to <ClLinks  term={"make-array"}><b>make-array</b></ClLinks>. A similar interpretation applies to (simple-array *type-specifier*) and (vector *type-specifier*). See Section 15.1.2.1 (Array Upgrading). 



(typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’(complex *type-specifier*)) returns <ClLinks  term={"true"}><i>true</i></ClLinks> for all <ClLinks  term={"complex"}><i>complex</i></ClLinks> numbers that can result from giving <ClLinks  term={"number"}><i>numbers</i></ClLinks> of type *type-specifier* to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks>, plus all other <ClLinks  term={"complex"}><i>complex</i></ClLinks> numbers of the same specialized representation. Both the real and the imaginary parts of any such <ClLinks  term={"complex"}><i>complex</i></ClLinks> number must satisfy:  







<ClLinks  term={"typep"}><b>typep</b></ClLinks> 



(typep realpart ’type-specifier) 



(typep imagpart ’type-specifier) 



See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 



**Examples:**
```lisp
(typep 12 ’integer) → true 
(typep (1+ most-positive-fixnum) ’fixnum) → false 
(typep nil t) → true 
(typep nil nil) → false 
(typep 1 ’(mod 2)) → true 
(typep #c(1 1) ’(complex (eql 1))) → true 
;; To understand this next example, you might need to refer to 
;; Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). (typep #c(0 0) ’(complex (eql 0))) → false 
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



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled if *type-specifier* is values, or a *type specifier* list whose first element is either <ClLinks  term={"function"}><b>function</b></ClLinks> or <ClLinks  term={"values"}><b>values</b></ClLinks>. 



The consequences are undefined if the *type-specifier* is not a *type specifier* . 



**See Also:** 



<ClLinks  term={"type-of"}><b>type-of</b></ClLinks>, <ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks>, <ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>, Section 4.2.3 (Type Specifiers) 



**Notes:** 



<ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> information at runtime.  







