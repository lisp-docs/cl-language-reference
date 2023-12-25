**defparameter, defvar** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> *name initial-value* [*documentation*] *→ name* 



<DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> [*initial-value* [*documentation*]] *→ name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; not evaluated. 



*initial-value*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; for <DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink>, it is always *evaluated*, but for <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> it is *evaluated* only if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not already <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



**Description:** 



<DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> *establish name* as a *dynamic variable*. 



<DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> unconditionally <GlossaryTerm styled={true} term={"assign"}><i>assigns</i></GlossaryTerm> the *initial-value* to the *dynamic variable* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink>, by contrast, *assigns initial-value* (if supplied) to the *dynamic variable* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> only if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not already <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 



If no *initial-value* is supplied, <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> leaves the *value cell* of the *dynamic variable* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> undisturbed; if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> was previously <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>, its old <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> persists, and if it was previously <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>, it remains <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>. 



If *documentation* is supplied, it is attached to <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> as a *documentation string* of kind **variable**. 



<DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> normally appear as a *top level form*, but it is meaningful for them to appear as *non-top-level forms*. However, the compile-time side effects described below only take place when they appear as *top level forms*. 















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



If a <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> or <DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must recognize that the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> has been proclaimed <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>. However, it must neither <GlossaryTerm styled={true} term={"evaluate"}><i>evaluate</i></GlossaryTerm> the *initial-value form* nor <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the *dynamic variable* named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> at compile time. 



There may be additional (<GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) compile-time or run-time side effects, as long as such effects do not interfere with the correct operation of *conforming programs*. 



**Affected By:** 



<DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> is affected by whether <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is already <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink>, **documentation**, Section 3.2 (Compilation) 



**Notes:** 



It is customary to name *dynamic variables* with an <GlossaryTerm styled={true} term={"asterisk"}><i>asterisk</i></GlossaryTerm> at the beginning and end of the name. e.g., \*foo\* is a good name for a *dynamic variable*, but not for a *lexical variable*; foo is a good name for a *lexical variable*, but not for a *dynamic variable*. This naming convention is observed for all *defined names* in Common Lisp; however, neither *conforming programs* nor *conforming implementations* are obliged to adhere to this convention. 



The intent of the permission for additional side effects is to allow <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> to do normal “bookkeeping” that accompanies definitions. For example, the *macro expansion* of a <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> or <DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> might include code that arranges to record the name of the source file in which the definition occurs. 



<DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink> might be defined as follows: 



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



