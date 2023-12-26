**setf, psetf** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> *\{#pair\}*\* *! \{result\}*\* 



<DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink> *\{#pair\}*\* *!* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



*pair::*=*place newvalue* 



Data and Control 



 



 



**setf, psetf** 



**Arguments and Values:** 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



*newvalue*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*results*—the *multiple values*<sub>2</sub> returned by the storing form for the last <ClLinks  term={"place"}><i>place</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if there are no *pairs*. 



**Description:** 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> changes the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"place"}><i>place</i></ClLinks> to be *newvalue*. 



(setf place newvalue) expands into an update form that stores the result of evaluating *newvalue* into the location referred to by <ClLinks  term={"place"}><i>place</i></ClLinks>. Some <ClLinks  term={"place"}><i>place</i></ClLinks> forms involve uses of accessors that take optional arguments. Whether those optional arguments are permitted by <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, or what their use is, is up to the <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> expander function and is not under the control of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. The documentation for any <ClLinks  term={"function"}><i>function</i></ClLinks> that accepts **&amp;optional**, **&amp;rest**, or &amp;key arguments and that claims to be usable with <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> must specify how those arguments are treated. 



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



For <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, if more than one *pair* is supplied then the assignments of new values to places are done in parallel. More precisely, all <ClLinks  term={"subform"}><i>subforms</i></ClLinks> (in both the <ClLinks  term={"place"}><i>place</i></ClLinks> and *newvalue forms*) that are to be evaluated are evaluated from left to right; after all evaluations have been performed, all of the assignments are performed in an unpredictable order. 



For detailed treatment of the expansion of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> and <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, see Section 5.1.2 (Kinds of Places). 

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



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, **\*macroexpand-hook\*** 



**See Also:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, <DictionaryLink  term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink  term={"shiftf"}><b>shiftf</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



