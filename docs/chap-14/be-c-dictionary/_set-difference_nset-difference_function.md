**set-difference, nset-difference** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"set-difference"}><b>set-difference</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



<ClLinks styled={true} term={"nset-difference"}><b>nset-difference</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



*list-2*—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"set-difference, nset-difference"}><b>set-difference, nset-difference</b></DictionaryLink> 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"set-difference"}><b>set-difference</b></ClLinks> returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of elements of *list-1* that do not appear in *list-2*. 



<ClLinks styled={true} term={"nset-difference"}><b>nset-difference</b></ClLinks> is the destructive version of <ClLinks styled={true} term={"set-difference"}><b>set-difference</b></ClLinks>. It may destroy *list-1*. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, the :test or :test-not function is used to determine whether they <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>. The first argument to the :test or :test-not function is the part of an element of *list-1* that is returned by the :key function (if supplied); the second argument is the part of an element of *list-2* that is returned by the :key function (if supplied). 



If :key is supplied, its argument is a *list-1* or *list-2* element. The :key function typically returns part of the supplied element. If :key is not supplied, the *list-1* or *list-2* element is used. 



An element of *list-1* appears in the result if and only if it does not match any element of *list-2*. 



There is no guarantee that the order of elements in the result will reflect the ordering of the arguments in any particular way. The result <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> may share cells with, or be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to, either of *list-1* or *list-2*, if appropriate. 



**Examples:**
```lisp
(setq lst1 (list "A" "b" "C" "d") 
      lst2 (list "a" "B" "C" "d")) → ("a" "B" "C" "d") 
(set-difference lst1 lst2) → ("d" "C" "b" "A") 
(set-difference lst1 lst2 :test ’equal) → ("b" "A") 
(set-difference lst1 lst2 :test #’equalp) → NIL 
(nset-difference lst1 lst2 :test #’string=) → ("A" "b") 
(setq lst1 ’(("a" . "b") ("c" . "d") ("e" . "f"))) 
→ (("a" . "b") ("c" . "d") ("e" . "f")) 
(setq lst2 ’(("c" . "a") ("e" . "b") ("d" . "a"))) 
→ (("c" . "a") ("e" . "b") ("d" . "a")) 
(nset-difference lst1 lst2 :test #’string= :key #’cdr) 
→ (("c" . "d") ("e" . "f")) 
lst1 → (("a" . "b") ("c" . "d") ("e" . "f")) 
lst2 → (("c" . "a") ("e" . "b") ("d" . "a")) 
;; Remove all flavor names that contain "c" or "w". 
(set-difference ’("strawberry" "chocolate" "banana" 
			       "lemon" "pistachio" "rhubarb") 
		 ’(#\c #\w) 
		 :test #’(lambda (s c) (find c s))) 
→ ("banana" "rhubarb" "lemon") ;One possible ordering. 


```
**Side Effects:** 



<ClLinks styled={true} term={"nset-difference"}><b>nset-difference</b></ClLinks> may destroy *list-1*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *list-1* and *list-2* are not <GlossaryTerm styled={true} term={"proper list"}><i>proper lists</i></GlossaryTerm>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



