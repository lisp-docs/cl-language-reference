**intersection, nintersection** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"intersection"}><b>intersection</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



<DictionaryLink styled={true} term={"nintersection"}><b>nintersection</b></DictionaryLink> *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"intersection"}><b>intersection</b></DictionaryLink> and <DictionaryLink styled={true} term={"nintersection"}><b>nintersection</b></DictionaryLink> return a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that contains every element that occurs in both *list-1* and *list-2*. 



<DictionaryLink styled={true} term={"nintersection"}><b>nintersection</b></DictionaryLink> is the destructive version of <DictionaryLink styled={true} term={"intersection"}><b>intersection</b></DictionaryLink>. It performs the same operation, but may destroy *list-1* using its cells to construct the result. *list-2* is not destroyed. 



The intersection operation is described as follows. For all possible ordered pairs consisting of one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> from *list-1* and one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> from *list-2*, :test or :test-not are used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is an element of *list-1*; the second argument is an element of *list-2*. If :test or :test-not is not supplied, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is used. It is an error if :test and :test-not are supplied in the same function call. 







 



 



**intersection, nintersection** 



If :key is supplied (and not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>), it is used to extract the part to be tested from the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> element. The argument to the :key function is an element of either *list-1* or *list-2*; the :key function typically returns part of the supplied element. If :key is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the *list-1* and *list-2* elements are used. 



For every pair that *satifies the test*, exactly one of the two elements of the pair will be put in the result. No element from either <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> appears in the result that does not *satisfy the test* for an element from the other <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. If one of the <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> contains duplicate elements, there may be duplication in the result. 



There is no guarantee that the order of elements in the result will reflect the ordering of the arguments in any particular way. The result <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> may share cells with, or be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to, either *list-1* or *list-2* if appropriate. 



**Examples:**
```lisp

(setq list1 (list 1 1 2 3 4 a b c "A" "B" "C" "d") 
      list2 (list 1 4 5 b c d "a" "B" "c" "D")) 
*→* (1 4 5 B C D "a" "B" "c" "D") 
(intersection list1 list2) *→* (C B 4 1 1) 
(intersection list1 list2 :test ’equal) *→* ("B" C B 4 1 1) 
(intersection list1 list2 :test #’equalp) *→* ("d" "C" "B" "A" C B 4 1 1) 
(nintersection list1 list2) *→* (1 1 4 B C) 
list1 *→ implementation-dependent* ;*e.g.*, (1 1 4 B C) 
list2 *→ implementation-dependent* ;*e.g.*, (1 4 5 B C D "a" "B" "c" "D") 
(setq list1 (copy-list ’((1 . 2) (2 . 3) (3 . 4) (4 . 5)))) 
*→* ((1 . 2) (2 . 3) (3 . 4) (4 . 5)) 
(setq list2 (copy-list ’((1 . 3) (2 . 4) (3 . 6) (4 . 8)))) 
*→* ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 
(nintersection list1 list2 :key #’cdr) *→* ((2 . 3) (3 . 4)) 
list1 *→ implementation-dependent* ;*e.g.*, ((1 . 2) (2 . 3) (3 . 4)) 
list2 *→ implementation-dependent* ;*e.g.*, ((1 . 3) (2 . 4) (3 . 6) (4 . 8)) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"nintersection"}><b>nintersection</b></DictionaryLink> can modify *list-1*, but not *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



<DictionaryLink styled={true} term={"union"}><b>union</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the <DictionaryLink styled={true} term={"nintersection"}><b>nintersection</b></DictionaryLink> side effect is not required, it should not be used in for-effect-only positions 



 



 



in portable code. 



