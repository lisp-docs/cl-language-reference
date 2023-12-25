**union, nunion** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"union"}><b>union</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



<DictionaryLink styled={true} term={"nunion"}><b>nunion</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"union"}><b>union</b></DictionaryLink> and <DictionaryLink styled={true} term={"nunion"}><b>nunion</b></DictionaryLink> return a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that contains every element that occurs in either *list-1* or *list-2*. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, :test or :test-not is used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is the part of the element of *list-1* extracted by the :key function (if supplied); the second argument is the part of the element of *list-2* extracted by the :key function (if supplied). 



The argument to the :key function is an element of *list-1* or *list-2*; the return value is part of the supplied element. If :key is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the element of *list-1* or *list-2* itself is supplied to the :test or :test-not function. 



For every matching pair, one of the two elements of the pair will be in the result. Any element from either *list-1* or *list-2* that matches no element of the other will appear in the result. 



If there is a duplication between *list-1* and *list-2*, only one of the duplicate instances will be in the result. If either *list-1* or *list-2* has duplicate entries within it, the redundant entries might or might not appear in the result. 



The order of elements in the result do not have to reflect the ordering of *list-1* or *list-2* in any way. The result <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> may be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to either *list-1* or *list-2* if appropriate. 







 



 



**union, nunion** 



**Examples:**
```lisp

(union ’(a b c) ’(f a d)) 
*→* (A B C F D) 
<i><sup>or</sup>→</i> (B C F A D) 
<i><sup>or</sup>→</i> (D F A B C) 
(union ’((x 5) (y 6)) ’((z 2) (x 4)) :key #’car) 
*→* ((X 5) (Y 6) (Z 2)) 
<i><sup>or</sup>→</i> ((X 4) (Y 6) (Z 2)) 
(setq lst1 (list 1 2 ’(1 2) "a" "b") 
      lst2 (list 2 3 ’(2 3) "B" "C")) 
*→* (2 3 (2 3) "B" "C") 
(nunion lst1 lst2) 
*→* (1 (1 2) "a" "b" 2 3 (2 3) "B" "C") 
<i><sup>or</sup>→</i> (1 2 (1 2) "a" "b" "C" "B" (2 3) 3) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"nunion"}><b>nunion</b></DictionaryLink> is permitted to modify any part, <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



<DictionaryLink styled={true} term={"intersection"}><b>intersection</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <DictionaryLink styled={true} term={"nunion"}><b>nunion</b></DictionaryLink> side effect is not required, it should not be used in for-effect-only positions in portable code. 





