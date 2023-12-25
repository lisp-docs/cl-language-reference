**fmakunbound** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"fmakunbound"}><b>fmakunbound</b></ClLinks> *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *function name*. 



**Description:** 



Removes the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definition, if any, of <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> in the *global environment*. 

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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not a *function name*. 



The consequences are undefined if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *special operator* . 



**See Also:** 



<ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks>, <ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks> 



Data and Control 











**flet, labels, macrolet** 



