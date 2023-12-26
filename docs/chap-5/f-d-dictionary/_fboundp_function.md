**fboundp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> *name → generalized-boolean* 



**Pronunciation:** 



[ **ef ba\_undp—e** ] 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"name"}><i>name</i></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"name"}><i>name</i></ClLinks> is not a *function name*. 



**See Also:** 



<DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink> 















**Notes:** 



It is permissible to call <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> on any <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>. 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> is sometimes used to “guard” an access to the *function cell*, as in: (if (fboundp x) (symbol-function x)) 



Defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined. 