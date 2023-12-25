**intersection, nintersection** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"intersection"}><b>intersection</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



<ClLinks styled={true} term={"nintersection"}><b>nintersection</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"intersection"}><b>intersection</b></ClLinks> and <ClLinks styled={true} term={"nintersection"}><b>nintersection</b></ClLinks> return a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that contains every element that occurs in both *list-1* and *list-2*. 



<ClLinks styled={true} term={"nintersection"}><b>nintersection</b></ClLinks> is the destructive version of <ClLinks styled={true} term={"intersection"}><b>intersection</b></ClLinks>. It performs the same operation, but may destroy *list-1* using its cells to construct the result. *list-2* is not destroyed. 



The intersection operation is described as follows. For all possible ordered pairs consisting of one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> from *list-1* and one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> from *list-2*, :test or :test-not are used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is an element of *list-1*; the second argument is an element of *list-2*. If :test or :test-not is not supplied, <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> is used. It is an error if :test and :test-not are supplied in the same function call. 







 



 



**intersection, nintersection** 



If :key is supplied (and not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>), it is used to extract the part to be tested from the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> element. The argument to the :key function is an element of either *list-1* or *list-2*; the :key function typically returns part of the supplied element. If :key is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the *list-1* and *list-2* elements are used. 



For every pair that *satifies the test*, exactly one of the two elements of the pair will be put in the result. No element from either <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> appears in the result that does not *satisfy the test* for an element from the other <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. If one of the <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> contains duplicate elements, there may be duplication in the result. 



There is no guarantee that the order of elements in the result will reflect the ordering of the arguments in any particular way. The result <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> may share cells with, or be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to, either *list-1* or *list-2* if appropriate. 



**Examples:**
```lisp
(setq list1 (list 1 1 2 3 4 a b c "A" "B" "C" "d") 
      list2 (list 1 4 5 b c d "a" "B" "c" "D")) 
→ (1 4 5 B C D "a" "B" "c" "D") 
(intersection list1 list2) → (C B 4 1 1) 
(intersection list1 list2 :test ’equal) → ("B" C B 4 1 1) 
(intersection list1 list2 :test #’equalp) → ("d" "C" "B" "A" C B 4 1 1) 
(nintersection list1 list2) → (1 1 4 B C) 
list1 → implementation-dependent ;*e.g.*, (1 1 4 B C) 
list2 → implementation-dependent ;*e.g.*, (1 4 5 B C D "a" "B" "c" "D") 
(setq list1 (copy-list ’((1 . 2) (2 . 3) (3 . 4) (4 . 5)))) 
→ ((1 . 2) (2 . 3) (3 . 4) (4 . 5)) 
(setq list2 (copy-list ’((1 . 3) (2 . 4) (3 . 6) (4 . 8)))) 
→ ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 
(nintersection list1 list2 :key #’cdr) → ((2 . 3) (3 . 4)) 
list1 → implementation-dependent ;*e.g.*, ((1 . 2) (2 . 3) (3 . 4)) 
list2 → implementation-dependent ;*e.g.*, ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 
```
**Side Effects:** 



<ClLinks styled={true} term={"nintersection"}><b>nintersection</b></ClLinks> can modify *list-1*, but not *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



<ClLinks styled={true} term={"union"}><b>union</b></ClLinks>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <ClLinks styled={true} term={"nintersection"}><b>nintersection</b></ClLinks> side effect is not required, it should not be used in for-effect-only positions 



 



 



in portable code. 



