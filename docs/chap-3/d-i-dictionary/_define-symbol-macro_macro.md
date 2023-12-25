**define-symbol-macro** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"define-symbol-macro"}><b>define-symbol-macro</b></ClLinks> *symbol expansion* 



→ symbol 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*expansion*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Provides a mechanism for globally affecting the *macro expansion* of the indicated <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



Globally establishes an expansion function for the *symbol macro* named by <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The only guaranteed property of an expansion <ClLinks  term={"function"}><i>function</i></ClLinks> for a *symbol macro* is that when it is applied to the <ClLinks  term={"form"}><i>form</i></ClLinks> and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the <ClLinks  term={"environment"}><i>environment</i></ClLinks>, or both.)  







Each global reference to <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (*i.e.*, not *shadowed* <sub>2</sub> by a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *symbol macro* named by the same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a *symbol macro* is subject to further *macro expansion* in the same *lexical environment* as the *symbol macro* reference, exactly analogous to normal <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



The consequences are unspecified if a <ClLinks  term={"special"}><b>special</b></ClLinks> declaration is made for <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition (*i.e.*, when it is not *shadowed* <sub>2</sub> by a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or *symbol macro* named by the same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



Any use of <ClLinks  term={"setq"}><b>setq</b></ClLinks> to set the value of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition is treated as if it were a <ClLinks  term={"setf"}><b>setf</b></ClLinks>. <ClLinks  term={"psetq"}><b>psetq</b></ClLinks> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is treated as if it were a <ClLinks  term={"psetf"}><b>psetf</b></ClLinks>, and <ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> is treated as if it were a <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"values"}><b>values</b></ClLinks>. 



A <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *symbol macro* can be *shadowed* <sub>2</sub> by <ClLinks  term={"let"}><b>let</b></ClLinks> or <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



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



If <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is already defined as a *global variable*, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>, <ClLinks  term={"macroexpand"}><b>macroexpand</b></ClLinks>  







<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



