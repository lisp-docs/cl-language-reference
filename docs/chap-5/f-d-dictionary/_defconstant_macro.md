**defconstant** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> *name initial-value* [*documentation*] → name 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; not evaluated. 



*initial-value*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



**Description:** 



<ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> causes the global variable named by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to be given a value that is the result of evaluating *initial-value*. 



A constant defined by <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> can be redefined with <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks>. However, the consequences are undefined if an attempt is made to assign a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> using another operator, or to assign it to a *different value* using a subsequent <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks>. 



If *documentation* is supplied, it is attached to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as a *documentation string* of kind **variable**. 



<ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described below only take place when <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> appears as a *top level form*. 



The consequences are undefined if there are any <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the variable named by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> at the time <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> is executed or if the value is not <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> to the value of *initial-value*. 



The consequences are undefined when constant <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are rebound as either lexical or dynamic variables. In other words, a reference to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> declared with <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> always refers to its global value. 



The side effects of the execution of <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> must be equivalent to at least the side effects of the execution of the following code: 



(setf (symbol-value ’<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) *initial-value*) 



(setf (documentation ’<ClLinks styled={true} term={"name"}><i>name</i></ClLinks> ’variable) ’*documentation*) 



If a <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must recognize that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> names a *constant variable*. An implementation may choose to evaluate the value-form at compile time, load time, or both. Therefore, users must ensure that the *initial-value* can be *evaluated* at compile time (regardless of whether or not references to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> appear in the file) and that it always <ClLinks styled={true} term={"evaluate"}><i>evaluates</i></ClLinks> to the same value. 



Data and Control 











**Examples:**
```lisp
(defconstant this-is-a-constant ’never-changing "for a test") → THIS-IS-A-CONSTANT this-is-a-constant → NEVER-CHANGING 
(documentation ’this-is-a-constant ’variable) → "for a test" 
(constantp ’this-is-a-constant) → true 
```
**See Also:** 



<ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks>, <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks>, **documentation**, <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>, Section 3.1.2.1.1.3 (Constant Variables), Section 3.2 (Compilation) 



