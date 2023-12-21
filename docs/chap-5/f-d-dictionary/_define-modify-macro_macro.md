**define-modify-macro** *Macro* 



**Syntax:** 



**define-modify-macro** *name lambda-list function* [*documentation*] *! name* 



**Arguments and Values:** 



*name*—a *symbol*. 



*lambda-list*—a *define-modify-macro lambda list* 



*function*—a *symbol*. 



*documentation*—a *string*; not evaluated. 



**Description:** 



**define-modify-macro** defines a *macro* named *name* to *read* and *write* a *place*. 



The arguments to the new *macro* are a *place*, followed by the arguments that are supplied in *lambda-list*. *Macros* defined with **define-modify-macro** correctly pass the *environment parameter* to **get-setf-expansion**. 



When the *macro* is invoked, *function* is applied to the old contents of the *place* and the *lambda-list* arguments to obtain the new value, and the *place* is updated to contain the result. 



Except for the issue of avoiding multiple evaluation (see below), the expansion of a **define-modify-macro** is equivalent to the following: 



(defmacro *name* (reference . *lambda-list*) 



*documentation* 



‘(setf ,reference 



(*function* ,reference ,*arg1* ,*arg2* ...))) 



where *arg1*, *arg2*, ..., are the parameters appearing in *lambda-list*; appropriate provision is made for a *rest parameter* . 



The *subforms* of the macro calls defined by **define-modify-macro** are evaluated as specified in Section 5.1.1.1 (Evaluation of Subforms to Places). 



*Documentation* is attached as a *documentation string* to *name* (as kind **function**) and to the *macro function*. 



If a **define-modify-macro** *form* appears as a *top level form*, the *compiler* must store the *macro* definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. 







 



 



**Examples:**
```lisp

(define-modify-macro appendf (&rest args) 
  append "Append onto list") *!* APPENDF 
(setq x ’(a b c) y x) *!* (A B C) 
(appendf x ’(d e f) ’(1 2 3)) *!* (A B C D E F 1 2 3) 
x *!* (A B C D E F 1 2 3) 
y *!* (A B C) 
(define-modify-macro new-incf (&optional (delta 1)) +) 
(define-modify-macro unionf (other-set &rest keywords) union) 

```
**Side Eects:** 



A macro definition is assigned to *name*. 



**See Also:** 



**defsetf**, **define-setf-expander**, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



