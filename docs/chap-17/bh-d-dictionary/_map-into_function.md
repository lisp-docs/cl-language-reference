**map-into** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> *result-sequence function* &amp;rest *sequences → result-sequence* 



**Arguments and Values:** 



*result-sequence*—a *proper sequence*. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of as many <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as there are *sequences*. *sequence*—a *proper sequence*. 



**Description:** 



Destructively modifies *result-sequence* to contain the results of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to each element in the argument *sequences* in turn. 



*result-sequence* and each element of *sequences* can each be either a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . If *result-sequence* and each element of *sequences* are not all the same length, the iteration terminates when the shortest *sequence* (of any of the *sequences* or the *result-sequence*) is exhausted. If *result-sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , the *fill pointer* is ignored when deciding how many iterations to perform, and afterwards the *fill pointer* is set to the number of times <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> was applied. If *result-sequence* is longer than the shortest element of *sequences*, extra elements at the end of *result-sequence* are left unchanged. If *result-sequence* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> immediately returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, since <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is a *sequence* of length zero. 



If <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> has side effects, it can count on being called first on all of the elements with index 0, then on all of those numbered 1, and so on. 



**Examples:**
```lisp

(setq a (list 1 2 3 4) b (list 10 10 10 10)) *→* (10 10 10 10) 
(map-into a #’+ a b) *→* (11 12 13 14) 
a *→* (11 12 13 14) 
b *→* (10 10 10 10) 
(setq k ’(one two three)) *→* (ONE TWO THREE) 
(map-into a #’cons k a) *→* ((ONE . 11) (TWO . 12) (THREE . 13) 14) 
(map-into a #’gensym) *→* (#:G9090 #:G9091 #:G9092 #:G9093) 
a *→* (#:G9090 #:G9091 #:G9092 #:G9093) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *result-sequence* is not a *proper sequence*. Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**Notes:** 



<DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> differs from <DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink> in that it modifies an existing *sequence* rather than creating a new one. In addition, <DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> can be called with only two arguments, while <DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink> requires at least three 







 



 



arguments. 



<DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> could be defined by: 



(defun map-into (result-sequence function &amp;rest sequences) 



(loop for index below (apply #’min 



(length result-sequence) 



(mapcar #’length sequences)) 



do (setf (elt result-sequence index) 



(apply function 



(mapcar #’(lambda (seq) (elt seq index)) 



sequences)))) 



result-sequence) 



