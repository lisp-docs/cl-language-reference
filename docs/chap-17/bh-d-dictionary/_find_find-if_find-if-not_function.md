**find, find-if, find-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find"}><b>find</b></ClLinks> *item sequence* &amp;key *from-end test test-not start end key → element* 



<ClLinks styled={true} term={"find-if"}><b>find-if</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → element* 



<ClLinks styled={true} term={"find-if-not"}><b>find-if-not</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → element* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*sequence*—a *proper sequence*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"element"}><i>element</i></ClLinks>—an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *sequence*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**Description:** 



<ClLinks styled={true} term={"find"}><b>find</b></ClLinks>, <ClLinks styled={true} term={"find-if"}><b>find-if</b></ClLinks>, and <ClLinks styled={true} term={"find-if-not"}><b>find-if-not</b></ClLinks> each search for an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *sequence bounded* by *start* and *end* that *satisfies the predicate predicate* or that *satisfies the test test* or *test-not*, as appropriate. 



If *from-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the result is the rightmost <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> that *satisfies the test*. 



If the *sequence* contains an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> that *satisfies the test*, then the leftmost or rightmost *sequence* element, depending on *from-end*, is returned; otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



**Examples:**
```lisp
(find #\d "here are some letters that can be looked at" :test #’char>) 
→ #\Space 
(find-if #’oddp ’(1 2 3 4 5) :end 3 :from-end t) → 3 
(find-if-not #’complexp 
	       ’#(3.5 2 #C(1.0 0.0) #C(0.0 1.0)) 
	       :start 2) → NIL 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



<ClLinks styled={true} term={"position"}><b>position</b></ClLinks>, Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"find-if-not"}><b>find-if-not</b></ClLinks> is deprecated. 



