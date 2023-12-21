**special** *Declaration* 



**Syntax:** 



(special *\{var\}*\*) 



**Arguments:** 



*var*—a *symbol*. 



**Valid Context:** 



*declaration* or *proclamation* 



**Binding Types Aected:** 



*variable* 



**Description:** 



Specifies that all of the *vars* named are dynamic. This specifier a↵ects variable *bindings* and a↵ects references. All variable *bindings* a↵ected are made to be dynamic *bindings*, and a↵ected variable references refer to the current dynamic *binding*. For example: 



(defun hack (thing \*mod\*) ;The binding of the parameter 



(declare (special \*mod\*)) ; \*mod\* is visible to hack1, 



(hack1 (car thing))) ; but not that of thing. 



(defun hack1 (arg) 



(declare (special \*mod\*)) ;Declare references to \*mod\* 



;within hack1 to be special. 



(if (atom arg) \*mod\* 



(cons (hack1 (car arg)) (hack1 (cdr arg))))) 



A **special** declaration does not a↵ect inner *bindings* of a *var*; the inner *bindings* implicitly shadow a **special** declaration and must be explicitly re-declared to be **special**. **special** declarations never apply to function *bindings*. 



**special** declarations can be either *bound declarations*, a↵ecting both a binding and references, or *free declarations*, a↵ecting only references, depending on whether the declaration is attached to a variable binding. 



When used in a *proclamation*, a **special** *declaration specifier* applies to all *bindings* as well as to all references of the mentioned variables. For example, after 



(declaim (special x)) 



Evaluation and 



 



 



**special** 



then in a function definition such as 



(defun example (x) ...) 



the parameter x is bound as a dynamic variable rather than as a lexical variable. 



**Examples:**
```lisp

(defun declare-eg (y) ;this y is special 
  (declare (special y)) 
  (let ((y t)) ;this y is lexical 
    (list y 
	  (locally (declare (special y)) y)))) ;this y refers to the 
					;special binding of y 
*!* DECLARE-EG 
(declare-eg nil) *!* (T NIL) 
(setf (symbol-value ’x) 6) 
(defun foo (x) ;a lexical binding of x 
  (print x) 
  (let ((x (1+ x))) ;a special binding of x 
    (declare (special x)) ;and a lexical reference 
    (bar)) 
  (1+ x)) 
(defun bar () 
  (print (locally (declare (special x)) 
	   x))) 
(foo 10) 
▷ 10 
▷ 11 
*!* 11 
(setf (symbol-value ’x) 6) 
(defun bar (x y) ;[1] 1st occurrence of x 
  (let ((old-x x) ;[2] 2nd occurrence of x – same as 1st occurrence 
	(x y)) ;[3] 3rd occurrence of x 
    (declare (special x)) 
    (list old-x x))) 
(bar ’first ’second) *!* (FIRST SECOND) 
(defun few (x &optional (y \*foo\*)) 
  (declare (special \*foo\*)) 
  ...) 
The reference to \*foo\* in the first line of this example is not **special** even though there is a **special** declaration in the second line. 
(declaim (special prosp)) *! implementation-dependent* 



(setq prosp 1 reg 1) *!* 1 
(let ((prosp 2) (reg 2)) ;the binding of prosp is special 
  (set ’prosp 3) (set ’reg 3) ;due to the preceding proclamation, 
  (list prosp reg)) ;whereas the variable reg is lexical 
*!* (3 2) 
(list prosp reg) *!* (1 3) 
(declaim (special x)) ;x is always special. 
(defun example (x y) 
  (declare (special y)) 
  (let ((y 3) (x (\* x 2))) 
    (print (+ y (locally (declare (special y)) y))) 
    (let ((y 4)) (declare (special y)) (foo x)))) *!* EXAMPLE 
In the contorted code above, the outermost and innermost *bindings* of y are dynamic, but the middle binding is lexical. The two arguments to + are di↵erent, one being the value, which is 3, of the lexical variable y, and the other being the value of the dynamic variable named y (a *binding* of which happens, coincidentally, to lexically surround it at an outer level). All the *bindings* of x and references to x are dynamic, however, because of the proclamation that x is always **special**. 

```
**See Also:** 



**defparameter**, **defvar** 



