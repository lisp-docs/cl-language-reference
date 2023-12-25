**defparameter, defvar** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> *name initial-value* [*documentation*] → name 



<ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> [*initial-value* [*documentation*]] → name 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; not evaluated. 



*initial-value*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; for <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks>, it is always *evaluated*, but for <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> it is *evaluated* only if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not already <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



**Description:** 



<ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> and <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> *establish name* as a *dynamic variable*. 



<ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> unconditionally <ClLinks styled={true} term={"assign"}><i>assigns</i></ClLinks> the *initial-value* to the *dynamic variable* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks>, by contrast, *assigns initial-value* (if supplied) to the *dynamic variable* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> only if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not already <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 



If no *initial-value* is supplied, <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> leaves the *value cell* of the *dynamic variable* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> undisturbed; if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> was previously <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>, its old <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> persists, and if it was previously <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>, it remains <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>. 



If *documentation* is supplied, it is attached to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> as a *documentation string* of kind **variable**. 



<ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> and <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> normally appear as a *top level form*, but it is meaningful for them to appear as *non-top-level forms*. However, the compile-time side effects described below only take place when they appear as *top level forms*. 















**defparameter, defvar** 



**Examples:**
```lisp
(defparameter \*p\* 1) → \*P\* 
\*p\* → 1 
(constantp ’\*p\*) → false 
(setq \*p\* 2) → 2 
(defparameter \*p\* 3) → \*P\* 
\*p\* → 3 
(defvar \*v\* 1) → \*V\* 
\*v\* → 1 
(constantp ’\*v\*) → false 
(setq \*v\* 2) → 2 
(defvar \*v\* 3) → \*V\* 
\*v\* → 2 
(defun foo () 
  (let ((\*p\* ’p) (\*v\* ’v)) 
    (bar))) → FOO 
(defun bar () (list \*p\* \*v\*)) → BAR 
(foo) → (P V) 
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



If a <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> or <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must recognize that the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> has been proclaimed <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>. However, it must neither <ClLinks styled={true} term={"evaluate"}><i>evaluate</i></ClLinks> the *initial-value form* nor <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the *dynamic variable* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> at compile time. 



There may be additional (<ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) compile-time or run-time side effects, as long as such effects do not interfere with the correct operation of *conforming programs*. 



**Affected By:** 



<ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> is affected by whether <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is already <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks>, **documentation**, Section 3.2 (Compilation) 



**Notes:** 



It is customary to name *dynamic variables* with an <ClLinks styled={true} term={"asterisk"}><i>asterisk</i></ClLinks> at the beginning and end of the name. e.g., \*foo\* is a good name for a *dynamic variable*, but not for a *lexical variable*; foo is a good name for a *lexical variable*, but not for a *dynamic variable*. This naming convention is observed for all *defined names* in Common Lisp; however, neither *conforming programs* nor *conforming implementations* are obliged to adhere to this convention. 



The intent of the permission for additional side effects is to allow <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> to do normal “bookkeeping” that accompanies definitions. For example, the *macro expansion* of a <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> or <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> might include code that arranges to record the name of the source file in which the definition occurs. 



<ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> and <ClLinks styled={true} term={"defvar"}><b>defvar</b></ClLinks> might be defined as follows: 



(defmacro defparameter (name initial-value 



&amp;optional (documentation nil documentation-p)) 



‘(progn (declaim (special ,name)) 



(setf (symbol-value ’,name) ,initial-value) 



,(when documentation-p 



‘(setf (documentation ’,name ’variable) ’,documentation)) 



’,name)) 















(defmacro defvar (name &amp;optional 



(initial-value nil initial-value-p) 



(documentation nil documentation-p)) 



‘(progn (declaim (special ,name)) 



,(when initial-value-p 



‘(unless (boundp ’,name) 



(setf (symbol-value ’,name) ,initial-value))) 



,(when documentation-p 



‘(setf (documentation ’,name ’variable) ’,documentation)) 



’,name)) 



