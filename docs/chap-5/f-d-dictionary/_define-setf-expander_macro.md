**define-setf-expander** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> *access-fn lambda-list* 



[[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



*! access-fn* 



**Arguments and Values:** 



*access-fn*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



*lambda-list* – *macro lambda list*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



**Description:** 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> specifies the means by which <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> updates a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> that is referenced by *access-fn*. 



When <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> is given a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> that is specified in terms of *access-fn* and a new value for the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, it is expanded into a form that performs the appropriate update. 



The *lambda-list* supports destructuring. See Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached to *access-fn* as a *documentation string* of kind <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> 



<ClLinks styled={true} term={"form"}><i>Forms</i></ClLinks> constitute the body of the *setf expander* definition and must compute the *setf expansion* for a call on <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> that references the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> by means of the given *access-fn*. The *setf expander* function is defined in the same *lexical environment* in which the <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears. While <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are being executed, the variables in *lambda-list* are bound to parts of the *place form*. The 



body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> (but not the *lambda-list*) in a <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are implicitly enclosed in a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> whose name is *access-fn*. 



The evaluation of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> must result in the five values described in Section 5.1.1.2 (Setf Expansions). 



If a <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must make the *setf expander* available so that it may be used to expand calls to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> later on in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. <ClLinks styled={true} term={"programmer"}><i>Programmers</i></ClLinks> must ensure that the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> can be evaluated at compile time if the *access-fn* is used in a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> later in the same <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. The <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must make these *setf expanders* available to compile-time calls to <ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks> when its <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> argument is a value received as the *environment parameter* of a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



**Examples:**
```lisp
(defun lastguy (x) (car (last x))) *!* LASTGUY 
(define-setf-expander lastguy (x &environment env) 
  "Set the last element in a list to the given value." 
  (multiple-value-bind (dummies vals newval setter getter) 
      (get-setf-expansion x env) 
    (let ((store (gensym))) 
      (values dummies 
	      vals 
	      ‘(,store) 
	      ‘(progn (rplaca (last ,getter) ,store) ,store) 
	      ‘(lastguy ,getter))))) *!* LASTGUY 
(setq a (list ’a ’b ’c ’d) 
      b (list ’x) 
      c (list 1 2 3 (list 4 5 6))) *!* (1 2 3 (4 5 6)) 
(setf (lastguy a) 3) *!* 3 
(setf (lastguy b) 7) *!* 7 
(setf (lastguy (lastguy c)) ’lastguy-symbol) *!* LASTGUY-SYMBOL 
a *!* (A B C 3) 
b *!* (7) 
c *!* (1 2 3 (4 5 LASTGUY-SYMBOL)) 
;;; Setf expander for the form (LDB bytespec int). 
;;; Recall that the int form must itself be suitable for SETF. 
(define-setf-expander ldb (bytespec int &environment env) 
  (multiple-value-bind (temps vals stores 
			      store-form access-form) 
      (get-setf-expansion int env);Get setf expansion for int. 
    Data and Control 
    
    
    (let ((btemp (gensym)) ;Temp var for byte specifier. 
	  (store (gensym)) ;Temp var for byte to store. 
	  (stemp (first stores))) ;Temp var for int to store. 
      (if (cdr stores) (error "Can’t expand this.")) 
;;; Return the setf expansion for LDB as five values. 
      (values (cons btemp temps) ;Temporary variables. 
	      (cons bytespec vals) ;Value forms. 
	      (list store) ;Store variables. 
	      ‘(let ((,stemp (dpb ,store ,btemp ,access-form))) 
		 ,store-form 
		 ,store) ;Storing form. 
	      ‘(ldb ,btemp ,access-form) ;Accessing form. 
	      )))) 
```
**See Also:** 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>, **documentation**, <ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> di↵ers from the long form of <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks> in that while the body is being executed the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> in *lambda-list* are bound to parts of the *place form*, not to temporary variables that will be bound to the values of such parts. In addition, <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> does not have <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>’s 



restriction that *access-fn* must be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or a function-like <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>; an arbitrary <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> destructuring pattern is permitted in *lambda-list*. 



