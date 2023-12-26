**reduce** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"reduce"}><b>reduce</b></DictionaryLink> *function sequence* &amp;key *key from-end start end initial-value → result* 



**Arguments and Values:** 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that might be called with either zero or two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. *sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*initial-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"reduce"}><b>reduce</b></DictionaryLink> uses a binary operation, <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, to combine the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequence bounded* by *start* and *end*. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> must accept as <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> two <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequence* or the results from combining those <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> must also be able to accept no arguments. 



If <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> is supplied, it is used is used to extract the values to reduce. The <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> function is applied exactly once to each element of *sequence* in the order implied by the reduction order but not to 







 



 



the value of *initial-value*, if supplied. The <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> function typically returns part of the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *sequence*. If <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> is not supplied or is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the *sequence element* itself is used. 



The reduction is left-associative, unless *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> in which case it is right-associative. 



If *initial-value* is supplied, it is logically placed before the subsequence (or after it if *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>) and included in the reduction operation. 



In the normal case, the result of <DictionaryLink  term={"reduce"}><b>reduce</b></DictionaryLink> is the combined result of <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>’s being applied to successive pairs of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequence*. If the subsequence contains exactly one <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> and no *initial-value* is given, then that <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> is returned and <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is not called. If the subsequence is empty and an *initial-value* is given, then the *initial-value* is returned and <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is not called. If the subsequence is empty and no *initial-value* is given, then the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is called with zero arguments, and <DictionaryLink  term={"reduce"}><b>reduce</b></DictionaryLink> returns whatever <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> does. This is the only case where the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is called with other than two arguments. 



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



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 







 



 



<DictionaryLink styled={true} term={"count, count-if, count-if-not"}><b>count, count-if, count-if-not</b></DictionaryLink> 



