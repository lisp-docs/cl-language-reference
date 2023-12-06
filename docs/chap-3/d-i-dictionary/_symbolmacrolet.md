**symbol-macrolet** *Special Operator* 



**Syntax:** 



**symbol-macrolet** (*\{*(*symbol expansion*)*\}*\*) *\{declaration\}*\* *\{form\}*\* 



*→ \{result\}*\* 



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



 



 



;;; not 



;;; (list ’foo (let ((’foo ’bar)) ’foo)) 



(symbol-macrolet ((x ’foo)) 



(list x (let ((x ’bar)) x))) 



*!* (foo bar) 



*not* 



*!* (foo foo) 



(symbol-macrolet ((x ’(foo x))) 



(list x)) 



*!* ((FOO X)) 




```
**Exceptional Situations:** 



If an attempt is made to bind a *symbol* that is defined as a *global variable*, an error of *type* **program-error** is signaled. 



If *declaration* contains a **special** declaration that names one of the *symbols* being bound by **symbol-macrolet**, an error of *type* **program-error** is signaled. 



**See Also:** 



**with-slots**, **macroexpand** 



**Notes:** 



The special form **symbol-macrolet** is the basic mechanism that is used to implement **with-slots**. 



If a **symbol-macrolet** *form* is a *top level form*, the *forms* are also processed as *top level forms*. See Section 3.2.3 (File Compilation). 



*⇤***macroexpand-hook***⇤ Variable* 



**Value Type:** 



a *designator* for a *function* of three *arguments*: a *macro function*, a *macro form*, and an *environment object*. 



**Initial Value:** 



a *designator* for a function that is equivalent to the *function* **funcall**, but that might have additional *implementation-dependent* side-e↵ects. 



**Description:** 



Used as the expansion interface hook by **macroexpand-1** to control the *macro expansion* process. When a *macro form* is to be expanded, this *function* is called with three arguments: the *macro function*, the *macro form*, and the *environment* in which the *macro form* is to be expanded. The *environment object* has *dynamic extent*; the consequences are undefined if the *environment object* is referred to outside the *dynamic extent* of the macro expansion function. 



Evaluation and 



 



 



**Examples:**
```lisp
 



(defun hook (expander form env) 



(format t "Now expanding: &#126;S&#126;%" form) 



(funcall expander form env)) *!* HOOK 



(defmacro machook (x y) ‘(/ (+ ,x ,y) 2)) *!* MACHOOK 



(macroexpand ’(machook 1 2)) *!* (/ (+ 1 2) 2), *true* 



(let ((\*macroexpand-hook\* #’hook)) (macroexpand ’(machook 1 2))) 



▷ Now expanding (MACHOOK 1 2) 



*!* (/ (+ 1 2) 2), *true* 




```
**See Also:** 



**macroexpand**, **macroexpand-1**, **funcall**, Section 3.1 (Evaluation) 



**Notes:** 



The net e↵ect of the chosen initial value is to just invoke the *macro function*, giving it the *macro form* and *environment* as its two arguments. 



Users or user programs can *assign* this *variable* to customize or trace the *macro expansion* mechanism. Note, however, that this *variable* is a global resource, potentially shared by multiple *programs*; as such, if any two *programs* depend for their correctness on the setting of this *variable*, those *programs* may not be able to run in the same *Lisp image*. For this reason, it is frequently best to confine its uses to debugging situations. 



Users who put their own function into **\*macroexpand-hook\*** should consider saving the previous value of the hook, and calling that value from their own. 



