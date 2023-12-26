**nthcdr** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"nthcdr"}><b>nthcdr</b></ClLinks> *n list → tail* 



**Arguments and Values:** 



*n*—a non-negative *integer* . 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that would be obtained by calling <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> *n* times in succession. 



 



 



**Examples:**
```lisp
(nthcdr 0 ’()) → NIL 
(nthcdr 3 ’()) → NIL 
(nthcdr 0 ’(a b c)) → (A B C) 
(nthcdr 2 ’(a b c)) → (C) 
(nthcdr 4 ’(a b c)) → () 
(nthcdr 1 ’(0 . 1)) → 1 
(locally (declare (optimize (safety 3))) 
  (nthcdr 3 ’(0 . 1))) 
Error: Attempted to take CDR of 1. 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *n* is not a non-negative *integer* . 



For *n* being an integer greater than 1, the error checking done by (nthcdr *n list*) is the same as for (nthcdr (- *n* 1) (cdr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)); see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, <ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks>, <ClLinks styled={true} term={"rest"}><b>rest</b></ClLinks> 



