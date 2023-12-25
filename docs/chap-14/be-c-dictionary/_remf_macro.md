**remf** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks> *place indicator → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



<ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks> removes from the *property list* stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks><sub>1</sub> with a *property indicator identical* to <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>. If there are multiple *properties*<sub>1</sub> with the <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> key, <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks> only removes the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if no such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> was found, or <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks> is permitted to either <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> or to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> any part, <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> or <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, of the *list structure* held by that <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



For information about the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



**Examples:**
```lisp
(setq x (cons () ())) → (NIL) 
(setf (getf (car x) ’prop1) ’val1) → VAL1 
(remf (car x) ’prop1) → true 
(remf (car x) ’prop1) → false 
```
**Side Effects:** 



The property list stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is modified. 



**See Also:** 



<ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks>, <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> 



