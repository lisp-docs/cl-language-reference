**defconstant** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> *name initial-value* [*documentation*] → name 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>; not evaluated. 



*initial-value*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



**Description:** 



<ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> causes the global variable named by <ClLinks  term={"name"}><i>name</i></ClLinks> to be given a value that is the result of evaluating *initial-value*. 



A constant defined by <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> can be redefined with <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks>. However, the consequences are undefined if an attempt is made to assign a <ClLinks  term={"value"}><i>value</i></ClLinks> to the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> using another operator, or to assign it to a *different value* using a subsequent <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks>. 



If *documentation* is supplied, it is attached to <ClLinks  term={"name"}><i>name</i></ClLinks> as a *documentation string* of kind **variable**. 



<ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described below only take place when <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> appears as a *top level form*. 



The consequences are undefined if there are any <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the variable named by <ClLinks  term={"name"}><i>name</i></ClLinks> at the time <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> is executed or if the value is not <ClLinks  term={"eql"}><b>eql</b></ClLinks> to the value of *initial-value*. 



The consequences are undefined when constant <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are rebound as either lexical or dynamic variables. In other words, a reference to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> declared with <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> always refers to its global value. 



The side effects of the execution of <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> must be equivalent to at least the side effects of the execution of the following code: 



(setf (symbol-value ’<ClLinks  term={"name"}><i>name</i></ClLinks>) *initial-value*) 



(setf (documentation ’<ClLinks  term={"name"}><i>name</i></ClLinks> ’variable) ’*documentation*) 



If a <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must recognize that <ClLinks  term={"name"}><i>name</i></ClLinks> names a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. An implementation may choose to evaluate the value-form at compile time, load time, or both. Therefore, users must ensure that the *initial-value* can be *evaluated* at compile time (regardless of whether or not references to <ClLinks  term={"name"}><i>name</i></ClLinks> appear in the file) and that it always <ClLinks  term={"evaluate"}><i>evaluates</i></ClLinks> to the same value. 



Data and Control 











**Examples:**
```lisp
(defconstant this-is-a-constant ’never-changing "for a test") → THIS-IS-A-CONSTANT this-is-a-constant → NEVER-CHANGING 
(documentation ’this-is-a-constant ’variable) → "for a test" 
(constantp ’this-is-a-constant) → true 
```
**See Also:** 



<ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks  term={"defparameter"}><b>defparameter</b></ClLinks>, <ClLinks  term={"defvar"}><b>defvar</b></ClLinks>, **documentation**, <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>, Section 3.1.2.1.1.3 (Constant Variables), Section 3.2 (Compilation) 



