**defparameter, defvar** *Macro* 



**Syntax:** 



**defparameter** *name initial-value* [*documentation*] *→ name* 



**defvar** *name* [*initial-value* [*documentation*]] *→ name* 



**Arguments and Values:** 



*name*—a *symbol*; not evaluated. 



*initial-value*—a *form*; for **defparameter**, it is always *evaluated*, but for **defvar** it is *evaluated* only if *name* is not already *bound*. 



*documentation*—a *string*; not evaluated. 



**Description:** 



**defparameter** and **defvar** *establish name* as a *dynamic variable*. 



**defparameter** unconditionally *assigns* the *initial-value* to the *dynamic variable* named *name*. **defvar**, by contrast, *assigns initial-value* (if supplied) to the *dynamic variable* named *name* only if *name* is not already *bound*. 



If no *initial-value* is supplied, **defvar** leaves the *value cell* of the *dynamic variable* named *name* undisturbed; if *name* was previously *bound*, its old *value* persists, and if it was previously *unbound*, it remains *unbound*. 



If *documentation* is supplied, it is attached to *name* as a *documentation string* of kind **variable**. 



**defparameter** and **defvar** normally appear as a *top level form*, but it is meaningful for them to appear as *non-top-level forms*. However, the compile-time side effects described below only take place when they appear as *top level forms*. 















**defparameter, defvar** 



**Examples:**
```lisp
 



(defparameter \*p\* 1) *→* \*P\* 



\*p\* *→* 1 



(constantp ’\*p\*) *→ false* 



(setq \*p\* 2) *→* 2 



(defparameter \*p\* 3) *→* \*P\* 



\*p\* *→* 3 



(defvar \*v\* 1) *→* \*V\* 



\*v\* *→* 1 



(constantp ’\*v\*) *→ false* 



(setq \*v\* 2) *→* 2 



(defvar \*v\* 3) *→* \*V\* 



\*v\* *→* 2 



(defun foo () 



(let ((\*p\* ’p) (\*v\* ’v)) 



(bar))) *→* FOO 



(defun bar () (list \*p\* \*v\*)) *→* BAR 



(foo) *→* (P V) 



The principal operational distinction between **defparameter** and **defvar** is that **defparameter** makes an unconditional assignment to *name*, while **defvar** makes a conditional one. In practice, this means that **defparameter** is useful in situations where loading or reloading the definition would want to pick up a new value of the variable, while **defvar** is used in situations where the old value would want to be retained if the file were loaded or reloaded. For example, one might create a file which contained: 



(defvar \*the-interesting-numbers\* ’()) 



(defmacro define-interesting-number (name n) 



‘(progn (defvar ,name ,n) 



(pushnew ,name \*the-interesting-numbers\*) 



’,name)) 



(define-interesting-number \*my-height\* 168) ;cm 



(define-interesting-number \*my-weight\* 13) ;stones 



Here the initial value, (), for the variable \*the-interesting-numbers\* is just a seed that we are never likely to want to reset to something else once something has been grown from it. As such, we have used **defvar** to avoid having the \*interesting-numbers\* information reset if the file is loaded a second time. It is true that the two calls to **define-interesting-number** here would be reprocessed, but if there were additional calls in another file, they would not be and that information would be lost. On the other hand, consider the following code: 



(defparameter \*default-beep-count\* 3) 



(defun beep (&optional (n \*default-beep-count\*)) 



(dotimes (i n) (si:%beep 1000. 100000.) (sleep 0.1))) 



Data and Control 











**defparameter, defvar** 



Here we could easily imagine editing the code to change the initial value of \*default-beep-count\*, and then reloading the file to pick up the new value. In order to make value updating easy, we have used **defparameter**. 



On the other hand, there is potential value to using **defvar** in this situation. For example, suppose that someone had predefined an alternate value for \*default-beep-count\*, or had loaded the file and then manually changed the value. In both cases, if we had used **defvar** instead of **defparameter**, those user preferences would not be overridden by (re)loading the file. 



The choice of whether to use **defparameter** or **defvar** has visible consequences to programs, but is nevertheless often made for subjective reasons. 




```
**Side Effects:** 



If a **defvar** or **defparameter** *form* appears as a *top level form*, the *compiler* must recognize that the *name* has been proclaimed **special**. However, it must neither *evaluate* the *initial-value form* nor *assign* the *dynamic variable* named *name* at compile time. 



There may be additional (*implementation-defined*) compile-time or run-time side effects, as long as such effects do not interfere with the correct operation of *conforming programs*. 



**Affected By:** 



**defvar** is affected by whether *name* is already *bound*. 



**See Also:** 



**declaim**, **defconstant**, **documentation**, Section 3.2 (Compilation) 



**Notes:** 



It is customary to name *dynamic variables* with an *asterisk* at the beginning and end of the name. e.g., \*foo\* is a good name for a *dynamic variable*, but not for a *lexical variable*; foo is a good name for a *lexical variable*, but not for a *dynamic variable*. This naming convention is observed for all *defined names* in Common Lisp; however, neither *conforming programs* nor *conforming implementations* are obliged to adhere to this convention. 



The intent of the permission for additional side effects is to allow *implementations* to do normal “bookkeeping” that accompanies definitions. For example, the *macro expansion* of a **defvar** or **defparameter** *form* might include code that arranges to record the name of the source file in which the definition occurs. 



**defparameter** and **defvar** might be defined as follows: 



(defmacro defparameter (name initial-value 



&optional (documentation nil documentation-p)) 



‘(progn (declaim (special ,name)) 



(setf (symbol-value ’,name) ,initial-value) 



,(when documentation-p 



‘(setf (documentation ’,name ’variable) ’,documentation)) 



’,name)) 















(defmacro defvar (name &optional 



(initial-value nil initial-value-p) 



(documentation nil documentation-p)) 



‘(progn (declaim (special ,name)) 



,(when initial-value-p 



‘(unless (boundp ’,name) 



(setf (symbol-value ’,name) ,initial-value))) 



,(when documentation-p 



‘(setf (documentation ’,name ’variable) ’,documentation)) 



’,name)) 



