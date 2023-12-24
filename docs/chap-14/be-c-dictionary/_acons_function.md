**acons** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"acons"}><b>acons</b></ClLinks> *key datum alist → new-alist* 



**Arguments and Values:** 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*datum*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



Creates a *fresh cons*, the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of which is <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> and the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of which is another *fresh cons*, the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of which is <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of which is *datum*. 



**Examples:**
```lisp

(setq alist ’()) → NIL 
(acons 1 "one" alist) → ((1 . "one")) 
alist → NIL 
(setq alist (acons 1 "one" (acons 2 "two" alist))) → ((1 . "one") (2 . "two")) (assoc 1 alist) → (1 . "one") 
(setq alist (acons 1 "uno" alist)) → ((1 . "uno") (1 . "one") (2 . "two")) 
(assoc 1 alist) → (1 . "uno") 

```
**See Also:** 



<ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>, <ClLinks styled={true} term={"pairlis"}><b>pairlis</b></ClLinks> 



**Notes:** 



(acons *key datum alist<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>≡* (cons (cons *key datum*) *alist*) 



