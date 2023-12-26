**setq** <GlossaryTerm styled={true} term={"special form"}><i>Special Form</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> *\{↓pair\}*\* → result 



*pair::*=*var form* 



**Pronunciation:** 



[ **set kyu-** ] 



**Arguments and Values:** 



*var*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks  term={"variable"}><i>variable</i></ClLinks> other than a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*result*—the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of the last <ClLinks  term={"form"}><i>form</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if no *pairs* were supplied. 



**Description:** 



Assigns values to <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



(setq *var1 form1 var2 form2* ...) is the simple variable assignment statement of Lisp. First *form1* is evaluated and the result is stored in the variable *var1*, then *form2* is evaluated and the result stored in *var2*, and so forth. <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> may be used for assignment of both lexical and dynamic variables. 



If any *var* refers to a <ClLinks  term={"binding"}><i>binding</i></ClLinks> made by <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>, then that *var* is treated as if <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> (not <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>) had been used. 



**Examples:**
```lisp
;; A simple use of SETQ to establish values for variables. 
(setq a 1 b 2 c 3) → 3 
a → 1 
b → 2 
c → 3 
;; Use of SETQ to update values by sequential assignment. 
Data and Control 

(setq a (1+ b) b (1+ a) c (+ a b)) → 7 
a → 3 
b → 4 
c → 7 
;; This illustrates the use of SETQ on a symbol macro. 
(let ((x (list 10 20 30))) 
  (symbol-macrolet ((y (car x)) (z (cadr x))) 
    (setq y (1+ z) z (1+ y)) 
    (list x y z))) 
→ ((21 22 30) 21 22) 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of each <ClLinks  term={"form"}><i>form</i></ClLinks> is assigned to the corresponding *var*. 



**See Also:** 



<DictionaryLink  term={"psetq"}><b>psetq</b></DictionaryLink>, <DictionaryLink  term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> 



