**typep** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink> *object type-specifier* &amp;optional *environment → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*type-specifier*—any *type specifier* except <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>, or a *type specifier* list whose first element is either <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, denoting the *null lexical environment* and the and current *global environment*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> specified by *type-specifier*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. A *type-specifier* of the form (satisfies fn) is handled by applying the function fn to <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



(typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’(array *type-specifier*)), where *type-specifier* is not \*, returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that could be the result of supplying *type-specifier* as the :element-type argument to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>. (array \*) refers to all <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> regardless of element type, while (array *type-specifier*) refers only to those <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>. A similar interpretation applies to (simple-array *type-specifier*) and (vector *type-specifier*). See Section 15.1.2.1 (Array Upgrading). 



(typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’(complex *type-specifier*)) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> for all <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> numbers that can result from giving <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> of type *type-specifier* to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>, plus all other <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> numbers of the same specialized representation. Both the real and the imaginary parts of any such <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number must satisfy:  







<DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink> 



(typep realpart ’type-specifier) 



(typep imagpart ’type-specifier) 



See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 



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



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled if *type-specifier* is values, or a *type specifier* list whose first element is either <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>. 



The consequences are undefined if the *type-specifier* is not a *type specifier* . 



**See Also:** 



<DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink>, <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>, Section 4.2.3 (Type Specifiers) 



**Notes:** 



<GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> information at runtime.  







