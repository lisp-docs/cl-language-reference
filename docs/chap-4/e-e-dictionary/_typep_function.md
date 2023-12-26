**typep** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink> *object type-specifier* &amp;optional *environment → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*type-specifier*—any <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> except <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>, or a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> list whose first element is either <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, denoting the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> and the and current <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> specified by *type-specifier*; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. A *type-specifier* of the form (satisfies fn) is handled by applying the function fn to <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



(typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’(array *type-specifier*)), where *type-specifier* is not \*, returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if and only if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that could be the result of supplying *type-specifier* as the :element-type argument to <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>. (array \*) refers to all <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> regardless of element type, while (array *type-specifier*) refers only to those <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>. A similar interpretation applies to (simple-array *type-specifier*) and (vector *type-specifier*). See Section 15.1.2.1 (Array Upgrading). 



(typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’(complex *type-specifier*)) returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> for all <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> numbers that can result from giving <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> of type *type-specifier* to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink>, plus all other <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> numbers of the same specialized representation. Both the real and the imaginary parts of any such <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> number must satisfy:  







<DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink> 



(typep realpart ’type-specifier) 



(typep imagpart ’type-specifier) 



See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 



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



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if *type-specifier* is values, or a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> list whose first element is either <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>. 



The consequences are undefined if the *type-specifier* is not a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink>, <DictionaryLink  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>, <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>, Section 4.2.3 (Type Specifiers) 



**Notes:** 



<GlossaryTerm  term={"implementation"}><i>Implementations</i></GlossaryTerm> are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> information at runtime.  







