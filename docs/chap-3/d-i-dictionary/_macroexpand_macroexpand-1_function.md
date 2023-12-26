**macroexpand, macroexpand-1** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> &amp;optional *env → expansion, expanded-p* 



<ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> &amp;optional *env → expansion, expanded-p* 



**Arguments and Values:** 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*env*—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*expansion*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*expanded-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> and <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> expand <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



If <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, then <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> expands the <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> call once. 



<ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> repeatedly expands <ClLinks  term={"form"}><i>form</i></ClLinks> until it is no longer a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. In effect, <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> calls <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> repeatedly until the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm> it returns is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, then the *expansion* is a <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> and *expanded-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>. Otherwise, the *expansion* is the given <ClLinks  term={"form"}><i>form</i></ClLinks> and *expanded-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



Macro expansion is carried out as follows. Once <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> has determined that the <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, it obtains an appropriate expansion <ClLinks  term={"function"}><i>function</i></ClLinks> for the <ClLinks  term={"macro"}><i>macro</i></ClLinks> or <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>. The value of **\*macroexpand-hook\*** is coerced to a <ClLinks  term={"function"}><i>function</i></ClLinks> and then called as a <ClLinks  term={"function"}><i>function</i></ClLinks> of three arguments: the expansion <ClLinks  term={"function"}><i>function</i></ClLinks>, the <ClLinks  term={"form"}><i>form</i></ClLinks>, and the *env*. The <ClLinks  term={"value"}><i>value</i></ClLinks> returned from this call is taken to be the expansion of the <ClLinks  term={"form"}><i>form</i></ClLinks>. 



In addition to <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions in the global environment, any local macro definitions established within *env* by <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> or <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> are considered. If only <ClLinks  term={"form"}><i>form</i></ClLinks> is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> are considered. <ClLinks  term={"macro"}><i>Macro</i></ClLinks> definitions are shadowed by local <ClLinks  term={"function"}><i>function</i></ClLinks> definitions. 



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



<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



**See Also:** 



**\*macroexpand-hook\***, <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks>, <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



Neither <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks> nor <ClLinks  term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks> makes any explicit attempt to expand <GlossaryTerm styled={true} term={"macro form"}><i>macro forms</i></GlossaryTerm> that are either <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> or <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the *expansion*. Such expansion might occur implicitly, however, due to the semantics or implementation of the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



