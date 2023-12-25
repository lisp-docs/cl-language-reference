**setf, psetf** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> *\{#pair\}*\* *! \{result\}*\* 



<ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks> *\{#pair\}*\* *!* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



*pair::*=*place newvalue* 



Data and Control 



 



 



**setf, psetf** 



**Arguments and Values:** 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



*newvalue*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—the *multiple values*<sub>2</sub> returned by the storing form for the last <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are no *pairs*. 



**Description:** 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> changes the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> to be *newvalue*. 



(setf place newvalue) expands into an update form that stores the result of evaluating *newvalue* into the location referred to by <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. Some <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> forms involve uses of accessors that take optional arguments. Whether those optional arguments are permitted by <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, or what their use is, is up to the <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> expander function and is not under the control of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. The documentation for any <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that accepts **&amp;optional**, **&amp;rest**, or &amp;key arguments and that claims to be usable with <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> must specify how those arguments are treated. 



If more than one *pair* is supplied, the *pairs* are processed sequentially; that is, 



(setf place-1 newvalue-1 



place-2 newvalue-2 



... 



place-N newvalue-N) 



is precisely equivalent to 



(progn (setf place-1 newvalue-1) 



(setf place-2 newvalue-2) 



... 



(setf place-N newvalue-N)) 



For <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, if more than one *pair* is supplied then the assignments of new values to places are done in parallel. More precisely, all <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> (in both the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> and *newvalue forms*) that are to be evaluated are evaluated from left to right; after all evaluations have been performed, all of the assignments are performed in an unpredictable order. 



For detailed treatment of the expansion of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> and <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, see Section 5.1.2 (Kinds of Places). 

**Examples:**
```lisp
(setq x (cons ’a ’b) y (list 1 2 3)) *!* (1 2 3) 
(setf (car x) ’x (cadr y) (car x) (cdr x) y) *!* (1 X 3) 
x *!* (X 1 X 3) 
y *!* (1 X 3) 
(setq x (cons ’a ’b) y (list 1 2 3)) *!* (1 2 3) 
(psetf (car x) ’x (cadr y) (car x) (cdr x) y) *!* NIL 
x *!* (X 1 A 3) 

y *!* (1 A 3) 
```
**Aected By:** 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>, **\*macroexpand-hook\*** 



**See Also:** 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>, <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks>, <ClLinks styled={true} term={"rotatef"}><b>rotatef</b></ClLinks>, <ClLinks styled={true} term={"shiftf"}><b>shiftf</b></ClLinks>, Section 5.1 (Generalized Reference) 



