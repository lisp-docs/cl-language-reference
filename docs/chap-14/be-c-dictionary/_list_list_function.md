**list, list***∗ Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> &amp;rest *objects → list* 



<DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm><sup>+</sup> *→ result* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> containing the supplied <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> is like <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> except that the last <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> becomes the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the last <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> constructed, while the last <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> becomes the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the last <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> constructed. Hence, any given call to <DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> always produces one fewer *conses* than a call to <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> with the same number of arguments. 



If the last <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the effect is to construct a new <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which is similar, but which has additional elements added to the front corresponding to the preceding <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> of <DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink>. 



If <DictionaryLink styled={true} term={"list"}><b>list\*</b></DictionaryLink> receives only one <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is returned, regardless of whether or not it is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. **Examples:**
```lisp

(list 1) *→* (1) 
(list\* 1) *→* 1 
(setq a 1) *→* 1 
(list a 2) *→* (1 2) 
’(a 2) *→* (A 2) 
(list ’a 2) *→* (A 2) 
(list\* a 2) *→* (1 . 2) 
(list) *→* NIL ;*i.e.*, () 
(setq a ’(1 2)) *→* (1 2) 
(eq a (list\* a)) *→ true* 
(list 3 4 ’a (car ’(b . c)) (+ 6 -2)) *→* (3 4 A B 4) 
(list\* ’a ’b ’c ’d) *≡* (cons ’a (cons ’b (cons ’c ’d))) *→* (A B C . D) 
(list\* ’a ’b ’c ’(d e f)) *→* (A B C D E F) 

```
**See Also:** 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> 







 



 



**Notes:** 



(list\* *x*) *≡ x* 



