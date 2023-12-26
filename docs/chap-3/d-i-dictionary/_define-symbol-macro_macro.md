**define-symbol-macro** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"define-symbol-macro"}><b>define-symbol-macro</b></DictionaryLink> *symbol expansion* 



→ symbol 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*expansion*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Provides a mechanism for globally affecting the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of the indicated <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



Globally establishes an expansion function for the <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> named by <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The only guaranteed property of an expansion <ClLinks  term={"function"}><i>function</i></ClLinks> for a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> is that when it is applied to the <ClLinks  term={"form"}><i>form</i></ClLinks> and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the <ClLinks  term={"environment"}><i>environment</i></ClLinks>, or both.)  







Each global reference to <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (*i.e.*, not *shadowed* <sub>2</sub> by a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> named by the same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> is subject to further <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> reference, exactly analogous to normal <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



The consequences are unspecified if a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration is made for <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition (*i.e.*, when it is not *shadowed* <sub>2</sub> by a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> named by the same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



Any use of <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> to set the value of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> while in the scope of this definition is treated as if it were a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. <DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is treated as if it were a <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, and <DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> is treated as if it were a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>. 



A <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> can be *shadowed* <sub>2</sub> by <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> or <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>. 



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



If <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is already defined as a <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, <DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink>  







<DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



