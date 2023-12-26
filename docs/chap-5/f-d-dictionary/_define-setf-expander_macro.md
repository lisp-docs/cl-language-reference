**define-setf-expander** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> *access-fn lambda-list* 



[[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*! access-fn* 



**Arguments and Values:** 



*access-fn*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



*lambda-list* – <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> specifies the means by which <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> updates a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> that is referenced by *access-fn*. 



When <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is given a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> that is specified in terms of *access-fn* and a new value for the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, it is expanded into a form that performs the appropriate update. 



The *lambda-list* supports destructuring. See Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached to *access-fn* as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> 



<GlossaryTerm  term={"form"}><i>Forms</i></GlossaryTerm> constitute the body of the <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> definition and must compute the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> for a call on <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> that references the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> by means of the given *access-fn*. The <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> function is defined in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears. While <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are being executed, the variables in *lambda-list* are bound to parts of the *place form*. The 



body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> (but not the *lambda-list*) in a <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are implicitly enclosed in a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> whose name is *access-fn*. 



The evaluation of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> must result in the five values described in Section 5.1.1.2 (Setf Expansions). 



If a <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make the <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> available so that it may be used to expand calls to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> later on in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. <GlossaryTerm  term={"programmer"}><i>Programmers</i></GlossaryTerm> must ensure that the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> can be evaluated at compile time if the *access-fn* is used in a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> later in the same <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make these <GlossaryTerm styled={true} term={"setf expander"}><i>setf expanders</i></GlossaryTerm> available to compile-time calls to <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> when its <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> argument is a value received as the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> of a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



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



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, **documentation**, <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> di↵ers from the long form of <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> in that while the body is being executed the <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> in *lambda-list* are bound to parts of the *place form*, not to temporary variables that will be bound to the values of such parts. In addition, <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> does not have <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>’s 



restriction that *access-fn* must be a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or a function-like <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>; an arbitrary <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> destructuring pattern is permitted in *lambda-list*. 



