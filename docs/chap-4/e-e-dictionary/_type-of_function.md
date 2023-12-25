**type-of** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> *object → typespec* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* , *typespec*, for a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that has the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. The *typespec* satisfies the following: 



1\. For any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of some *built-in type*: 



a. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> returned is a *recognizable subtype* of that *built-in type*. 



b. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> returned does not involve and, eql, member, not, or, satisfies, or values. 











<DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> 



2\. For all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (type-of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>)) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Implicit in this is that *type specifiers* which are not valid for use with <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink>, such as the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> form of the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *type specifier* , are never returned by <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink>. 



3\. The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> is always a *recognizable subtype* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>. That is, 



(subtypep (type-of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) (class-of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>)) *→ true*, *true* 



4\. For <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of metaclass <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink> or <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, and for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>, <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> returns the *proper name* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink> if it has a *proper name*, and otherwise returns the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself. In particular, for <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> created by the constructor function of a structure defined with <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> without a :type option, <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> returns the structure name; and for <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, the *typespec* is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *condition type*. 



5\. For each of the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, or <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink> of which the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, the *typespec* is a *recognizable subtype* of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**Examples:**
```lisp

(type-of ’a) *→* SYMBOL 
(type-of ’(1 . 2)) 
*→* CONS 
<i><sup>or</sup>→</i> (CONS FIXNUM FIXNUM) 
(type-of #c(0 1)) 
*→* COMPLEX 
<i><sup>or</sup>→</i> (COMPLEX INTEGER) 
(defstruct temp-struct x y z) *→* TEMP-STRUCT 
(type-of (make-temp-struct)) *→* TEMP-STRUCT 
(type-of "abc") 
*→* STRING 
<i><sup>or</sup>→</i> (STRING 3) 
(subtypep (type-of "abc") ’string) *→ true*, *true* 
(type-of (expt 2 40)) 
*→* BIGNUM 
<i><sup>or</sup>→</i> INTEGER 
<i><sup>or</sup>→</i> (INTEGER 1099511627776 1099511627776) 
<i><sup>or</sup>→</i> SYSTEM::TWO-WORD-BIGNUM 
<i><sup>or</sup>→</i> FIXNUM 
(subtypep (type-of 112312) ’integer) *→ true*, *true* 
(defvar \*foo\* (make-array 5 :element-type t)) *→* \*FOO\* 
(class-name (class-of \*foo\*)) *→* VECTOR  

(type-of \*foo\*) 
*→* VECTOR 
<i><sup>or</sup>→</i> (VECTOR T 5) 

```
**See Also:** 



<DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>, <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink styled={true} term={"typecase"}><b>typecase</b></DictionaryLink>, <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink>, Section 4.2 (Types) 



**Notes:** 



Implementors are encouraged to arrange for <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> to return a portable value. 



