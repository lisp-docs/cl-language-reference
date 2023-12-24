**position, position-if, position-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"position"}><b>position</b></ClLinks> *item sequence* &amp;key *from-end test test-not start end key → position* 



<ClLinks styled={true} term={"position-if"}><b>position-if</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → position* 



<ClLinks styled={true} term={"position-if-not"}><b>position-if-not</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → position* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*sequence*—a *proper sequence*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument that returns a *generalized boolean*. 



 



 



*from-end*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*position*—a *bounding index* of *sequence*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"position"}><b>position</b></ClLinks>, <ClLinks styled={true} term={"position-if"}><b>position-if</b></ClLinks>, and <ClLinks styled={true} term={"position-if-not"}><b>position-if-not</b></ClLinks> each search *sequence* for an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> that *satisfies the test*. 



The *position* returned is the index within *sequence* of the leftmost (if *from-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>) or of the rightmost (if *from-end* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>) <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> that *satisfies the test*; otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. The index returned is relative to the left-hand end of the entire *sequence*, regardless of the value of *start*, *end*, or *from-end*. 



**Examples:**
```lisp

(position #\a "baobab" :from-end t) → 4 
(position-if #’oddp ’((1) (2) (3) (4)) :start 1 :key #’car) → 2 
(position 595 ’()) → NIL 
(position-if-not #’integerp ’(1 2 3 4 5.0)) → 4 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



<ClLinks styled={true} term={"find"}><b>find</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"position-if-not"}><b>position-if-not</b></ClLinks> is deprecated. 







 



 



<ClLinks styled={true} term={"search"}><b>search</b></ClLinks> 



