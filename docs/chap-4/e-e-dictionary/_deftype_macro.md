**deftype** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"deftype"}><b>deftype</b></ClLinks> *name lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → name 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a <GlossaryTerm styled={true} term={"deftype lambda list"}><i>deftype lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks  term={"deftype"}><b>deftype</b></ClLinks> defines a <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifier</i></GlossaryTerm> named <ClLinks  term={"name"}><i>name</i></ClLinks>. 



The meaning of the new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is given in terms of a function which expands the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> into another <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , which itself will be expanded if it contains references to another <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifier</i></GlossaryTerm> . 



The newly defined <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> may be referenced as a list of the form (*name arg*<sub>1</sub> *arg*<sub>2</sub> ...). The number of arguments must be appropriate to the *lambda-list*. If the new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> takes no arguments, or if all of its arguments are optional, the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> may be used as an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . 



The <i>argument expressions</i> to the <i>type specifier</i> , <i>arg</i><sub>1</sub> <i>. . . arg<sub>n</sub></i>, are not <i>evaluated</i>. Instead, these <i>literal objects</i> become the <i>objects</i> to which corresponding <i>parameters</i> become <i>bound</i>. 



The body of the <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> (but not the *lambda-list*) is implicitly enclosed in a <ClLinks  term={"block"}><i>block</i></ClLinks> named <ClLinks  term={"name"}><i>name</i></ClLinks>, and is evaluated as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>, returning a new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



The <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> of the body is the one which was current at the time the <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> form was evaluated, augmented by the <ClLinks  term={"variable"}><i>variables</i></ClLinks> in the *lambda-list*. 



Recursive expansion of the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> returned as the expansion must terminate, including the expansion of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> which are nested within the expansion. 



The consequences are undefined if the result of fully expanding a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> contains any circular structure, except within the <ClLinks  term={"object"}><i>objects</i></ClLinks> referred to by <ClLinks  term={"member"}><b>member</b></ClLinks> and <ClLinks  term={"eql"}><b>eql</b></ClLinks> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. 



*Documentation* is attached to <ClLinks  term={"name"}><i>name</i></ClLinks> as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind <ClLinks  term={"type"}><b>type</b></ClLinks>. 



If a <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must ensure that the <ClLinks  term={"name"}><i>name</i></ClLinks> is recognized in subsequent <ClLinks  term={"type"}><i>type</i></ClLinks> declarations. The <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> must ensure that the body of a <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> form can be *evaluated* at compile time if the <ClLinks  term={"name"}><i>name</i></ClLinks> is referenced in subsequent <ClLinks  term={"type"}><i>type</i></ClLinks> declarations. If the  







expansion of a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is not defined fully at compile time (perhaps because it expands into an unknown <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> or a **satisfies** of a named <ClLinks  term={"function"}><i>function</i></ClLinks> that isn’t defined in the compile-time environment), an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may ignore any references to this <ClLinks  term={"type"}><i>type</i></ClLinks> in declarations and/or signal a warning. 



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



<ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



