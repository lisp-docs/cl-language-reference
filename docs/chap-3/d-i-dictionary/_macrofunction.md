**macro-function** *Accessor* 



**Syntax:** 



**macro-function** *symbol* &optional *environment → function* 



**(setf (macro-function** *symbol* &optional *environment***)** *new-function***)** 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*environment*—an *environment object*. 



*function*—a *macro function* or **nil**. 



*new-function*—a *macro function*. 



**Description:** 



Determines whether *symbol* has a function definition as a macro in the specified *environment*. 











If so, the macro expansion function, a function of two arguments, is returned. If *symbol* has no function definition in the lexical environment *environment*, or its definition is not a *macro*, **macro-function** returns **nil**. 



It is possible for both **macro-function** and **special-operator-p** to return *true* of *symbol*. The *macro* definition must be available for use by programs that understand only the standard Common Lisp *special forms*. 



**Examples:**
```lisp
 



(defmacro macfun (x) ’(macro-function ’macfun)) *→* MACFUN 



(not (macro-function ’macfun)) *→ false* 



(macrolet ((foo (&environment env) 



(if (macro-function ’bar env) 



”yes 



”no))) 



(list (foo) 



(macrolet ((bar () :beep)) 



(foo)))) 



*→* (NO YES) 




```
**Affected By:** 



(setf macro-function), **defmacro**, and **macrolet**. 



**Exceptional Situations:** 



The consequences are undefined if *environment* is *non-nil* in a use of **setf** of **macro-function**. 



**See Also:** 



**defmacro**, Section 3.1 (Evaluation) 



**Notes:** 



**setf** can be used with **macro-function** to install a *macro* as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a *function* that accepts two arguments, the entire macro call and an *environment*, and computes the expansion for that call. Performing this operation causes *symbol* to have only that macro definition as its global function definition; any previous definition, whether as a *macro* or as a *function*, is lost.  







**macroexpand, macroexpand-1** 



