**search** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"search"}><b>search</b></ClLinks> *sequence-1 sequence-2* &amp;key *from-end test test-not* 



*key start1 start2* 



*end1 end2* 



→ position 



**Arguments and Values:** 



*Sequence-1*—a *sequence*. 



*Sequence-2*—a *sequence*. 



*from-end*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*start1*, *end1*—*bounding index designators* of *sequence-1*. The defaults for *start1* and *end1* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*start2*, *end2*—*bounding index designators* of *sequence-2*. The defaults for *start2* and *end2* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*position*—a *bounding index* of *sequence-2*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Searches *sequence-2* for a subsequence that matches *sequence-1*. 



The implementation may choose to search *sequence-2* in any order; there is no guarantee on the number of times the test is made. For example, when *start-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the *sequence* might actually be searched from left to right instead of from right to left (but in either case would return the rightmost matching subsequence). If the search succeeds, <ClLinks styled={true} term={"search"}><b>search</b></ClLinks> returns the offset into *sequence-2* of the first element of the leftmost or rightmost matching subsequence, depending on *from-end*; otherwise <ClLinks styled={true} term={"search"}><b>search</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If *from-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the index of the leftmost element of the rightmost matching subsequence is returned. 



**Examples:**
```lisp

(search "dog" "it’s a dog’s life") → 7 
(search ’(0 1) ’(2 4 6 1 3 5) :key #’oddp) → 2 




```
**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is deprecated. 



