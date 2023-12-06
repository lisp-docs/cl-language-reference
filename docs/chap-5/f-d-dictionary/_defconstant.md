**defconstant** *Macro* 



**Syntax:** 



**defconstant** *name initial-value* [*documentation*] *→ name* 



**Arguments and Values:** 



*name*—a *symbol*; not evaluated. 



*initial-value*—a *form*; evaluated. 



*documentation*—a *string*; not evaluated. 



**Description:** 



**defconstant** causes the global variable named by *name* to be given a value that is the result of evaluating *initial-value*. 



A constant defined by **defconstant** can be redefined with **defconstant**. However, the consequences are undefined if an attempt is made to assign a *value* to the *symbol* using another operator, or to assign it to a *different value* using a subsequent **defconstant**. 



If *documentation* is supplied, it is attached to *name* as a *documentation string* of kind **variable**. 



**defconstant** normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described below only take place when **defconstant** appears as a *top level form*. 



The consequences are undefined if there are any *bindings* of the variable named by *name* at the time **defconstant** is executed or if the value is not **eql** to the value of *initial-value*. 



The consequences are undefined when constant *symbols* are rebound as either lexical or dynamic variables. In other words, a reference to a *symbol* declared with **defconstant** always refers to its global value. 



The side effects of the execution of **defconstant** must be equivalent to at least the side effects of the execution of the following code: 



(setf (symbol-value ’*name*) *initial-value*) 



(setf (documentation ’*name* ’variable) ’*documentation*) 



If a **defconstant** *form* appears as a *top level form*, the *compiler* must recognize that *name* names a *constant variable*. An implementation may choose to evaluate the value-form at compile time, load time, or both. Therefore, users must ensure that the *initial-value* can be *evaluated* at compile time (regardless of whether or not references to *name* appear in the file) and that it always *evaluates* to the same value. 



Data and Control 











**Examples:**
```lisp
 

(defconstant this-is-a-constant ’never-changing "for a test") *→* THIS-IS-A-CONSTANT this-is-a-constant *→* NEVER-CHANGING 

(documentation ’this-is-a-constant ’variable) *→* "for a test" 

(constantp ’this-is-a-constant) *→ true* 


```
**See Also:** 



**declaim**, **defparameter**, **defvar**, **documentation**, **proclaim**, Section 3.1.2.1.1.3 (Constant Variables), Section 3.2 (Compilation) 



