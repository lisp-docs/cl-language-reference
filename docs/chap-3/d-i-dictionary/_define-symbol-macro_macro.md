**define-symbol-macro** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"define-symbol-macro"}><b>define-symbol-macro</b></ClLinks> *symbol expansion* 



→ symbol 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*expansion*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Provides a mechanism for globally affecting the *macro expansion* of the indicated <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Globally establishes an expansion function for the *symbol macro* named by <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. The only guaranteed property of an expansion <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> for a *symbol macro* is that when it is applied to the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, or both.)  







Each global reference to <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (*i.e.*, not *shadowed* <sub>2</sub> by a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or *symbol macro* named by the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a *symbol macro* is subject to further *macro expansion* in the same *lexical environment* as the *symbol macro* reference, exactly analogous to normal <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>. 



The consequences are unspecified if a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration is made for <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition (*i.e.*, when it is not *shadowed* <sub>2</sub> by a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or *symbol macro* named by the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



Any use of <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> to set the value of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition is treated as if it were a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. <ClLinks styled={true} term={"psetq"}><b>psetq</b></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is treated as if it were a <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, and <ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> is treated as if it were a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"values"}><b>values</b></ClLinks>. 



A <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a *symbol macro* can be *shadowed* <sub>2</sub> by <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> or <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



**Examples:**
```lisp

(defvar \*things\* (list ’alpha ’beta ’gamma)) → \*THINGS\* 
(define-symbol-macro thing1 (first \*things\*)) → THING1 
(define-symbol-macro thing2 (second \*things\*)) → THING2 
(define-symbol-macro thing3 (third \*things\*)) → THING3 
thing1 → ALPHA 
(setq thing1 ’ONE) → ONE 
\*things\* → (ONE BETA GAMMA) 
(multiple-value-setq (thing2 thing3) (values ’two ’three)) → TWO 
thing3 → THREE 
\*things\* → (ONE TWO THREE) 
(list thing2 (let ((thing2 2)) thing2)) → (TWO 2) 

```
**Exceptional Situations:** 



If <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is already defined as a *global variable*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, <ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks>  







<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



