**progn** *Special Operator* 



**Syntax:** 



**progn** *\{form\}*\* *! \{result\}*\* 



**Arguments and Values:** 



*forms*—an *implicit progn*. 



*results*—the *values* of the *forms*. 



**Description:** 



**progn** evaluates *forms*, in the order in which they are given. 



The values of each *form* but the last are discarded. 



If **progn** appears as a *top level form*, then all *forms* within that **progn** are considered by the compiler to be *top level forms*. 



**Examples:**
```lisp

(progn) *!* NIL 
(progn 1 2 3) *!* 3 
(progn (values 1 2 3)) *!* 1, 2, 3 
(setq a 1) *!* 1 
(if a 
    (progn (setq a nil) ’here) 
    (progn (setq a t) ’there)) *!* HERE 
a *!* NIL 

```
**See Also:** 



**prog1**, **prog2**, Section 3.1 (Evaluation) 



**Notes:** 



Many places in Common Lisp involve syntax that uses *implicit progns*. That is, part of their syntax allows many *forms* to be written that are to be evaluated sequentially, discarding the results of all *forms* but the last and returning the results of the last *form*. Such places include, but are not limited to, the following: the body of a *lambda expression*; the bodies of various control and conditional *forms* (*e.g.*, **case**, **catch**, **progn**, and **when**). 



Data and Control 



 



 



**define-modify-macro** 



