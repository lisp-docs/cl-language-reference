**define-setf-expander** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> *access-fn lambda-list* 



[[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



*! access-fn* 



**Arguments and Values:** 



*access-fn*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that <ClLinks  term={"name"}><i>names</i></ClLinks> a <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



*lambda-list* – <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> specifies the means by which <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> updates a <ClLinks  term={"place"}><i>place</i></ClLinks> that is referenced by *access-fn*. 



When <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is given a <ClLinks  term={"place"}><i>place</i></ClLinks> that is specified in terms of *access-fn* and a new value for the <ClLinks  term={"place"}><i>place</i></ClLinks>, it is expanded into a form that performs the appropriate update. 



The *lambda-list* supports destructuring. See Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached to *access-fn* as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> 



<ClLinks  term={"form"}><i>Forms</i></ClLinks> constitute the body of the <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> definition and must compute the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> for a call on <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> that references the <ClLinks  term={"place"}><i>place</i></ClLinks> by means of the given *access-fn*. The <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> function is defined in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> appears. While <ClLinks  term={"form"}><i>forms</i></ClLinks> are being executed, the variables in *lambda-list* are bound to parts of the *place form*. The 



body <ClLinks  term={"form"}><i>forms</i></ClLinks> (but not the *lambda-list*) in a <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> are implicitly enclosed in a <ClLinks  term={"block"}><i>block</i></ClLinks> whose name is *access-fn*. 



The evaluation of <ClLinks  term={"form"}><i>forms</i></ClLinks> must result in the five values described in Section 5.1.1.2 (Setf Expansions). 



If a <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make the <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> available so that it may be used to expand calls to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> later on in the <ClLinks  term={"file"}><i>file</i></ClLinks>. <ClLinks  term={"programmer"}><i>Programmers</i></ClLinks> must ensure that the <ClLinks  term={"form"}><i>forms</i></ClLinks> can be evaluated at compile time if the *access-fn* is used in a <ClLinks  term={"place"}><i>place</i></ClLinks> later in the same <ClLinks  term={"file"}><i>file</i></ClLinks>. The <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make these <GlossaryTerm styled={true} term={"setf expander"}><i>setf expanders</i></GlossaryTerm> available to compile-time calls to <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> when its <ClLinks  term={"environment"}><i>environment</i></ClLinks> argument is a value received as the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> of a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



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



<DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> di↵ers from the long form of <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> in that while the body is being executed the <ClLinks  term={"variable"}><i>variables</i></ClLinks> in *lambda-list* are bound to parts of the *place form*, not to temporary variables that will be bound to the values of such parts. In addition, <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> does not have <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>’s 



restriction that *access-fn* must be a <ClLinks  term={"function"}><i>function</i></ClLinks> or a function-like <ClLinks  term={"macro"}><i>macro</i></ClLinks>; an arbitrary <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> destructuring pattern is permitted in *lambda-list*. 



