**fboundp** *Function* 



**Syntax:** 



**fboundp** *name → generalized-boolean* 



**Pronunciation:** 



[ **ef ba\_undp—e** ] 



**Arguments and Values:** 



*name*—a *function name*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *name* is *fbound*; otherwise, returns *false*. 



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



Should signal an error of *type* **type-error** if *name* is not a *function name*. 



**See Also:** 



**symbol-function**, **fmakunbound**, **fdefinition** 















**Notes:** 



It is permissible to call **symbol-function** on any *symbol* that is *fbound*. 



**fboundp** is sometimes used to “guard” an access to the *function cell*, as in: (if (fboundp x) (symbol-function x)) 



Defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined. 