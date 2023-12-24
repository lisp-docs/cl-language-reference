**set-exclusive-or, nset-exclusive-or** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



<ClLinks styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></ClLinks> returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of elements that appear in exactly one of *list-1* and *list-2*. <ClLinks styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></ClLinks> is the <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> version of <ClLinks styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></ClLinks>. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, the :test or :test-not function is used to determine whether they *satisfy the test*. 



If :key is supplied, it is used to extract the part to be tested from the *list-1* or *list-2* element. The first argument to the :test or :test-not function is the part of an element of *list-1* extracted by the :key function (if supplied); the second argument is the part of an element of *list-2* extracted by the :key function (if supplied). If :key is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the *list-1* or *list-2* element is used. 







 



 



The result contains precisely those elements of *list-1* and *list-2* that appear in no matching pair. The result <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"set-exclusive-or"}><b>set-exclusive-or</b></ClLinks> might share storage with one of *list-1* or *list-2*. 



**Examples:**
```lisp

(setq lst1 (list 1 "a" "b") 
      lst2 (list 1 "A" "b")) → (1 "A" "b") 
(set-exclusive-or lst1 lst2) → ("b" "A" "b" "a") 
(set-exclusive-or lst1 lst2 :test #’equal) → ("A" "a") 
(set-exclusive-or lst1 lst2 :test ’equalp) → NIL 
(nset-exclusive-or lst1 lst2) → ("a" "b" "A" "b") 
(setq lst1 (list (("a" . "b") ("c" . "d") ("e" . "f")))) 
→ (("a" . "b") ("c" . "d") ("e" . "f")) 
(setq lst2 (list (("c" . "a") ("e" . "b") ("d" . "a")))) 
→ (("c" . "a") ("e" . "b") ("d" . "a")) 
(nset-exclusive-or lst1 lst2 :test #’string= :key #’cdr) 
→ (("c" . "d") ("e" . "f") ("c" . "a") ("d" . "a")) 
lst1 → (("a" . "b") ("c" . "d") ("e" . "f")) 
lst2 → (("c" . "a") ("d" . "a")) 

```
**Side Effects:** 



<ClLinks styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></ClLinks> is permitted to modify any part, <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <ClLinks styled={true} term={"nset-exclusive-or"}><b>nset-exclusive-or</b></ClLinks> side effect is not required, it should not be used in for-effect-only positions in portable code. 



