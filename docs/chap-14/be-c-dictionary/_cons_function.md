**cons** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> *object-1 object-2 → cons* 



**Arguments and Values:** 



*object-1*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*object-2*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>—a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



**Description:** 



Creates a *fresh cons*, the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of which is *object-1* and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of which is *object-2*. 



**Examples:**
```lisp
(cons 1 2) → (1 . 2) 
(cons 1 nil) → (1) 
(cons nil 2) → (NIL . 2) 
(cons nil nil) → (NIL) 
(cons 1 (cons 2 (cons 3 (cons 4 nil)))) → (1 2 3 4) 
(cons ’a ’b) → (A . B) 
(cons ’a (cons ’b (cons ’c ’()))) → (A B C) 
(cons ’a ’(b c d)) → (A B C D) 
```
**See Also:** 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks> 



**Notes:** 



If *object-2* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> can be thought of as producing a new <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which is like it but has *object-1* prepended. 



