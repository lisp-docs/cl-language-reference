**mismatch** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"mismatch"}><b>mismatch</b></DictionaryLink> *sequence-1 sequence-2* &amp;key *from-end test test-not key start1 start2 end1 end2 → position* 



**Arguments and Values:** 



*Sequence-1*—a *sequence*. 



*Sequence-2*—a *sequence*. 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<GlossaryTerm  term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start1*, *end1*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence-1*. The defaults for *start1* and *end1* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*start2*, *end2*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence-2*. The defaults for *start2* and *end2* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*position*—a <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of *sequence-1*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



The specified subsequences of *sequence-1* and *sequence-2* are compared element-wise. The <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> argument is used for both the *sequence-1* and the *sequence-2*. 



If *sequence-1* and *sequence-2* are of equal length and match in every element, the result is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Otherwise, the result is a non-negative *integer* , the index within *sequence-1* of the leftmost or rightmost position, depending on *from-end*, at which the two subsequences fail to match. If one subsequence is shorter than and a matching prefix of the other, the result is the index relative to *sequence-1* beyond the last position tested. 







 



 



If *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then one plus the index of the rightmost position in which the *sequences* differ is returned. In effect, the subsequences are aligned at their right-hand ends; then, the last elements are compared, the penultimate elements, and so on. The index returned is an index relative to *sequence-1*. 



**Examples:**
```lisp
(mismatch "abcd" "ABCDE" :test #’char-equal) → 4 
(mismatch ’(3 2 1 1 2 3) ’(1 2 3) :from-end t) → 3 
(mismatch ’(1 2 3) ’(2 3 4) :test-not #’eq :key #’oddp) → NIL 
(mismatch ’(1 2 3 4 5 6) ’(3 4 5 6 7) :start1 2 :end2 4) → NIL 
```
**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



