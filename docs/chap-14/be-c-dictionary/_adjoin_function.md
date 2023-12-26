**adjoin** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"adjoin"}><b>adjoin</b></ClLinks> *item list* &amp;key *key test test-not → new-list* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Tests whether *item* is the same as an existing element of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. If the *item* is not an existing element, <ClLinks styled={true} term={"adjoin"}><b>adjoin</b></ClLinks> adds it to <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (as if by <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>) and returns the resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>; otherwise, nothing is added and the original <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is returned. 



The *test*, *test-not*, and <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> affect how it is determined whether *item* is the same as an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. For details, see Section 17.2.1 (Satisfying a Two-Argument Test). 



**Examples:**
```lisp
(setq slist ’()) → NIL 
(adjoin ’a slist) → (A) 
slist → NIL 
(setq slist (adjoin ’(test-item 1) slist)) → ((TEST-ITEM 1)) 
(adjoin ’(test-item 1) slist) → ((TEST-ITEM 1) (TEST-ITEM 1)) 
(adjoin ’(test-item 1) slist :test ’equal) → ((TEST-ITEM 1)) 
(adjoin ’(new-test-item 1) slist :key #’cadr) → ((TEST-ITEM 1)) 
(adjoin ’(new-test-item 1) slist) → ((NEW-TEST-ITEM 1) (TEST-ITEM 1)) 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



**See Also:** 



<ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 







 



 



**Notes:** 



The :test-not parameter is deprecated. 



(adjoin item list :key fn) 



*≡* (if (member (fn item) list :key fn) list (cons item list)) 



