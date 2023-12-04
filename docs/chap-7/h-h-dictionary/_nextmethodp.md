**next-method-p** *Local Function* 



**Syntax:** 



**next-method-p** *hno argumentsi → generalized-boolean* 



**Arguments and Values:** 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



The locally defined function **next-method-p** can be used within the body *forms* (but not the *lambda list*) defined by a *method-defining form* to determine whether a next *method* exists. 



The *function* **next-method-p** has *lexical scope* and *indefinite extent*. 



Whether or not **next-method-p** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **next-method-p** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **next-method-p** outside of a *method-defining form* are undefined. 



**See Also:** 



**call-next-method**, **defmethod**, **call-method** 







 



 



