**adjoin** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"adjoin"}><b>adjoin</b></DictionaryLink> *item list* &amp;key *key test test-not → new-list* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



Tests whether *item* is the same as an existing element of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. If the *item* is not an existing element, <DictionaryLink styled={true} term={"adjoin"}><b>adjoin</b></DictionaryLink> adds it to <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (as if by <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>) and returns the resulting <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; otherwise, nothing is added and the original <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is returned. 



The *test*, *test-not*, and <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> affect how it is determined whether *item* is the same as an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. For details, see Section 17.2.1 (Satisfying a Two-Argument Test). 



**Examples:**
```lisp

(setq slist ’()) *→* NIL 
(adjoin ’a slist) *→* (A) 
slist *→* NIL 
(setq slist (adjoin ’(test-item 1) slist)) *→* ((TEST-ITEM 1)) 
(adjoin ’(test-item 1) slist) *→* ((TEST-ITEM 1) (TEST-ITEM 1)) 
(adjoin ’(test-item 1) slist :test ’equal) *→* ((TEST-ITEM 1)) 
(adjoin ’(new-test-item 1) slist :key #’cadr) *→* ((TEST-ITEM 1)) 
(adjoin ’(new-test-item 1) slist) *→* ((NEW-TEST-ITEM 1) (TEST-ITEM 1)) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list*. 



**See Also:** 



<DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 







 



 



**Notes:** 



The :test-not parameter is deprecated. 



(adjoin item list :key fn) 



*≡* (if (member (fn item) list :key fn) list (cons item list)) 



