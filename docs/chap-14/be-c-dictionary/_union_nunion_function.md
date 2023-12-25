**union, nunion** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"union"}><b>union</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



<ClLinks styled={true} term={"nunion"}><b>nunion</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*result-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"union"}><b>union</b></ClLinks> and <ClLinks styled={true} term={"nunion"}><b>nunion</b></ClLinks> return a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that contains every element that occurs in either *list-1* or *list-2*. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, :test or :test-not is used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is the part of the element of *list-1* extracted by the :key function (if supplied); the second argument is the part of the element of *list-2* extracted by the :key function (if supplied). 



The argument to the :key function is an element of *list-1* or *list-2*; the return value is part of the supplied element. If :key is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the element of *list-1* or *list-2* itself is supplied to the :test or :test-not function. 



For every matching pair, one of the two elements of the pair will be in the result. Any element from either *list-1* or *list-2* that matches no element of the other will appear in the result. 



If there is a duplication between *list-1* and *list-2*, only one of the duplicate instances will be in the result. If either *list-1* or *list-2* has duplicate entries within it, the redundant entries might or might not appear in the result. 



The order of elements in the result do not have to reflect the ordering of *list-1* or *list-2* in any way. The result <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> may be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to either *list-1* or *list-2* if appropriate. 







 



 



**union, nunion** 



**Examples:**
```lisp
(union ’(a b c) ’(f a d)) 
→ (A B C F D) 
<i><sup>or</sup>→</i> (B C F A D) 
<i><sup>or</sup>→</i> (D F A B C) 
(union ’((x 5) (y 6)) ’((z 2) (x 4)) :key #’car) 
→ ((X 5) (Y 6) (Z 2)) 
<i><sup>or</sup>→</i> ((X 4) (Y 6) (Z 2)) 
(setq lst1 (list 1 2 ’(1 2) "a" "b") 
      lst2 (list 2 3 ’(2 3) "B" "C")) 
→ (2 3 (2 3) "B" "C") 
(nunion lst1 lst2) 
→ (1 (1 2) "a" "b" 2 3 (2 3) "B" "C") 
<i><sup>or</sup>→</i> (1 2 (1 2) "a" "b" "C" "B" (2 3) 3) 
```
**Side Effects:** 



<ClLinks styled={true} term={"nunion"}><b>nunion</b></ClLinks> is permitted to modify any part, <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



<ClLinks styled={true} term={"intersection"}><b>intersection</b></ClLinks>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <ClLinks styled={true} term={"nunion"}><b>nunion</b></ClLinks> side effect is not required, it should not be used in for-effect-only positions in portable code. 





