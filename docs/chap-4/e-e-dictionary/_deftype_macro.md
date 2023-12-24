**deftype** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> *name lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → name 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a *deftype lambda list*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> defines a *derived type specifier* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



The meaning of the new *type specifier* is given in terms of a function which expands the *type specifier* into another *type specifier* , which itself will be expanded if it contains references to another *derived type specifier* . 



The newly defined *type specifier* may be referenced as a list of the form (*name arg*<sub>1</sub> *arg*<sub>2</sub> ...). The number of arguments must be appropriate to the *lambda-list*. If the new *type specifier* takes no arguments, or if all of its arguments are optional, the *type specifier* may be used as an *atomic type specifier* . 



The <i>argument expressions</i> to the <i>type specifier</i> , <i>arg</i><sub>1</sub> <i>. . . arg<sub>n</sub></i>, are not <i>evaluated</i>. Instead, these <i>literal objects</i> become the <i>objects</i> to which corresponding <i>parameters</i> become <i>bound</i>. 



The body of the <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (but not the *lambda-list*) is implicitly enclosed in a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, and is evaluated as an *implicit progn*, returning a new *type specifier* . 



The *lexical environment* of the body is the one which was current at the time the <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> form was evaluated, augmented by the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> in the *lambda-list*. 



Recursive expansion of the *type specifier* returned as the expansion must terminate, including the expansion of *type specifiers* which are nested within the expansion. 



The consequences are undefined if the result of fully expanding a *type specifier* contains any circular structure, except within the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> referred to by <ClLinks styled={true} term={"member"}><b>member</b></ClLinks> and <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> *type specifiers*. 



*Documentation* is attached to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as a *documentation string* of kind <ClLinks styled={true} term={"type"}><b>type</b></ClLinks>. 



If a <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must ensure that the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is recognized in subsequent <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> declarations. The <ClLinks styled={true} term={"programmer"}><i>programmer</i></ClLinks> must ensure that the body of a <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> form can be *evaluated* at compile time if the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is referenced in subsequent <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> declarations. If the  







expansion of a *type specifier* is not defined fully at compile time (perhaps because it expands into an unknown *type specifier* or a **satisfies** of a named <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that isn’t defined in the compile-time environment), an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may ignore any references to this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> in declarations and/or signal a warning. 



**Examples:**
```lisp

(defun equidimensional (a) 
  (or (< (array-rank a) 2) 
      (apply #’= (array-dimensions a)))) → EQUIDIMENSIONAL 
(deftype square-matrix (&optional type size) 
  ‘(and (array ,type (,size ,size)) 
	(satisfies equidimensional))) → SQUARE-MATRIX 

```
**See Also:** 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



