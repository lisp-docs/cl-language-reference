**list, list***∗ Function* 



**Syntax:** 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks> &amp;rest *objects → list* 



<ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> &amp;rest <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks><sup>+</sup> → result 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks> returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing the supplied <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 



<ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> is like <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> except that the last <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> becomes the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the last <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> constructed, while the last <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> becomes the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the last <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> constructed. Hence, any given call to <ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> always produces one fewer *conses* than a call to <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> with the same number of arguments. 



If the last <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the effect is to construct a new <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which is similar, but which has additional elements added to the front corresponding to the preceding <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> of <ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks>. 



If <ClLinks styled={true} term={"list"}><b>list\*</b></ClLinks> receives only one <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is returned, regardless of whether or not it is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 

**Examples:**
```lisp
(list 1) → (1) 
(list\* 1) → 1 
(setq a 1) → 1 
(list a 2) → (1 2) 
’(a 2) → (A 2) 
(list ’a 2) → (A 2) 
(list\* a 2) → (1 . 2) 
(list) → NIL ;*i.e.*, () 
(setq a ’(1 2)) → (1 2) 
(eq a (list\* a)) → true 
(list 3 4 ’a (car ’(b . c)) (+ 6 -2)) → (3 4 A B 4) 
(list\* ’a ’b ’c ’d) *≡* (cons ’a (cons ’b (cons ’c ’d))) → (A B C . D) 
(list\* ’a ’b ’c ’(d e f)) → (A B C D E F) 
```
**See Also:** 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> 







 



 



**Notes:** 



(list\* *x*) *≡ x* 



