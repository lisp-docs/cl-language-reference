**deftype** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> *name lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → name 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*lambda-list*—a <GlossaryTerm styled={true} term={"deftype lambda list"}><i>deftype lambda list</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> defines a <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifier</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



The meaning of the new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is given in terms of a function which expands the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> into another <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , which itself will be expanded if it contains references to another <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifier</i></GlossaryTerm> . 



The newly defined <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> may be referenced as a list of the form (*name arg*<sub>1</sub> *arg*<sub>2</sub> ...). The number of arguments must be appropriate to the *lambda-list*. If the new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> takes no arguments, or if all of its arguments are optional, the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> may be used as an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . 



The <i>argument expressions</i> to the <i>type specifier</i> , <i>arg</i><sub>1</sub> <i>. . . arg<sub>n</sub></i>, are not <i>evaluated</i>. Instead, these <i>literal objects</i> become the <i>objects</i> to which corresponding <i>parameters</i> become <i>bound</i>. 



The body of the <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> (but not the *lambda-list*) is implicitly enclosed in a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, and is evaluated as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>, returning a new <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



The <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> of the body is the one which was current at the time the <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> form was evaluated, augmented by the <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> in the *lambda-list*. 



Recursive expansion of the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> returned as the expansion must terminate, including the expansion of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> which are nested within the expansion. 



The consequences are undefined if the result of fully expanding a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> contains any circular structure, except within the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> referred to by <DictionaryLink  term={"member"}><b>member</b></DictionaryLink> and <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. 



*Documentation* is attached to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind <DictionaryLink  term={"type"}><b>type</b></DictionaryLink>. 



If a <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must ensure that the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is recognized in subsequent <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> declarations. The <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> must ensure that the body of a <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> form can be *evaluated* at compile time if the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is referenced in subsequent <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> declarations. If the  







expansion of a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> is not defined fully at compile time (perhaps because it expands into an unknown <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> or a **satisfies** of a named <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that isn’t defined in the compile-time environment), an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may ignore any references to this <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> in declarations and/or signal a warning. 



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



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



