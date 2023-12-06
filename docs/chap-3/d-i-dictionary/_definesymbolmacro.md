**define-symbol-macro** *Macro* 



**Syntax:** 



**define-symbol-macro** *symbol expansion* 



*→ symbol* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*expansion*—a *form*. 



**Description:** 



Provides a mechanism for globally affecting the *macro expansion* of the indicated *symbol*. 



Globally establishes an expansion function for the *symbol macro* named by *symbol*. The only guaranteed property of an expansion *function* for a *symbol macro* is that when it is applied to the *form* and the *environment* it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the *environment*, or both.)  







Each global reference to *symbol* (*i.e.*, not *shadowed* <sub>2</sub> by a *binding* for a *variable* or *symbol macro* named by the same *symbol*) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a *symbol macro* is subject to further *macro expansion* in the same *lexical environment* as the *symbol macro* reference, exactly analogous to normal *macros*. 



The consequences are unspecified if a **special** declaration is made for *symbol* while in the scope of this definition (*i.e.*, when it is not *shadowed* <sub>2</sub> by a *binding* for a *variable* or *symbol macro* named by the same *symbol*). 



Any use of **setq** to set the value of the *symbol* while in the scope of this definition is treated as if it were a **setf**. **psetq** of *symbol* is treated as if it were a **psetf**, and **multiple-value-setq** is treated as if it were a **setf** of **values**. 



A *binding* for a *symbol macro* can be *shadowed* <sub>2</sub> by **let** or **symbol-macrolet**. 



**Examples:**
```lisp
 

(defvar \*things\* (list ’alpha ’beta ’gamma)) *→* \*THINGS\* 

(define-symbol-macro thing1 (first \*things\*)) *→* THING1 

(define-symbol-macro thing2 (second \*things\*)) *→* THING2 

(define-symbol-macro thing3 (third \*things\*)) *→* THING3 

thing1 *→* ALPHA 

(setq thing1 ’ONE) *→* ONE 

\*things\* *→* (ONE BETA GAMMA) 

(multiple-value-setq (thing2 thing3) (values ’two ’three)) *→* TWO 

thing3 *→* THREE 

\*things\* *→* (ONE TWO THREE) 

(list thing2 (let ((thing2 2)) thing2)) *→* (TWO 2) 


```
**Exceptional Situations:** 



If *symbol* is already defined as a *global variable*, an error of *type* **program-error** is signaled. 



**See Also:** 



**symbol-macrolet**, **macroexpand**  







**symbol-macrolet** 



