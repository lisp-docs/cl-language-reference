**type-of** *Function* 



**Syntax:** 



**type-of** *object → typespec* 



**Arguments and Values:** 



*object*—an *object*. 



*typespec*—a *type specifier* . 



**Description:** 



Returns a *type specifier* , *typespec*, for a *type* that has the *object* as an *element*. The *typespec* satisfies the following: 



1\. For any *object* that is an *element* of some *built-in type*: 



a. the *type* returned is a *recognizable subtype* of that *built-in type*. 



b. the *type* returned does not involve and, eql, member, not, or, satisfies, or values. 











**type-of** 



2\. For all *objects*, (typep *object* (type-of *object*)) returns *true*. Implicit in this is that *type specifiers* which are not valid for use with **typep**, such as the *list* form of the **function** *type specifier* , are never returned by **type-of**. 



3\. The *type* returned by **type-of** is always a *recognizable subtype* of the *class* returned by **class-of**. That is, 



(subtypep (type-of *object*) (class-of *object*)) *→ true*, *true* 



4\. For *objects* of metaclass **structure-class** or **standard-class**, and for *conditions*, **type-of** returns the *proper name* of the *class* returned by **class-of** if it has a *proper name*, and otherwise returns the *class* itself. In particular, for *objects* created by the constructor function of a structure defined with **defstruct** without a :type option, **type-of** returns the structure name; and for *objects* created by **make-condition**, the *typespec* is the *name* of the *condition type*. 



5\. For each of the *types* **short-float**, **single-float**, **double-float**, or **long-float** of which the *object* is an *element*, the *typespec* is a *recognizable subtype* of that *type*. 



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



**array-element-type**, **class-of**, **defstruct**, **typecase**, **typep**, Section 4.2 (Types) 



**Notes:** 



Implementors are encouraged to arrange for **type-of** to return a portable value. 



