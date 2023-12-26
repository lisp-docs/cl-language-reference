**get-setf-expansion** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> <ClLinks  term={"place"}><i>place</i></ClLinks> &amp;optional <ClLinks  term={"environment"}><i>environment</i></ClLinks> 



*! vars, vals, store-vars, writer-form, reader-form* 



**Arguments and Values:** 



<ClLinks  term={"place"}><i>place</i></ClLinks>—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



*vars, vals, store-vars, writer-form, reader-form*—a <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm>. 



**Description:** 



Determines five values constituting the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> for <ClLinks  term={"place"}><i>place</i></ClLinks> in <ClLinks  term={"environment"}><i>environment</i></ClLinks>; see Section 5.1.1.2 (Setf Expansions). 







 



 



If <ClLinks  term={"environment"}><i>environment</i></ClLinks> is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the environment is the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>. 

**Examples:**
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



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> 



**Notes:** 



Any *compound form* is a valid <ClLinks  term={"place"}><i>place</i></ClLinks>, since any *compound form* whose *operator f* has no *setf expander* are expanded into a call to (setf *f* ). 



