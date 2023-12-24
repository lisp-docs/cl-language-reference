**fill** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"fill"}><b>fill</b></ClLinks> *sequence item* &amp;key *start end → sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*item*—a *sequence*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



**Description:** 



Replaces the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *sequence bounded* by *start* and *end* with *item*. 



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



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *start* is not a non-negative *integer* . Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *end* is not a non-negative *integer* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"replace"}><b>replace</b></ClLinks>, **nsubstitute** 



**Notes:** 



(fill *sequence item*) *≡*(nsubstitute-if *item* (constantly t) *sequence*) 







 



 



<ClLinks styled={true} term={"make-sequence"}><b>make-sequence</b></ClLinks> 



