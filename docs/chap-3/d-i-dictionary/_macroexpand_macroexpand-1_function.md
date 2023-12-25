**macroexpand, macroexpand-1** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> &amp;optional *env → expansion, expanded-p* 



<DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> &amp;optional *env → expansion, expanded-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*env*—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*expansion*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*expanded-p*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> and <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> expand <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *macro form*, then <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> expands the *macro form* call once. 



<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> repeatedly expands <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> until it is no longer a *macro form*. In effect, <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> calls <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> repeatedly until the *secondary value* it returns is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *macro form*, then the *expansion* is a *macro expansion* and *expanded-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Otherwise, the *expansion* is the given <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and *expanded-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



Macro expansion is carried out as follows. Once <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> has determined that the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *macro form*, it obtains an appropriate expansion <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *symbol macro*. The value of **\*macroexpand-hook\*** is coerced to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and then called as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of three arguments: the expansion <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and the *env*. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> returned from this call is taken to be the expansion of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



In addition to <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definitions in the global environment, any local macro definitions established within *env* by <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> or <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> are considered. If only <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> are considered. <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> definitions are shadowed by local <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definitions. 



**Examples:**
```lisp

(defmacro alpha (x y) ‘(beta ,x ,y)) *→* ALPHA 
(defmacro beta (x y) ‘(gamma ,x ,y)) *→* BETA 
(defmacro delta (x y) ‘(gamma ,x ,y)) *→* EPSILON 
(defmacro expand (form &environment env) 
  (multiple-value-bind (expansion expanded-p) 
      (macroexpand form env) 
    ‘(values ’,expansion ’,expanded-p))) *→* EXPAND  

**macroexpand, macroexpand-1** 
(defmacro expand-1 (form &environment env) 
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



<DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



**See Also:** 



**\*macroexpand-hook\***, <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Neither <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> nor <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink> makes any explicit attempt to expand *macro forms* that are either <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the *expansion*. Such expansion might occur implicitly, however, due to the semantics or implementation of the *macro function*. 



