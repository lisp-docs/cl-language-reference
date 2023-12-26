**type-of** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> *object → typespec* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , *typespec*, for a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that has the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> as an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>. The *typespec* satisfies the following: 



1\. For any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of some <GlossaryTerm styled={true} term={"built-in type"}><i>built-in type</i></GlossaryTerm>: 



a. the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> returned is a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"built-in type"}><i>built-in type</i></GlossaryTerm>. 



b. the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> returned does not involve and, eql, member, not, or, satisfies, or values. 











<DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> 



2\. For all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (type-of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>)) returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. Implicit in this is that <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> which are not valid for use with <DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink>, such as the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> form of the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , are never returned by <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink>. 



3\. The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> returned by <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> is always a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> returned by <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>. That is, 



(subtypep (type-of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) (class-of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>)) → true, <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> 



4\. For <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of metaclass <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink> or <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, and for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm>, <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> returned by <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink> if it has a <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm>, and otherwise returns the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> itself. In particular, for <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> created by the constructor function of a structure defined with <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> without a :type option, <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> returns the structure name; and for <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> created by <DictionaryLink  term={"make-condition"}><b>make-condition</b></DictionaryLink>, the *typespec* is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the *condition type*. 



5\. For each of the <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, or <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink> of which the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>, the *typespec* is a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



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



<DictionaryLink  term={"array-element-type"}><b>array-element-type</b></DictionaryLink>, <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"typecase"}><b>typecase</b></DictionaryLink>, <DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink>, Section 4.2 (Types) 



**Notes:** 



Implementors are encouraged to arrange for <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> to return a portable value. 



