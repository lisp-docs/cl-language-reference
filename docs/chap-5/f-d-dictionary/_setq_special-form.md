**setq** *Special Form* 



**Syntax:** 



<DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> *\{↓pair\}*\* *→ result* 



*pair::*=*var form* 



**Pronunciation:** 



[ **set kyu-** ] 



**Arguments and Values:** 



*var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> other than a *constant variable*. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*result*—the *primary value* of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no *pairs* were supplied. 



**Description:** 



Assigns values to <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>. 



(setq *var1 form1 var2 form2* ...) is the simple variable assignment statement of Lisp. First *form1* is evaluated and the result is stored in the variable *var1*, then *form2* is evaluated and the result stored in *var2*, and so forth. <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> may be used for assignment of both lexical and dynamic variables. 



If any *var* refers to a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> made by <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, then that *var* is treated as if <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> (not <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>) had been used. 



**Examples:**
```lisp

;; A simple use of SETQ to establish values for variables. 
(setq a 1 b 2 c 3) *→* 3 
a *→* 1 
b *→* 2 
c *→* 3 
;; Use of SETQ to update values by sequential assignment. 
Data and Control 


(setq a (1+ b) b (1+ a) c (+ a b)) *→* 7 
a *→* 3 
b *→* 4 
c *→* 7 
;; This illustrates the use of SETQ on a symbol macro. 
(let ((x (list 10 20 30))) 
  (symbol-macrolet ((y (car x)) (z (cadr x))) 
    (setq y (1+ z) z (1+ y)) 
    (list x y z))) 
*→* ((21 22 30) 21 22) 

```
**Side Effects:** 



The *primary value* of each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is assigned to the corresponding *var*. 



**See Also:** 



<DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink>, <DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> 



