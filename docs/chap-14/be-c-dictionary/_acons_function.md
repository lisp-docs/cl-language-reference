**acons** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"acons"}><b>acons</b></DictionaryLink> *key datum alist → new-alist* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*datum*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



Creates a *fresh cons*, the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of which is <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of which is another *fresh cons*, the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of which is <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of which is *datum*. 



**Examples:**
```lisp

(setq alist ’()) *→* NIL 
(acons 1 "one" alist) *→* ((1 . "one")) 
alist *→* NIL 
(setq alist (acons 1 "one" (acons 2 "two" alist))) *→* ((1 . "one") (2 . "two")) (assoc 1 alist) *→* (1 . "one") 
(setq alist (acons 1 "uno" alist)) *→* ((1 . "uno") (1 . "one") (2 . "two")) 
(assoc 1 alist) *→* (1 . "uno") 

```
**See Also:** 



<DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>, <DictionaryLink styled={true} term={"pairlis"}><b>pairlis</b></DictionaryLink> 



**Notes:** 



(acons *key datum alist<GlossaryTerm styled={true} term={"t"}><i>) </i></GlossaryTerm>≡* (cons (cons *key datum*) *alist*) 



