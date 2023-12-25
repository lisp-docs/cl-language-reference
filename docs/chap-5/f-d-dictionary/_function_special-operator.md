**function** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *name → function* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *function name* or *lambda expression*. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *function object*. 



**Description:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> is the *functional value* of <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in the current *lexical environment*. 



If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *function name*, the functional definition of that name is that established by the innermost lexically enclosing <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, or <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, if there is one. Otherwise the global functional definition of the *function name* is returned. 



If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *lambda expression*, then a *lexical closure* is returned. In situations where a <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> over the same set of <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> might be produced more than once, the various resulting <GlossaryTerm styled={true} term={"closure"}><i>closures</i></GlossaryTerm> might or might not be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



It is an error to use <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> on a *function name* that does not denote a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> in the lexical environment in which the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> form appears. Specifically, it is an error to use <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> on a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *special form*. An implementation may choose not to signal this 



error for performance reasons, but implementations are forbidden from defining the failure to signal an error as a useful behavior. 



**Examples:**
```lisp

(defun adder (x) (function (lambda (y) (+ x y)))) 
The result of (adder 3) is a function that adds 3 to its argument: 
(setq add3 (adder 3)) 
(funcall add3 5) *→* 8 
This works because **function** creates a *closure* of the *lambda expression* that is able to refer to the *value* 3 of the variable x even after control has returned from the function adder. 

```
**See Also:** 



<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink>, <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, Section 3.1.2.1.1 (Symbols as Forms), Section 2.4.8.2 (Sharpsign Single-Quote), Section 22.1.3.13 (Printing Other Objects) 



Data and Control 











**Notes:** 



The notation #’<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> may be used as an abbreviation for (function <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>). 



