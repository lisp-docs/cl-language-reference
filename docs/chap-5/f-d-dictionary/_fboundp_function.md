**fboundp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> *name → generalized-boolean* 



**Pronunciation:** 



[ **ef ba\_undp—e** ] 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(fboundp ’car) → true 
(fboundp ’nth-value) → false 
(fboundp ’with-open-file) → true 
(fboundp ’unwind-protect) → true 
(defun my-function (x) x) → MY-FUNCTION 
(fboundp ’my-function) → true 
(let ((saved-definition (symbol-function ’my-function))) 
  (unwind-protect (progn (fmakunbound ’my-function) 
			 (fboundp ’my-function)) 
    (setf (symbol-function ’my-function) saved-definition))) 
→ false 
(fboundp ’my-function) → true 
(defmacro my-macro (x) ‘’,x) → MY-MACRO 
(fboundp ’my-macro) → true 
(fmakunbound ’my-function) → MY-FUNCTION 
(fboundp ’my-function) → false 
(flet ((my-function (x) x)) 
  (fboundp ’my-function)) → false 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is not a *function name*. 



**See Also:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> 















**Notes:** 



It is permissible to call <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> on any <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>. 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> is sometimes used to “guard” an access to the *function cell*, as in: (if (fboundp x) (symbol-function x)) 



Defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined. 