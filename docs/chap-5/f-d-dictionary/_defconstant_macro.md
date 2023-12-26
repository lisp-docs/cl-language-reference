**defconstant** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> *name initial-value* [*documentation*] → name 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>; not evaluated. 



*initial-value*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



**Description:** 



<DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> causes the global variable named by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to be given a value that is the result of evaluating *initial-value*. 



A constant defined by <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> can be redefined with <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>. However, the consequences are undefined if an attempt is made to assign a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> to the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> using another operator, or to assign it to a *different value* using a subsequent <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>. 



If *documentation* is supplied, it is attached to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as a *documentation string* of kind **variable**. 



<DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described below only take place when <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> appears as a *top level form*. 



The consequences are undefined if there are any <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of the variable named by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> at the time <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> is executed or if the value is not <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the value of *initial-value*. 



The consequences are undefined when constant <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are rebound as either lexical or dynamic variables. In other words, a reference to a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> declared with <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> always refers to its global value. 



The side effects of the execution of <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> must be equivalent to at least the side effects of the execution of the following code: 



(setf (symbol-value ’<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>) *initial-value*) 



(setf (documentation ’<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> ’variable) ’*documentation*) 



If a <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must recognize that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. An implementation may choose to evaluate the value-form at compile time, load time, or both. Therefore, users must ensure that the *initial-value* can be *evaluated* at compile time (regardless of whether or not references to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> appear in the file) and that it always <GlossaryTerm  term={"evaluate"}><i>evaluates</i></GlossaryTerm> to the same value. 



Data and Control 











**Examples:**
```lisp
(defconstant this-is-a-constant ’never-changing "for a test") → THIS-IS-A-CONSTANT this-is-a-constant → NEVER-CHANGING 
(documentation ’this-is-a-constant ’variable) → "for a test" 
(constantp ’this-is-a-constant) → true 
```
**See Also:** 



<DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink>, <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink>, **documentation**, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>, Section 3.1.2.1.1.3 (Constant Variables), Section 3.2 (Compilation) 



