**subsetp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"subsetp"}><b>subsetp</b></ClLinks> *list-1 list-2* &amp;key *key test test-not → generalized-boolean* 







 



 



**Arguments and Values:** 



*list-1*—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



*list-2*—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks styled={true} term={"subsetp"}><b>subsetp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if every element of *list-1* matches some element of *list-2*, and <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> otherwise. 



Whether a list element is the same as another list element is determined by the functions specified by the keyword arguments. The first argument to the :test or :test-not function is typically part of an element of *list-1* extracted by the :key function; the second argument is typically part of an element of *list-2* extracted by the :key function. 



The argument to the :key function is an element of either *list-1* or *list-2*; the return value is part of the element of the supplied list element. If :key is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the *list-1* or *list-2* element itself is supplied to the :test or :test-not function. 



**Examples:**
```lisp
(setq cosmos ’(1 "a" (1 2))) → (1 "a" (1 2)) 
(subsetp ’(1) cosmos) → true 
(subsetp ’((1 2)) cosmos) → false 
(subsetp ’((1 2)) cosmos :test ’equal) → true 
(subsetp ’(1 "A") cosmos :test #’equalp) → true 
(subsetp ’((1) (2)) ’((1) (2))) → false 
(subsetp ’((1) (2)) ’((1) (2)) :key #’car) → true 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *list-1* and *list-2* are not <GlossaryTerm styled={true} term={"proper list"}><i>proper lists</i></GlossaryTerm>. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 







 



 



<DictionaryLink styled={true} term={"union, nunion"}><b>union, nunion</b></DictionaryLink> 



