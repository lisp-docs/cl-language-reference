**get-setf-expansion** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> &amp;optional <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> 



*! vars, vals, store-vars, writer-form, reader-form* 



**Arguments and Values:** 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



*vars, vals, store-vars, writer-form, reader-form*—a *setf expansion*. 



**Description:** 



Determines five values constituting the *setf expansion* for <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> in <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>; see Section 5.1.1.2 (Setf Expansions). 







 



 



If <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the environment is the *null lexical environment*. 

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



<ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>, <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> 



**Notes:** 



Any *compound form* is a valid <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, since any *compound form* whose *operator f* has no *setf expander* are expanded into a call to (setf *f* ). 



