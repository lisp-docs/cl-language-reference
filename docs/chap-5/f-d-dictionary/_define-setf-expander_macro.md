**define-setf-expander** *Macro* 



**Syntax:** 



**define-setf-expander** *access-fn lambda-list* 



[[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* 



*! access-fn* 



**Arguments and Values:** 



*access-fn*—a *symbol* that *names* a *function* or *macro*. 



*lambda-list* – *macro lambda list*. 



*declaration*—a **declare** *expression*; not evaluated. 



*documentation*—a *string*; not evaluated. 



*forms*—an *implicit progn*. 



**Description:** 



**define-setf-expander** specifies the means by which **setf** updates a *place* that is referenced by *access-fn*. 



When **setf** is given a *place* that is specified in terms of *access-fn* and a new value for the *place*, it is expanded into a form that performs the appropriate update. 



The *lambda-list* supports destructuring. See Section 3.4.4 (Macro Lambda Lists). 



*Documentation* is attached to *access-fn* as a *documentation string* of kind **setf**. 







 



 



**define-setf-expander** 



*Forms* constitute the body of the *setf expander* definition and must compute the *setf expansion* for a call on **setf** that references the *place* by means of the given *access-fn*. The *setf expander* function is defined in the same *lexical environment* in which the **define-setf-expander** *form* appears. While *forms* are being executed, the variables in *lambda-list* are bound to parts of the *place form*. The 



body *forms* (but not the *lambda-list*) in a **define-setf-expander** *form* are implicitly enclosed in a *block* whose name is *access-fn*. 



The evaluation of *forms* must result in the five values described in Section 5.1.1.2 (Setf Expansions). 



If a **define-setf-expander** *form* appears as a *top level form*, the *compiler* must make the *setf expander* available so that it may be used to expand calls to **setf** later on in the *file*. *Programmers* must ensure that the *forms* can be evaluated at compile time if the *access-fn* is used in a *place* later in the same *file*. The *compiler* must make these *setf expanders* available to compile-time calls to **get-setf-expansion** when its *environment* argument is a value received as the *environment parameter* of a *macro*. 



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



**setf**, **defsetf**, **documentation**, **get-setf-expansion**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



**define-setf-expander** di↵ers from the long form of **defsetf** in that while the body is being executed the *variables* in *lambda-list* are bound to parts of the *place form*, not to temporary variables that will be bound to the values of such parts. In addition, **define-setf-expander** does not have **defsetf**’s 



restriction that *access-fn* must be a *function* or a function-like *macro*; an arbitrary **defmacro** destructuring pattern is permitted in *lambda-list*. 



