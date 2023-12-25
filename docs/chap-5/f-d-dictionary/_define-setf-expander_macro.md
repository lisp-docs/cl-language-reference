**define-setf-expander** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> *access-fn lambda-list* 



[[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*! access-fn* 



**Arguments and Values:** 



*access-fn*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



*lambda-list* – *macro lambda list*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



**Description:** 



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> specifies the means by which <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> updates a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> that is referenced by *access-fn*. 



When <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> that is specified in terms of *access-fn* and a new value for the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, it is expanded into a form that performs the appropriate update. 



The *lambda-list* supports destructuring. See Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached to *access-fn* as a *documentation string* of kind <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. 







 



 



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"form"}><i>Forms</i></GlossaryTerm> constitute the body of the *setf expander* definition and must compute the *setf expansion* for a call on <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> that references the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> by means of the given *access-fn*. The *setf expander* function is defined in the same *lexical environment* in which the <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears. While <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are being executed, the variables in *lambda-list* are bound to parts of the *place form*. The 



body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (but not the *lambda-list*) in a <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are implicitly enclosed in a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> whose name is *access-fn*. 



The evaluation of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> must result in the five values described in Section 5.1.1.2 (Setf Expansions). 



If a <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make the *setf expander* available so that it may be used to expand calls to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> later on in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"programmer"}><i>Programmers</i></GlossaryTerm> must ensure that the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> can be evaluated at compile time if the *access-fn* is used in a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> later in the same <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make these *setf expanders* available to compile-time calls to <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> when its <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> argument is a value received as the *environment parameter* of a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



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



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>, **documentation**, <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> di↵ers from the long form of <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> in that while the body is being executed the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> in *lambda-list* are bound to parts of the *place form*, not to temporary variables that will be bound to the values of such parts. In addition, <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> does not have <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>’s 



restriction that *access-fn* must be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or a function-like <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>; an arbitrary <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> destructuring pattern is permitted in *lambda-list*. 



