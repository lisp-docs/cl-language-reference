**fill** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"fill"}><b>fill</b></DictionaryLink> *sequence item* &amp;key *start end → sequence* 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*item*—a *sequence*. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



**Description:** 



Replaces the <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence bounded* by *start* and *end* with *item*. 



**Examples:**
```lisp
(fill (list 0 1 2 3 4 5) ’(444)) → ((444) (444) (444) (444) (444) (444)) 
(fill (copy-seq "01234") #\e :start 3) → "012ee" 
(setq x (vector ’a ’b ’c ’d ’e)) → #(A B C D E) 
(fill x ’z :start 1 :end 3) → #(A Z Z D E) 
x → #(A Z Z D E) 
(fill x ’p) → #(P P P P P) 
x → #(P P P P P) 
```
**Side Effects:** 



*Sequence* is destructively modified. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *end* is not a non-negative *integer* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"replace"}><b>replace</b></DictionaryLink>, **nsubstitute** 



**Notes:** 



(fill *sequence item*) *≡*(nsubstitute-if *item* (constantly t) *sequence*) 







 



 



<DictionaryLink  term={"make-sequence"}><b>make-sequence</b></DictionaryLink> 



