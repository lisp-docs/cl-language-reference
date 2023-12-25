**setf, psetf** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> *\{#pair\}*\* *! \{result\}*\* 



<DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink> *\{#pair\}*\* *!* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



*pair::*=*place newvalue* 



Data and Control 



 



 



**setf, psetf** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



*newvalue*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the *multiple values*<sub>2</sub> returned by the storing form for the last <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no *pairs*. 



**Description:** 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> changes the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> to be *newvalue*. 



(setf place newvalue) expands into an update form that stores the result of evaluating *newvalue* into the location referred to by <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. Some <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> forms involve uses of accessors that take optional arguments. Whether those optional arguments are permitted by <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, or what their use is, is up to the <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> expander function and is not under the control of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. The documentation for any <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that accepts **&amp;optional**, **&amp;rest**, or &amp;key arguments and that claims to be usable with <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> must specify how those arguments are treated. 



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



For <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, if more than one *pair* is supplied then the assignments of new values to places are done in parallel. More precisely, all <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> (in both the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and *newvalue forms*) that are to be evaluated are evaluated from left to right; after all evaluations have been performed, all of the assignments are performed in an unpredictable order. 



For detailed treatment of the expansion of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> and <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, see Section 5.1.2 (Kinds of Places). **Examples:**
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



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>, **\*macroexpand-hook\*** 



**See Also:** 



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, <DictionaryLink styled={true} term={"rotatef"}><b>rotatef</b></DictionaryLink>, <DictionaryLink styled={true} term={"shiftf"}><b>shiftf</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



