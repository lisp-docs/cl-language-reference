**set-difference, nset-difference** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"set-difference"}><b>set-difference</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



<DictionaryLink styled={true} term={"nset-difference"}><b>nset-difference</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 







 



 



**set-difference, nset-difference** 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"set-difference"}><b>set-difference</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of elements of *list-1* that do not appear in *list-2*. 



<DictionaryLink styled={true} term={"nset-difference"}><b>nset-difference</b></DictionaryLink> is the destructive version of <DictionaryLink styled={true} term={"set-difference"}><b>set-difference</b></DictionaryLink>. It may destroy *list-1*. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, the :test or :test-not function is used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is the part of an element of *list-1* that is returned by the :key function (if supplied); the second argument is the part of an element of *list-2* that is returned by the :key function (if supplied). 



If :key is supplied, its argument is a *list-1* or *list-2* element. The :key function typically returns part of the supplied element. If :key is not supplied, the *list-1* or *list-2* element is used. 



An element of *list-1* appears in the result if and only if it does not match any element of *list-2*. 



There is no guarantee that the order of elements in the result will reflect the ordering of the arguments in any particular way. The result <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> may share cells with, or be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to, either of *list-1* or *list-2*, if appropriate. 



**Examples:**
```lisp

(setq lst1 (list "A" "b" "C" "d") 
      lst2 (list "a" "B" "C" "d")) *→* ("a" "B" "C" "d") 
(set-difference lst1 lst2) *→* ("d" "C" "b" "A") 
(set-difference lst1 lst2 :test ’equal) *→* ("b" "A") 
(set-difference lst1 lst2 :test #’equalp) *→* NIL 
(nset-difference lst1 lst2 :test #’string=) *→* ("A" "b") 
(setq lst1 ’(("a" . "b") ("c" . "d") ("e" . "f"))) 
*→* (("a" . "b") ("c" . "d") ("e" . "f")) 
(setq lst2 ’(("c" . "a") ("e" . "b") ("d" . "a"))) 
*→* (("c" . "a") ("e" . "b") ("d" . "a")) 
(nset-difference lst1 lst2 :test #’string= :key #’cdr) 
*→* (("c" . "d") ("e" . "f")) 
lst1 *→* (("a" . "b") ("c" . "d") ("e" . "f")) 
lst2 *→* (("c" . "a") ("e" . "b") ("d" . "a")) 
;; Remove all flavor names that contain "c" or "w". 
(set-difference ’("strawberry" "chocolate" "banana" 
			       "lemon" "pistachio" "rhubarb") 
		 ’(#\c #\w) 
		 :test #’(lambda (s c) (find c s))) 
*→* ("banana" "rhubarb" "lemon") ;One possible ordering. 




```
**Side Effects:** 



<DictionaryLink styled={true} term={"nset-difference"}><b>nset-difference</b></DictionaryLink> may destroy *list-1*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



