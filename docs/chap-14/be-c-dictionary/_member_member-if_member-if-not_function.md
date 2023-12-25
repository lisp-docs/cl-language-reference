**member, member-if, member-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> *item list* &amp;key *key test test-not → tail* 



<DictionaryLink styled={true} term={"member-if"}><b>member-if</b></DictionaryLink> *predicate list* &amp;key *key → tail* 



<DictionaryLink styled={true} term={"member-if-not"}><b>member-if-not</b></DictionaryLink> *predicate list* &amp;key *key → tail* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *test<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink>, <DictionaryLink styled={true} term={"member-if"}><b>member-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"member-if-not"}><b>member-if-not</b></DictionaryLink> each search <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> for *item* or for a top-level element that *satisfies the test*. The argument to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> function is an element of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



If some element *satisfies the test*, the tail of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> beginning with this element is returned; otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is searched on the top level only. 







 



 



**Examples:**
```lisp

(member 2 ’(1 2 3)) *→* (2 3) 
(member 2 ’((1 . 2) (3 . 4)) :test-not #’= :key #’cdr) *→* ((3 . 4)) 
(member ’e ’(a b c d)) *→* NIL 
(member-if #’listp ’(a b nil c d)) *→* (NIL C D) 
(member-if #’numberp ’(a #\Space 5/3 foo)) *→* (5/3 FOO) 
(member-if-not #’zerop 
		 ’(3 6 9 11 . 12) 
		 :key #’(lambda (x) (mod x 3))) *→* (11 . 12) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not a *proper list*. 



**See Also:** 



<DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink>, <DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"member-if-not"}><b>member-if-not</b></DictionaryLink> is deprecated. 



In the following 



(member ’a ’(g (a y) c a d e a f)) *→* (A D E A F) 



the value returned by <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to the portion of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> beginning with a. Thus <DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> on the result of <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> can be used to alter the part of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> where a was found (assuming a check has been made that <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> did not return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). 



