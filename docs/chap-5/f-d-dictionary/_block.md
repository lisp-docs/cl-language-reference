**block** *Special Operator* 



**Syntax:** 



**block** *name form*\* *→ \&#123;result\&#125;*\* 



Data and Control 











**Arguments and Values:** 



*name*—a *symbol*. 



*form*—a *form*. 



*results*—the *values* of the *forms* if a *normal return* occurs, or else, if an *explicit return* occurs, the *values* that were transferred. 



**Description:** 



**block** *establishes* a *block* named *name* and then evaluates *forms* as an *implicit progn*. 



The *special operators* **block** and **return-from** work together to provide a structured, lexical, non-local exit facility. At any point lexically contained within *forms*, **return-from** can be used with the given *name* to return control and values from the **block** *form*, except when an intervening *block* with the same name has been *established*, in which case the outer *block* is shadowed by the inner one. 



The *block* named *name* has *lexical scope* and *dynamic extent*. 



Once established, a *block* may only be exited once, whether by *normal return* or *explicit return*. **Examples:**
```lisp
 



(block empty) *→* NIL 



(block whocares (values 1 2) (values 3 4)) *→* 3, 4 



(let ((x 1)) 



(block stop (setq x 2) (return-from stop) (setq x 3)) 



x) *→* 2 



(block early (return-from early (values 1 2)) (values 3 4)) *→* 1, 2 



(block outer (block inner (return-from outer 1)) 2) *→* 1 



(block twin (block twin (return-from twin 1)) 2) *→* 2 



;; Contrast behavior of this example with corresponding example of CATCH. 



(block b 



(flet ((b1 () (return-from b 1))) 



(block b (b1) (print ’unreachable)) 



2)) *→* 1 




```
**See Also:** 



**return**, **return-from**, Section 3.1 (Evaluation) 



**Notes:** 















**catch** 



