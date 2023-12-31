**psetq** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink> *\{↓pair\}*\* → <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



*pair::*=*var form* 



**Pronunciation:** 



<DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink>: [ **p—e set kyu-** ] 



**Arguments and Values:** 



*var*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> other than a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Assigns values to <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>. 



This is just like <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, except that the assignments happen “in parallel.” That is, first all of the forms are evaluated, and only then are the variables set to the resulting values. In this way, the assignment to one variable does not affect the value computation of another in the way that would occur with <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>’s sequential assignment. 



If any *var* refers to a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> made by <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, then that *var* is treated as if <DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink> (not <DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink>) had been used. 















**Examples:**
```lisp
;; A simple use of PSETQ to establish values for variables. 
;; As a matter of style, many programmers would prefer SETQ 
;; in a simple situation like this where parallel assignment 
;; is not needed, but the two have equivalent effect. 
(psetq a 1 b 2 c 3) → NIL 
a → 1 
b → 2 
c → 3 
;; Use of PSETQ to update values by parallel assignment. 
;; The effect here is very different than if SETQ had been used. 
(psetq a (1+ b) b (1+ a) c (+ a b)) → NIL 
a → 3 
b → 2 
c → 3 
;; Use of PSETQ on a symbol macro. 
(let ((x (list 10 20 30))) 
  (symbol-macrolet ((y (car x)) (z (cadr x))) 
    (psetq y (1+ z) z (1+ y)) 
    (list x y z))) 
→ ((21 11 30) 21 11) 
;; Use of parallel assignment to swap values of A and B. 
(let ((a 1) (b 2)) 
  (psetq a b b a) 
  (values a b)) 
→ 2, 1 
```
**Side Effects:** 



The values of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are assigned to *vars*. 



**See Also:** 



<DictionaryLink  term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> 



