**fdefinition** *Accessor* 



**Syntax:** 



**fdefinition** *function-name → definition* 



**(setf (fdefinition** *function-name***)** *new-definition***)** 



**Arguments and Values:** 



*function-name*—a *function name*. In the non-**setf** case, the *name* must be *fbound* in the *global environment*. 



*definition*—Current global function definition named by *function-name*. 



*new-definition*—a *function*. 



**Description:** 



**fdefinition** *accesses* the current global function definition named by *function-name*. The definition may be a *function* or may be an *object* representing a *special form* or *macro*. The value returned by **fdefinition** when **fboundp** returns true but the *function-name* denotes a *macro* or *special form* is not well-defined, but **fdefinition** does not signal an error. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *function-name* is not a *function name*. 



An error of *type* **undefined-function** is signaled in the non-**setf** case if *function-name* is not *fbound*. 



**See Also:** 



**fboundp**, **fmakunbound**, **macro-function**, **special-operator-p**, **symbol-function** 



**Notes:** 



**fdefinition** cannot *access* the value of a lexical function name produced by **flet** or **labels**; it can *access* only the global function value. 



**setf** can be used with **fdefinition** to replace a global function definition when the *function-name*’s function definition does not represent a *special form*. **setf** of **fdefinition** requires a *function* as the new value. It is an error to set the **fdefinition** of a *function-name* to a *symbol*, a *list*, or the value returned by **fdefinition** on the name of a *macro* or *special form*. 



Data and Control 











**fboundp** 



