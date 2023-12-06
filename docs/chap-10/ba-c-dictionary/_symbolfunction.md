**symbol-function** *Accessor* 



**Syntax:** 



**symbol-function** *symbol → contents* 



**(setf (symbol-function** *symbol***)** *new-contents***)** 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*contents*— If the *symbol* is globally defined as a *macro* or a *special operator* , an *object* of *implementation-dependent* nature and identity is returned. If the *symbol* is not globally defined as either a *macro* or a *special operator* , and if the *symbol* is *fbound*, a *function object* is returned. 



*new-contents*—a *function*. 



**Description:** 



*Accesses* the *symbol*’s *function cell*. 







 



 



**symbol-function** 



**Examples:**
```lisp
 

(symbol-function ’car) *→* #<FUNCTION CAR> 

(symbol-function ’twice) is an error ;because TWICE isn’t defined. 

(defun twice (n) (\* n 2)) *→* TWICE 

(symbol-function ’twice) *→* #<FUNCTION TWICE> 

(list (twice 3) 

(funcall (function twice) 3) 

(funcall (symbol-function ’twice) 3)) 

*→* (6 6 6) 

(flet ((twice (x) (list x x))) 

(list (twice 3) 

(funcall (function twice) 3) 

(funcall (symbol-function ’twice) 3))) 

*→* ((3 3) (3 3) 6) 

(setf (symbol-function ’twice) #’(lambda (x) (list x x))) 

*→* #<FUNCTION anonymous> 

(list (twice 3) 

(funcall (function twice) 3) 

(funcall (symbol-function ’twice) 3)) 

*→* ((3 3) (3 3) (3 3)) 

(fboundp ’defun) *→ true* 

(symbol-function ’defun) 

*→ implementation-dependent* 

(functionp (symbol-function ’defun)) 

*→ implementation-dependent* 

(defun symbol-function-or-nil (symbol) 

(if (and (fboundp symbol) 

(not (macro-function symbol)) 

(not (special-operator-p symbol))) 

(symbol-function symbol) 

nil)) *→* SYMBOL-FUNCTION-OR-NIL 

(symbol-function-or-nil ’car) *→* #<FUNCTION CAR> 

(symbol-function-or-nil ’defun) *→* NIL 


```
**Affected By:** 



**defun** 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



Should signal **undefined-function** if *symbol* is not *fbound* and an attempt is made to *read* its definition. (No such error is signaled on an attempt to *write* its definition.) 



**See Also:** 



**fboundp**, **fmakunbound**, **macro-function**, **special-operator-p** 







 



 



**Notes:** 



**symbol-function** cannot *access* the value of a lexical function name produced by **flet** or **labels**; it can *access* only the global function value. 



**setf** may be used with **symbol-function** to replace a global function definition when the *symbol*’s function definition does not represent a *special operator* . 



(symbol-function *symbol*) *≡* (fdefinition *symbol*) 



However, **fdefinition** accepts arguments other than just *symbols*. 



