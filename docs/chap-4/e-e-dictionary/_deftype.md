**deftype** *Macro* 



**Syntax:** 



**deftype** *name lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *→ name* 



**Arguments and Values:** 



*name*—a *symbol*. 



*lambda-list*—a *deftype lambda list*. 



*declaration*—a **declare** *expression*; not evaluated. 



*documentation*—a *string*; not evaluated. 



*form*—a *form*. 



**Description:** 



**deftype** defines a *derived type specifier* named *name*. 



The meaning of the new *type specifier* is given in terms of a function which expands the *type specifier* into another *type specifier* , which itself will be expanded if it contains references to another *derived type specifier* . 



The newly defined *type specifier* may be referenced as a list of the form (*name arg*<sub>1</sub> *arg*<sub>2</sub> ...). The number of arguments must be appropriate to the *lambda-list*. If the new *type specifier* takes no arguments, or if all of its arguments are optional, the *type specifier* may be used as an *atomic type specifier* . 



The <i>argument expressions</i> to the <i>type specifier</i> , <i>arg</i><sub>1</sub> <i>. . . arg<sub>n</sub></i>, are not <i>evaluated</i>. Instead, these <i>literal objects</i> become the <i>objects</i> to which corresponding <i>parameters</i> become <i>bound</i>. 



The body of the **deftype** *form* (but not the *lambda-list*) is implicitly enclosed in a *block* named *name*, and is evaluated as an *implicit progn*, returning a new *type specifier* . 



The *lexical environment* of the body is the one which was current at the time the **deftype** form was evaluated, augmented by the *variables* in the *lambda-list*. 



Recursive expansion of the *type specifier* returned as the expansion must terminate, including the expansion of *type specifiers* which are nested within the expansion. 



The consequences are undefined if the result of fully expanding a *type specifier* contains any circular structure, except within the *objects* referred to by **member** and **eql** *type specifiers*. 



*Documentation* is attached to *name* as a *documentation string* of kind **type**. 



If a **deftype** *form* appears as a *top level form*, the *compiler* must ensure that the *name* is recognized in subsequent *type* declarations. The *programmer* must ensure that the body of a **deftype** form can be *evaluated* at compile time if the *name* is referenced in subsequent *type* declarations. If the  







expansion of a *type specifier* is not defined fully at compile time (perhaps because it expands into an unknown *type specifier* or a **satisfies** of a named *function* that isn’t defined in the compile-time environment), an *implementation* may ignore any references to this *type* in declarations and/or signal a warning. 



**Examples:**
```lisp
 

(defun equidimensional (a) 

(or (&lt; (array-rank a) 2) 

(apply #’= (array-dimensions a)))) *→* EQUIDIMENSIONAL 

(deftype square-matrix (&amp;optional type size) 

‘(and (array ,type (,size ,size)) 

(satisfies equidimensional))) *→* SQUARE-MATRIX 


```
**See Also:** 



**declare**, **defmacro**, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



