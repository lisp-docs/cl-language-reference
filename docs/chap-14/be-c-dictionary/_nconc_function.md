**nconc** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink> &amp;rest *lists → concatenated-list* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—each but the last must be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (which might be a *dotted list* but must not be a *circular list*); the last <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> may be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*concatenated-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the concatenation of <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>. If no <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are supplied, (nconc) returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink> is defined using the following recursive relationship: 



(nconc) *→* () 



(nconc nil . <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>) *≡* (nconc . <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>) 



(nconc <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *→ list* 



(nconc *list-1 list-2*) *≡* (progn (rplacd (last *list-1*) *list-2*) *list-1*) 



(nconc *list-1 list-2* . <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>) *≡* (nconc (nconc *list-1 list-2*) . <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>) 







 



 



**Examples:**
```lisp

(nconc) *→* NIL 
(setq x ’(a b c)) *→* (A B C) 
(setq y ’(d e f)) *→* (D E F) 
(nconc x y) *→* (A B C D E F) 
x *→* (A B C D E F) 
Note, in the example, that the value of x is now different, since its last *cons* has been **rplacd**’d to the value of y. If (nconc x y) were evaluated again, it would yield a piece of a *circular list*, whose printed representation would be (A B C D E F D E F D E F ...), repeating forever; if the **\*print-circle\*** switch were *non-nil*, it would be printed as (A B C . #1=(D E F . #1#)). 
(setq foo (list ’a ’b ’c ’d ’e) 
      bar (list ’f ’g ’h ’i ’j) 
      baz (list ’k ’l ’m)) *→* (K L M) 
(setq foo (nconc foo bar baz)) *→* (A B C D E F G H I J K L M) 
foo *→* (A B C D E F G H I J K L M) 
bar *→* (F G H I J K L M) 
baz *→* (K L M) 
(setq foo (list ’a ’b ’c ’d ’e) 
      bar (list ’f ’g ’h ’i ’j) 
      baz (list ’k ’l ’m)) *→* (K L M) 
(setq foo (nconc nil foo bar nil baz)) *→* (A B C D E F G H I J K L M) 
foo *→* (A B C D E F G H I J K L M) 
bar *→* (F G H I J K L M) 
baz *→* (K L M) 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are modified rather than copied. 



**See Also:** 



<DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink>, <DictionaryLink styled={true} term={"concatenate"}><b>concatenate</b></DictionaryLink> 



