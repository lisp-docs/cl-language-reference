**fboundp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> *name → generalized-boolean* 



**Pronunciation:** 



[ **ef ba\_undp—e** ] 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *function name*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(fboundp ’car) *→ true* 
(fboundp ’nth-value) *→ false* 
(fboundp ’with-open-file) *→ true* 
(fboundp ’unwind-protect) *→ true* 
(defun my-function (x) x) *→* MY-FUNCTION 
(fboundp ’my-function) *→ true* 
(let ((saved-definition (symbol-function ’my-function))) 
  (unwind-protect (progn (fmakunbound ’my-function) 
			 (fboundp ’my-function)) 
    (setf (symbol-function ’my-function) saved-definition))) 
*→ false* 
(fboundp ’my-function) *→ true* 
(defmacro my-macro (x) ‘’,x) *→* MY-MACRO 
(fboundp ’my-macro) *→ true* 
(fmakunbound ’my-function) *→* MY-FUNCTION 
(fboundp ’my-function) *→ false* 
(flet ((my-function (x) x)) 
  (fboundp ’my-function)) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not a *function name*. 



**See Also:** 



<DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink styled={true} term={"fdefinition"}><b>fdefinition</b></DictionaryLink> 















**Notes:** 



It is permissible to call <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> on any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> is sometimes used to “guard” an access to the *function cell*, as in: (if (fboundp x) (symbol-function x)) 



Defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined. 