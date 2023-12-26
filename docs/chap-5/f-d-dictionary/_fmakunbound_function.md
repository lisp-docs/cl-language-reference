**fmakunbound** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"fmakunbound"}><b>fmakunbound</b></ClLinks> *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a *function name*. 



**Description:** 



Removes the <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition, if any, of <ClLinks  term={"name"}><i>name</i></ClLinks> in the *global environment*. 

**Examples:**
```lisp
(defun add-some (x) (+ x 19)) → ADD-SOME 
(fboundp ’add-some) → true 
(flet ((add-some (x) (+ x 37))) 
  (fmakunbound ’add-some) 
  (add-some 1)) → 38 
(fboundp ’add-some) → false 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"name"}><i>name</i></ClLinks> is not a *function name*. 



The consequences are undefined if <ClLinks  term={"name"}><i>name</i></ClLinks> is a *special operator* . 



**See Also:** 



<ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks>, <ClLinks  term={"makunbound"}><b>makunbound</b></ClLinks> 



Data and Control 











<DictionaryLink styled={true} term={"flet, labels, macrolet"}><b>flet, labels, macrolet</b></DictionaryLink> 



