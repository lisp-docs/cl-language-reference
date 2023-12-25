**get-setf-expansion** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> &amp;optional <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> 



*! vars, vals, store-vars, writer-form, reader-form* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. 



*vars, vals, store-vars, writer-form, reader-form*—a *setf expansion*. 



**Description:** 



Determines five values constituting the *setf expansion* for <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>; see Section 5.1.1.2 (Setf Expansions). 







 



 



If <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the environment is the *null lexical environment<GlossaryTerm styled={true} term={"t"}><i>. </i></GlossaryTerm>*Examples:**
```lisp

(get-setf-expansion ’x) 
*!* NIL, NIL, (#:G0001), (SETQ X #:G0001), X 
;;; This macro is like POP 
(defmacro xpop (place &environment env) 
  (multiple-value-bind (dummies vals new setter getter) 
      (get-setf-expansion place env) 
    ‘(let\* (,@(mapcar #’list dummies vals) (,(car new) ,getter)) 
	    (if (cdr new) (error "Can’t expand this.")) 
	    (prog1 (car ,(car new)) 
	      (setq ,(car new) (cdr ,(car new))) 
	      ,setter)))) 
(defsetf frob (x) (value) 
  ‘(setf (car ,x) ,value)) *!* FROB 
;;; The following is an error; an error might be signaled at macro expansion time (flet ((frob (x) (cdr x))) ;Invalid 
(xpop (frob z))) 

```
**See Also:** 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> 



**Notes:** 



Any *compound form* is a valid <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, since any *compound form* whose *operator f* has no *setf expander* are expanded into a call to (setf *f* ). 



