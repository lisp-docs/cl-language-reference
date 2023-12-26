**last** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"last"}><b>last</b></ClLinks> <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> &amp;optional *n → tail* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> but must not be a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



*n*—a non-negative *integer* . The default is 1. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"last"}><b>last</b></ClLinks> returns the last *n conses* (not the last *n* elements) of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>). If <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is (), <ClLinks styled={true} term={"last"}><b>last</b></ClLinks> returns (). 



If *n* is zero, the atom that terminates <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is returned. If *n* is greater than or equal to the number of <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> cells in <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the result is <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Examples:**
```lisp
(last nil) → NIL 
(last ’(1 2 3)) → (3) 
(last ’(1 2 . 3)) → (2 . 3) 
(setq x (list ’a ’b ’c ’d)) → (A B C D) 
(last x) → (D) 
(rplacd (last x) (list ’e ’f)) x → (A B C D E F) 
(last x) → (F) 
(last ’(a b c)) → (C) 
(last ’(a b c) 0) → () 
(last ’(a b c) 1) → (C) 

(last ’(a b c) 2) → (B C) 
(last ’(a b c) 3) → (A B C) 
(last ’(a b c) 4) → (A B C) 
(last ’(a . b) 0) → B 
(last ’(a . b) 1) → (A . B) 
(last ’(a . b) 2) → (A . B) 
```
**Exceptional Situations:** 



The consequences are undefined if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *n* is not a non-negative *integer* . 



**See Also:** 



<ClLinks styled={true} term={"butlast"}><b>butlast</b></ClLinks>, <ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks> 



**Notes:** 



The following code could be used to define <ClLinks styled={true} term={"last"}><b>last</b></ClLinks>. 



(defun last (list &amp;optional (n 1)) 



(check-type n (integer 0)) 



(do ((l list (cdr l)) 



(r list) 



(i 0 (+ i 1))) 



((atom l) r) 



(if (&gt;= i n) (pop r)))) 



