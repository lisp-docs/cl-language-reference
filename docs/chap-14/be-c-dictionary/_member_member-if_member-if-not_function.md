**member, member-if, member-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"member"}><b>member</b></ClLinks> *item list* &amp;key *key test test-not → tail* 



<ClLinks styled={true} term={"member-if"}><b>member-if</b></ClLinks> *predicate list* &amp;key *key → tail* 



<ClLinks styled={true} term={"member-if-not"}><b>member-if-not</b></ClLinks> *predicate list* &amp;key *key → tail* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a *proper list*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *test<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"member"}><b>member</b></ClLinks>, <ClLinks styled={true} term={"member-if"}><b>member-if</b></ClLinks>, and <ClLinks styled={true} term={"member-if-not"}><b>member-if-not</b></ClLinks> each search <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> for *item* or for a top-level element that *satisfies the test*. The argument to the <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> function is an element of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



If some element *satisfies the test*, the tail of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> beginning with this element is returned; otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is searched on the top level only. 







 



 



**Examples:**
```lisp
(member 2 ’(1 2 3)) → (2 3) 
(member 2 ’((1 . 2) (3 . 4)) :test-not #’= :key #’cdr) → ((3 . 4)) 
(member ’e ’(a b c d)) → NIL 
(member-if #’listp ’(a b nil c d)) → (NIL C D) 
(member-if #’numberp ’(a #\Space 5/3 foo)) → (5/3 FOO) 
(member-if-not #’zerop 
		 ’(3 6 9 11 . 12) 
		 :key #’(lambda (x) (mod x 3))) → (11 . 12) 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is not a *proper list*. 



**See Also:** 



<ClLinks styled={true} term={"find"}><b>find</b></ClLinks>, <ClLinks styled={true} term={"position"}><b>position</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"member-if-not"}><b>member-if-not</b></ClLinks> is deprecated. 



In the following 



(member ’a ’(g (a y) c a d e a f)) → (A D E A F) 



the value returned by <ClLinks styled={true} term={"member"}><b>member</b></ClLinks> is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to the portion of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> beginning with a. Thus <ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> on the result of <ClLinks styled={true} term={"member"}><b>member</b></ClLinks> can be used to alter the part of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> where a was found (assuming a check has been made that <ClLinks styled={true} term={"member"}><b>member</b></ClLinks> did not return <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). 



