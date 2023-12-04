**symbol-macrolet** *Special Operator* 



**Syntax:** 



**symbol-macrolet** (*\&#123;*(*symbol expansion*)*\&#125;*\*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* 



*→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*expansion*—a *form*. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



**symbol-macrolet** provides a mechanism for affecting the *macro expansion* environment for *symbols*. 



**symbol-macrolet** lexically establishes expansion functions for each of the *symbol macros* named by *symbols*. The only guaranteed property of an expansion *function* for a *symbol macro* is that when it is applied to the *form* and the *environment* it returns the correct expansion. (In particular, it is *implementation-dependent* whether the expansion is conceptually stored in the expansion function, the *environment*, or both.) 



Each reference to *symbol* as a variable within the lexical *scope* of **symbol-macrolet** is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal *macros*. 



Exactly the same *declarations* are allowed as for **let** with one exception: **symbol-macrolet** signals an error if a **special** declaration names one of the *symbols* being defined by **symbol-macrolet**. 



When the *forms* of the **symbol-macrolet** form are expanded, any use of **setq** to set the value of one of the specified variables is treated as if it were a **setf**. **psetq** of a *symbol* defined as a symbol macro is treated as if it were a **psetf**, and **multiple-value-setq** is treated as if it were a **setf** of **values**. 



The use of **symbol-macrolet** can be shadowed by **let**. In other words, **symbol-macrolet** only substitutes for occurrences of *symbol* that would be in the *scope* of a lexical binding of *symbol* surrounding the *forms*. 



**Examples:**
```lisp
 



;;; The following is equivalent to 



;;; (list ’foo (let ((x ’bar)) x)), 


```
