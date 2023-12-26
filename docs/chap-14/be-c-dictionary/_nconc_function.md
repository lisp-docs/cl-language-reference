**nconc** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks> &amp;rest *lists → concatenated-list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—each but the last must be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (which might be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> but must not be a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>); the last <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> may be any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*concatenated-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is the concatenation of <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>. If no <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> are supplied, (nconc) returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. <ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks> is defined using the following recursive relationship: 



(nconc) → () 



(nconc nil . <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>) *≡* (nconc . <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>) 



(nconc <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) → list 



(nconc *list-1 list-2*) *≡* (progn (rplacd (last *list-1*) *list-2*) *list-1*) 



(nconc *list-1 list-2* . <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>) *≡* (nconc (nconc *list-1 list-2*) . <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>) 







 



 



**Examples:**
```lisp
(nconc) → NIL 
(setq x ’(a b c)) → (A B C) 
(setq y ’(d e f)) → (D E F) 
(nconc x y) → (A B C D E F) 
x → (A B C D E F) 
Note, in the example, that the value of x is now different, since its last *cons* has been **rplacd**’d to the value of y. If (nconc x y) were evaluated again, it would yield a piece of a *circular list*, whose printed representation would be (A B C D E F D E F D E F ...), repeating forever; if the **\*print-circle\*** switch were *non-nil*, it would be printed as (A B C . #1=(D E F . #1#)). 
(setq foo (list ’a ’b ’c ’d ’e) 
      bar (list ’f ’g ’h ’i ’j) 
      baz (list ’k ’l ’m)) → (K L M) 
(setq foo (nconc foo bar baz)) → (A B C D E F G H I J K L M) 
foo → (A B C D E F G H I J K L M) 
bar → (F G H I J K L M) 
baz → (K L M) 
(setq foo (list ’a ’b ’c ’d ’e) 
      bar (list ’f ’g ’h ’i ’j) 
      baz (list ’k ’l ’m)) → (K L M) 
(setq foo (nconc nil foo bar nil baz)) → (A B C D E F G H I J K L M) 
foo → (A B C D E F G H I J K L M) 
bar → (F G H I J K L M) 
baz → (K L M) 
```
**Side Effects:** 



The <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> are modified rather than copied. 



**See Also:** 



<ClLinks styled={true} term={"append"}><b>append</b></ClLinks>, <ClLinks styled={true} term={"concatenate"}><b>concatenate</b></ClLinks> 



