**define-symbol-macro** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"define-symbol-macro"}><b>define-symbol-macro</b></DictionaryLink> *symbol expansion* 



*→ symbol* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*expansion*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Provides a mechanism for globally affecting the *macro expansion* of the indicated <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Globally establishes an expansion function for the *symbol macro* named by <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The only guaranteed property of an expansion <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> for a *symbol macro* is that when it is applied to the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, or both.)  







Each global reference to <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (*i.e.*, not *shadowed* <sub>2</sub> by a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or *symbol macro* named by the same <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a *symbol macro* is subject to further *macro expansion* in the same *lexical environment* as the *symbol macro* reference, exactly analogous to normal <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. 



The consequences are unspecified if a <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declaration is made for <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> while in the scope of this definition (*i.e.*, when it is not *shadowed* <sub>2</sub> by a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or *symbol macro* named by the same <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



Any use of <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> to set the value of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> while in the scope of this definition is treated as if it were a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is treated as if it were a <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, and <DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> is treated as if it were a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a *symbol macro* can be *shadowed* <sub>2</sub> by <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> or <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>. 



**Examples:**
```lisp

(defvar \*things\* (list ’alpha ’beta ’gamma)) *→* \*THINGS\* 
(define-symbol-macro thing1 (first \*things\*)) *→* THING1 
(define-symbol-macro thing2 (second \*things\*)) *→* THING2 
(define-symbol-macro thing3 (third \*things\*)) *→* THING3 
thing1 *→* ALPHA 
(setq thing1 ’ONE) *→* ONE 
\*things\* *→* (ONE BETA GAMMA) 
(multiple-value-setq (thing2 thing3) (values ’two ’three)) *→* TWO 
thing3 *→* THREE 
\*things\* *→* (ONE TWO THREE) 
(list thing2 (let ((thing2 2)) thing2)) *→* (TWO 2) 

```
**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is already defined as a *global variable*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, <DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink>  







<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



