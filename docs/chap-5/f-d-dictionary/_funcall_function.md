**funcall** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> &amp;rest *args → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *function designator* . 



*args*—<GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> applies <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to *args*. If <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, it is coerced to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> as if by finding its *functional value* in the *global environment*. 



**Examples:**
```lisp

(funcall #’+ 1 2 3) *→* 6 
(funcall ’car ’(1 2 3)) *→* 1 
(funcall ’position 1 ’(1 2 3 2 1) :start 1) *→* 4 
(cons 1 2) *→* (1 . 2) 
(flet ((cons (x y) ‘(kons ,x ,y))) 
  (let ((cons (symbol-function ’+))) 
    (funcall #’cons 
	       (funcall ’cons 1 2) 
	       (funcall cons 1 2)))) 
*→* (KONS (1 . 2) 3) 

```
**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink> should be signaled if <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that does not have a global definition as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or that has a global definition as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special operator* . 



**See Also:** 



<DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



(funcall *function arg1 arg2* ...) 



*≡* (apply *function arg1 arg2* ... nil) 



*≡* (apply <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (list *arg1 arg2* ...)) 



The difference between <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> and an ordinary function call is that in the former case the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 











is obtained by ordinary <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and in the latter case it is obtained by the special interpretation of the function position that normally occurs. 



