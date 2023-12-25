**set-exclusive-or, nset-exclusive-or** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



<DictionaryLink styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of elements that appear in exactly one of *list-1* and *list-2*. <DictionaryLink styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></DictionaryLink> is the <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> version of <DictionaryLink styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></DictionaryLink>. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, the :test or :test-not function is used to determine whether they *satisfy the test*. 



If :key is supplied, it is used to extract the part to be tested from the *list-1* or *list-2* element. The first argument to the :test or :test-not function is the part of an element of *list-1* extracted by the :key function (if supplied); the second argument is the part of an element of *list-2* extracted by the :key function (if supplied). If :key is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the *list-1* or *list-2* element is used. 







 



 



The result contains precisely those elements of *list-1* and *list-2* that appear in no matching pair. The result <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <DictionaryLink styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></DictionaryLink> might share storage with one of *list-1* or *list-2*. 



**Examples:**
```lisp

(setq lst1 (list 1 "a" "b") 
      lst2 (list 1 "A" "b")) *→* (1 "A" "b") 
(set-exclusive-or lst1 lst2) *→* ("b" "A" "b" "a") 
(set-exclusive-or lst1 lst2 :test #’equal) *→* ("A" "a") 
(set-exclusive-or lst1 lst2 :test ’equalp) *→* NIL 
(nset-exclusive-or lst1 lst2) *→* ("a" "b" "A" "b") 
(setq lst1 (list (("a" . "b") ("c" . "d") ("e" . "f")))) 
*→* (("a" . "b") ("c" . "d") ("e" . "f")) 
(setq lst2 (list (("c" . "a") ("e" . "b") ("d" . "a")))) 
*→* (("c" . "a") ("e" . "b") ("d" . "a")) 
(nset-exclusive-or lst1 lst2 :test #’string= :key #’cdr) 
*→* (("c" . "d") ("e" . "f") ("c" . "a") ("d" . "a")) 
lst1 *→* (("a" . "b") ("c" . "d") ("e" . "f")) 
lst2 *→* (("c" . "a") ("d" . "a")) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></DictionaryLink> is permitted to modify any part, <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <DictionaryLink styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></DictionaryLink> side effect is not required, it should not be used in for-effect-only positions in portable code. 



