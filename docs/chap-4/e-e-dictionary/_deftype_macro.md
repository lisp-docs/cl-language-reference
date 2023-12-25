**deftype** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> *name lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*lambda-list*—a *deftype lambda list*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> defines a *derived type specifier* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



The meaning of the new *type specifier* is given in terms of a function which expands the *type specifier* into another *type specifier* , which itself will be expanded if it contains references to another *derived type specifier* . 



The newly defined *type specifier* may be referenced as a list of the form (*name arg*<sub>1</sub> *arg*<sub>2</sub> ...). The number of arguments must be appropriate to the *lambda-list*. If the new *type specifier* takes no arguments, or if all of its arguments are optional, the *type specifier* may be used as an *atomic type specifier* . 



The <i>argument expressions</i> to the <i>type specifier</i> , <i>arg</i><sub>1</sub> <i>. . . arg<sub>n</sub></i>, are not <i>evaluated</i>. Instead, these <i>literal objects</i> become the <i>objects</i> to which corresponding <i>parameters</i> become <i>bound</i>. 



The body of the <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (but not the *lambda-list*) is implicitly enclosed in a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, and is evaluated as an *implicit progn*, returning a new *type specifier* . 



The *lexical environment* of the body is the one which was current at the time the <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> form was evaluated, augmented by the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> in the *lambda-list*. 



Recursive expansion of the *type specifier* returned as the expansion must terminate, including the expansion of *type specifiers* which are nested within the expansion. 



The consequences are undefined if the result of fully expanding a *type specifier* contains any circular structure, except within the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> referred to by <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> and <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> *type specifiers*. 



*Documentation* is attached to <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as a *documentation string* of kind <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink>. 



If a <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must ensure that the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is recognized in subsequent <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> declarations. The <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> must ensure that the body of a <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> form can be *evaluated* at compile time if the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is referenced in subsequent <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> declarations. If the  







expansion of a *type specifier* is not defined fully at compile time (perhaps because it expands into an unknown *type specifier* or a **satisfies** of a named <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that isn’t defined in the compile-time environment), an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may ignore any references to this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> in declarations and/or signal a warning. 



**Examples:**
```lisp

(defun equidimensional (a) 
  (or (< (array-rank a) 2) 
      (apply #’= (array-dimensions a)))) *→* EQUIDIMENSIONAL 
(deftype square-matrix (&optional type size) 
  ‘(and (array ,type (,size ,size)) 
	(satisfies equidimensional))) *→* SQUARE-MATRIX 

```
**See Also:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



