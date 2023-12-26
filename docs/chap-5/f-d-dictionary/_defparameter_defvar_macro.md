**defparameter, defvar** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> *name initial-value* [*documentation*] → name 



<DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> [*initial-value* [*documentation*]] → name 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>; not evaluated. 



*initial-value*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; for <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink>, it is always *evaluated*, but for <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> it is *evaluated* only if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is not already <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



**Description:** 



<DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> *establish name* as a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm>. 



<DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> unconditionally <GlossaryTerm  term={"assign"}><i>assigns</i></GlossaryTerm> the *initial-value* to the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink>, by contrast, *assigns initial-value* (if supplied) to the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> only if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is not already <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 



If no *initial-value* is supplied, <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> leaves the <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> undisturbed; if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> was previously <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>, its old <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> persists, and if it was previously <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>, it remains <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>. 



If *documentation* is supplied, it is attached to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind **variable**. 



<DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> normally appear as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, but it is meaningful for them to appear as <GlossaryTerm styled={true} term={"non-top-level form"}><i>non-top-level forms</i></GlossaryTerm>. However, the compile-time side effects described below only take place when they appear as <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>. 















<DictionaryLink styled={true} term={"defparameter, defvar"}><b>defparameter, defvar</b></DictionaryLink> 



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



If a <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> or <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must recognize that the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> has been proclaimed <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. However, it must neither <GlossaryTerm  term={"evaluate"}><i>evaluate</i></GlossaryTerm> the *initial-value form* nor <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> the *dynamic variable* named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> at compile time. 



There may be additional (<GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) compile-time or run-time side effects, as long as such effects do not interfere with the correct operation of *conforming programs*. 



**Affected By:** 



<DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> is affected by whether <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is already <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>, **documentation**, Section 3.2 (Compilation) 



**Notes:** 



It is customary to name *dynamic variables* with an <GlossaryTerm  term={"asterisk"}><i>asterisk</i></GlossaryTerm> at the beginning and end of the name. e.g., \*foo\* is a good name for a *dynamic variable*, but not for a *lexical variable*; foo is a good name for a *lexical variable*, but not for a *dynamic variable*. This naming convention is observed for all *defined names* in Common Lisp; however, neither *conforming programs* nor *conforming implementations* are obliged to adhere to this convention. 



The intent of the permission for additional side effects is to allow <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> to do normal “bookkeeping” that accompanies definitions. For example, the *macro expansion* of a <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> or <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> might include code that arranges to record the name of the source file in which the definition occurs. 



<DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> and <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> might be defined as follows: 



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



