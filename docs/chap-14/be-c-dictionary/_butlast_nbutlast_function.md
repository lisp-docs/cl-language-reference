**butlast, nbutlast** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"butlast"}><b>butlast</b></ClLinks> <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> &amp;optional *n → result-list* 



<ClLinks styled={true} term={"nbutlast"}><b>nbutlast</b></ClLinks> <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> &amp;optional *n → result-list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list* but must not be a *circular list*. 



*n*—a non-negative *integer* . 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"butlast"}><b>butlast</b></ClLinks> returns a copy of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> from which the last *n* conses have been omitted. If *n* is not supplied, its value is 1. If there are fewer than *n* conses in <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned and, in the case of <ClLinks styled={true} term={"nbutlast"}><b>nbutlast</b></ClLinks>, <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not modified. 



<ClLinks styled={true} term={"nbutlast"}><b>nbutlast</b></ClLinks> is like <ClLinks styled={true} term={"butlast"}><b>butlast</b></ClLinks>, but <ClLinks styled={true} term={"nbutlast"}><b>nbutlast</b></ClLinks> may modify <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. It changes the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the *cons n*+1 from the end of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp

(setq lst ’(1 2 3 4 5 6 7 8 9)) → (1 2 3 4 5 6 7 8 9) 
(butlast lst) → (1 2 3 4 5 6 7 8) 
(butlast lst 5) → (1 2 3 4) 
(butlast lst (+ 5 5)) → NIL 
lst → (1 2 3 4 5 6 7 8 9) 
(nbutlast lst 3) → (1 2 3 4 5 6) 
lst → (1 2 3 4 5 6) 
(nbutlast lst 99) → NIL 
lst → (1 2 3 4 5 6) 
(butlast ’(a b c d)) → (A B C) 
(butlast ’((a b) (c d))) → ((A B)) 
(butlast ’(a)) → NIL 
(butlast nil) → NIL 
(setq foo (list ’a ’b ’c ’d)) → (A B C D) 
(nbutlast foo) → (A B C) 
foo → (A B C) 



(nbutlast (list ’a)) → NIL 
(nbutlast ’()) → NIL 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a *proper list* or a *dotted list*. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *n* is not a non-negative *integer* . 



**Notes:** 



(butlast *list n*) *≡* (ldiff <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (last *list n*)) 



