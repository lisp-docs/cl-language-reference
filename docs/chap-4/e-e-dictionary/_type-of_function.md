**type-of** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> *object → typespec* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* , *typespec*, for a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that has the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. The *typespec* satisfies the following: 



1\. For any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of some *built-in type*: 



a. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> returned is a *recognizable subtype* of that *built-in type*. 



b. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> returned does not involve and, eql, member, not, or, satisfies, or values. 











<ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> 



2\. For all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (type-of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>)) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Implicit in this is that *type specifiers* which are not valid for use with <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks>, such as the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> form of the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *type specifier* , are never returned by <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks>. 



3\. The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> returned by <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> is always a *recognizable subtype* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> returned by <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>. That is, 



(subtypep (type-of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) (class-of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>)) → true, <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> 



4\. For <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of metaclass <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks> or <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>, and for <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>, <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> returns the *proper name* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> returned by <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks> if it has a *proper name*, and otherwise returns the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> itself. In particular, for <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> created by the constructor function of a structure defined with <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> without a :type option, <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> returns the structure name; and for <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> created by <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, the *typespec* is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *condition type*. 



5\. For each of the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, or <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> of which the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, the *typespec* is a *recognizable subtype* of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**Examples:**
```lisp
(type-of ’a) → SYMBOL 
(type-of ’(1 . 2)) 
→ CONS 
<i><sup>or</sup>→</i> (CONS FIXNUM FIXNUM) 
(type-of #c(0 1)) 
→ COMPLEX 
<i><sup>or</sup>→</i> (COMPLEX INTEGER) 
(defstruct temp-struct x y z) → TEMP-STRUCT 
(type-of (make-temp-struct)) → TEMP-STRUCT 
(type-of "abc") 
→ STRING 
<i><sup>or</sup>→</i> (STRING 3) 
(subtypep (type-of "abc") ’string) → true, *true* 
(type-of (expt 2 40)) 
→ BIGNUM 
<i><sup>or</sup>→</i> INTEGER 
<i><sup>or</sup>→</i> (INTEGER 1099511627776 1099511627776) 
<i><sup>or</sup>→</i> SYSTEM::TWO-WORD-BIGNUM 
<i><sup>or</sup>→</i> FIXNUM 
(subtypep (type-of 112312) ’integer) → true, *true* 
(defvar \*foo\* (make-array 5 :element-type t)) → \*FOO\* 
(class-name (class-of \*foo\*)) → VECTOR  
(type-of \*foo\*) 
→ VECTOR 
<i><sup>or</sup>→</i> (VECTOR T 5) 
```
**See Also:** 



<ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks>, <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>, <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks styled={true} term={"typecase"}><b>typecase</b></ClLinks>, <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks>, Section 4.2 (Types) 



**Notes:** 



Implementors are encouraged to arrange for <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> to return a portable value. 



