**fill** *Function* 



**Syntax:** 



**fill** *sequence item* &amp;key *start end → sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*item*—a *sequence*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



**Description:** 



Replaces the *elements* of *sequence bounded* by *start* and *end* with *item*. 



**Examples:**
```lisp
 

(fill (list 0 1 2 3 4 5) ’(444)) *→* ((444) (444) (444) (444) (444) (444)) 

(fill (copy-seq "01234") #\e :start 3) *→* "012ee" 

(setq x (vector ’a ’b ’c ’d ’e)) *→* #(A B C D E) 

(fill x ’z :start 1 :end 3) *→* #(A Z Z D E) 

x *→* #(A Z Z D E) 

(fill x ’p) *→* #(P P P P P) 

x *→* #(P P P P P) 


```
**Side Effects:** 



*Sequence* is destructively modified. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. Should signal an error of *type* **type-error** if *start* is not a non-negative *integer* . Should signal an error of *type* **type-error** if *end* is not a non-negative *integer* or **nil**. 



**See Also:** 



**replace**, **nsubstitute** 



**Notes:** 



(fill *sequence item*) *≡*(nsubstitute-if *item* (constantly t) *sequence*) 







 



 



**make-sequence** 



