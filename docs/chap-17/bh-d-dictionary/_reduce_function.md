**reduce** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"reduce"}><b>reduce</b></ClLinks> *function sequence* &amp;key *key from-end start end initial-value → result* 



**Arguments and Values:** 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> that might be called with either zero or two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. *sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*initial-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks  term={"reduce"}><b>reduce</b></ClLinks> uses a binary operation, <ClLinks  term={"function"}><i>function</i></ClLinks>, to combine the <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence bounded* by *start* and *end*. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> must accept as <ClLinks  term={"argument"}><i>arguments</i></ClLinks> two <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence* or the results from combining those <ClLinks  term={"element"}><i>elements</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> must also be able to accept no arguments. 



If <ClLinks  term={"key"}><i>key</i></ClLinks> is supplied, it is used is used to extract the values to reduce. The <ClLinks  term={"key"}><i>key</i></ClLinks> function is applied exactly once to each element of *sequence* in the order implied by the reduction order but not to 







 



 



the value of *initial-value*, if supplied. The <ClLinks  term={"key"}><i>key</i></ClLinks> function typically returns part of the <ClLinks  term={"element"}><i>element</i></ClLinks> of *sequence*. If <ClLinks  term={"key"}><i>key</i></ClLinks> is not supplied or is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, the *sequence element* itself is used. 



The reduction is left-associative, unless *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks> in which case it is right-associative. 



If *initial-value* is supplied, it is logically placed before the subsequence (or after it if *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks>) and included in the reduction operation. 



In the normal case, the result of <ClLinks  term={"reduce"}><b>reduce</b></ClLinks> is the combined result of <ClLinks  term={"function"}><i>function</i></ClLinks>’s being applied to successive pairs of <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence*. If the subsequence contains exactly one <ClLinks  term={"element"}><i>element</i></ClLinks> and no *initial-value* is given, then that <ClLinks  term={"element"}><i>element</i></ClLinks> is returned and <ClLinks  term={"function"}><i>function</i></ClLinks> is not called. If the subsequence is empty and an *initial-value* is given, then the *initial-value* is returned and <ClLinks  term={"function"}><i>function</i></ClLinks> is not called. If the subsequence is empty and no *initial-value* is given, then the <ClLinks  term={"function"}><i>function</i></ClLinks> is called with zero arguments, and <ClLinks  term={"reduce"}><b>reduce</b></ClLinks> returns whatever <ClLinks  term={"function"}><i>function</i></ClLinks> does. This is the only case where the <ClLinks  term={"function"}><i>function</i></ClLinks> is called with other than two arguments. 



**Examples:**
```lisp
(reduce #’\* ’(1 2 3 4 5)) → 120 
(reduce #’append ’((1) (2)) :initial-value ’(i n i t)) → (I N I T 1 2) 
(reduce #’append ’((1) (2)) :from-end t 
	  :initial-value ’(i n i t)) → (1 2 I N I T) 
(reduce #’- ’(1 2 3 4)) *≡* (- (- (- 1 2) 3) 4) → -8 
(reduce #’- ’(1 2 3 4) :from-end t) ;Alternating sum. 
*≡* (- 1 (- 2 (- 3 4))) → -2 
(reduce #’+ ’()) → 0 
(reduce #’+ ’(3)) → 3 
(reduce #’+ ’(foo)) → FOO 
(reduce #’list ’(1 2 3 4)) → (((1 2) 3) 4) 
(reduce #’list ’(1 2 3 4) :from-end t) → (1 (2 (3 4))) 
(reduce #’list ’(1 2 3 4) :initial-value ’foo) → ((((foo 1) 2) 3) 4) 
(reduce #’list ’(1 2 3 4) 
	  :from-end t :initial-value ’foo) → (1 (2 (3 (4 foo)))) 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 







 



 



<DictionaryLink styled={true} term={"count, count-if, count-if-not"}><b>count, count-if, count-if-not</b></DictionaryLink> 



