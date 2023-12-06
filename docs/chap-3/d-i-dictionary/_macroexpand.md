**macroexpand, macroexpand-1** *Function* 



**Syntax:** 



**macroexpand** *form* &amp;optional *env → expansion, expanded-p* 



**macroexpand-1** *form* &amp;optional *env → expansion, expanded-p* 



**Arguments and Values:** 



*form*—a *form*. 



*env*—an *environment object*. The default is **nil**. 



*expansion*—a *form*. 



*expanded-p*—a *generalized boolean*. 



**Description:** 



**macroexpand** and **macroexpand-1** expand *macros*. 



If *form* is a *macro form*, then **macroexpand-1** expands the *macro form* call once. 



**macroexpand** repeatedly expands *form* until it is no longer a *macro form*. In effect, **macroexpand** calls **macroexpand-1** repeatedly until the *secondary value* it returns is **nil**. 



If *form* is a *macro form*, then the *expansion* is a *macro expansion* and *expanded-p* is *true*. Otherwise, the *expansion* is the given *form* and *expanded-p* is *false*. 



Macro expansion is carried out as follows. Once **macroexpand-1** has determined that the *form* is a *macro form*, it obtains an appropriate expansion *function* for the *macro* or *symbol macro*. The value of **\*macroexpand-hook\*** is coerced to a *function* and then called as a *function* of three arguments: the expansion *function*, the *form*, and the *env*. The *value* returned from this call is taken to be the expansion of the *form*. 



In addition to *macro* definitions in the global environment, any local macro definitions established within *env* by **macrolet** or **symbol-macrolet** are considered. If only *form* is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by **defmacro** are considered. *Macro* definitions are shadowed by local *function* definitions. 



**Examples:**
```lisp
 

(defmacro alpha (x y) ‘(beta ,x ,y)) *→* ALPHA 

(defmacro beta (x y) ‘(gamma ,x ,y)) *→* BETA 

(defmacro delta (x y) ‘(gamma ,x ,y)) *→* EPSILON 

(defmacro expand (form &amp;environment env) 

(multiple-value-bind (expansion expanded-p) 

(macroexpand form env) 

‘(values ’,expansion ’,expanded-p))) *→* EXPAND  



**macroexpand, macroexpand-1** 

(defmacro expand-1 (form &amp;environment env) 

(multiple-value-bind (expansion expanded-p) 

(macroexpand-1 form env) 

‘(values ’,expansion ’,expanded-p))) *→* EXPAND-1 

;; Simple examples involving just the global environment 

(macroexpand-1 ’(alpha a b)) *→* (BETA A B), *true* 

(expand-1 (alpha a b)) *→* (BETA A B), *true* 

(macroexpand ’(alpha a b)) *→* (GAMMA A B), *true* 

(expand (alpha a b)) *→* (GAMMA A B), *true* 

(macroexpand-1 ’not-a-macro) *→* NOT-A-MACRO, *false* 

(expand-1 not-a-macro) *→* NOT-A-MACRO, *false* 

(macroexpand ’(not-a-macro a b)) *→* (NOT-A-MACRO A B), *false* 

(expand (not-a-macro a b)) *→* (NOT-A-MACRO A B), *false* 

;; Examples involving lexical environments 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(macroexpand-1 ’(alpha a b))) *→* (BETA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(expand-1 (alpha a b))) *→* (DELTA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(macroexpand ’(alpha a b))) *→* (GAMMA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(expand (alpha a b))) *→* (GAMMA A B), *true* 

(macrolet ((beta (x y) ‘(epsilon ,x ,y))) 

(expand (alpha a b))) *→* (EPSILON A B), *true* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(expand a))) *→* (FIRST X), *true* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(macroexpand ’a))) *→* A, *false* 

(symbol-macrolet ((b (alpha x y))) 

(expand-1 b)) *→* (ALPHA X Y), *true* 

(symbol-macrolet ((b (alpha x y))) 

(expand b)) *→* (GAMMA X Y), *true* 

(symbol-macrolet ((b (alpha x y)) 

(a b)) 

(expand-1 a)) *→* B, *true* 

(symbol-macrolet ((b (alpha x y)) 

(a b)) 

(expand a)) *→* (GAMMA X Y), *true*  



;; Examples of shadowing behavior 

(flet ((beta (x y) (+ x y))) 

(expand (alpha a b))) *→* (BETA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(flet ((alpha (x y) (+ x y))) 

(expand (alpha a b)))) *→* (ALPHA A B), *false* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(let ((a x)) 

(expand a)))) *→* A, *false* 


```
**Affected By:** 



**defmacro**, **setf** of **macro-function**, **macrolet**, **symbol-macrolet** 



**See Also:** 



**\*macroexpand-hook\***, **defmacro**, **setf** of **macro-function**, **macrolet**, **symbol-macrolet**, Section 3.1 (Evaluation) 



**Notes:** 



Neither **macroexpand** nor **macroexpand-1** makes any explicit attempt to expand *macro forms* that are either *subforms* of the *form* or *subforms* of the *expansion*. Such expansion might occur implicitly, however, due to the semantics or implementation of the *macro function*. 



