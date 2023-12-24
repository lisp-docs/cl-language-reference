**macroexpand, macroexpand-1** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> &amp;optional *env → expansion, expanded-p* 



<ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> &amp;optional *env → expansion, expanded-p* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*env*—an *environment object*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*expansion*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*expanded-p*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> and <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> expand <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>. 



If <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *macro form*, then <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> expands the *macro form* call once. 



<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> repeatedly expands <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> until it is no longer a *macro form*. In effect, <ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> calls <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> repeatedly until the *secondary value* it returns is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *macro form*, then the *expansion* is a *macro expansion* and *expanded-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Otherwise, the *expansion* is the given <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and *expanded-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



Macro expansion is carried out as follows. Once <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> has determined that the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *macro form*, it obtains an appropriate expansion <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> for the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *symbol macro*. The value of **\*macroexpand-hook\*** is coerced to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and then called as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of three arguments: the expansion <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and the *env*. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> returned from this call is taken to be the expansion of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



In addition to <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definitions in the global environment, any local macro definitions established within *env* by <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> or <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> are considered. If only <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> are considered. <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> definitions are shadowed by local <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definitions. 



**Examples:**
```lisp

(defmacro alpha (x y) ‘(beta ,x ,y)) → ALPHA 
(defmacro beta (x y) ‘(gamma ,x ,y)) → BETA 
(defmacro delta (x y) ‘(gamma ,x ,y)) → EPSILON 
(defmacro expand (form &environment env) 
  (multiple-value-bind (expansion expanded-p) 
      (macroexpand form env) 
    ‘(values ’,expansion ’,expanded-p))) → EXPAND  

**macroexpand, macroexpand-1** 
(defmacro expand-1 (form &environment env) 
  (multiple-value-bind (expansion expanded-p) 
      (macroexpand-1 form env) 
    ‘(values ’,expansion ’,expanded-p))) → EXPAND-1 
;; Simple examples involving just the global environment 
(macroexpand-1 ’(alpha a b)) → (BETA A B), *true* 
(expand-1 (alpha a b)) → (BETA A B), *true* 
(macroexpand ’(alpha a b)) → (GAMMA A B), *true* 
(expand (alpha a b)) → (GAMMA A B), *true* 
(macroexpand-1 ’not-a-macro) → NOT-A-MACRO, *false* 
(expand-1 not-a-macro) → NOT-A-MACRO, *false* 
(macroexpand ’(not-a-macro a b)) → (NOT-A-MACRO A B), *false* 
(expand (not-a-macro a b)) → (NOT-A-MACRO A B), *false* 
;; Examples involving lexical environments 
(macrolet ((alpha (x y) ‘(delta ,x ,y))) 
  (macroexpand-1 ’(alpha a b))) → (BETA A B), *true* 
(macrolet ((alpha (x y) ‘(delta ,x ,y))) 
  (expand-1 (alpha a b))) → (DELTA A B), *true* 
(macrolet ((alpha (x y) ‘(delta ,x ,y))) 
  (macroexpand ’(alpha a b))) → (GAMMA A B), *true* 
(macrolet ((alpha (x y) ‘(delta ,x ,y))) 
  (expand (alpha a b))) → (GAMMA A B), *true* 
(macrolet ((beta (x y) ‘(epsilon ,x ,y))) 
  (expand (alpha a b))) → (EPSILON A B), *true* 
(let ((x (list 1 2 3))) 
  (symbol-macrolet ((a (first x))) 
    (expand a))) → (FIRST X), *true* 
(let ((x (list 1 2 3))) 
  (symbol-macrolet ((a (first x))) 
    (macroexpand ’a))) → A, *false* 
(symbol-macrolet ((b (alpha x y))) 
  (expand-1 b)) → (ALPHA X Y), *true* 
(symbol-macrolet ((b (alpha x y))) 
  (expand b)) → (GAMMA X Y), *true* 
(symbol-macrolet ((b (alpha x y)) 
		  (a b)) 
  (expand-1 a)) → B, *true* 
(symbol-macrolet ((b (alpha x y)) 
		  (a b)) 
  (expand a)) → (GAMMA X Y), *true*  

;; Examples of shadowing behavior 
(flet ((beta (x y) (+ x y))) 
  (expand (alpha a b))) → (BETA A B), *true* 
(macrolet ((alpha (x y) ‘(delta ,x ,y))) 
  (flet ((alpha (x y) (+ x y))) 
    (expand (alpha a b)))) → (ALPHA A B), *false* 
(let ((x (list 1 2 3))) 
  (symbol-macrolet ((a (first x))) 
    (let ((a x)) 
      (expand a)))) → A, *false* 

```
**Affected By:** 



<ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



**See Also:** 



**\*macroexpand-hook\***, <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



Neither <ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> nor <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> makes any explicit attempt to expand *macro forms* that are either <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the *expansion*. Such expansion might occur implicitly, however, due to the semantics or implementation of the *macro function*. 



