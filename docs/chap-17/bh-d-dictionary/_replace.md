**replace** *Function* 



**Syntax:** 



**replace** *sequence-1 sequence-2* &key *start1 end1 start2 end2 → sequence-1* 



**Arguments and Values:** 



*sequence-1*—a *sequence*. 



*sequence-2*—a *sequence*. 



*start1*, *end1*—*bounding index designators* of *sequence-1*. The defaults for *start1* and *end1* are 0 and **nil**, respectively. 



*start2*, *end2*—*bounding index designators* of *sequence-2*. The defaults for *start2* and *end2* are 0 and **nil**, respectively. 



**Description:** 



Destructively modifies *sequence-1* by replacing the *elements* of *subsequence-1 bounded* by *start1* and *end1* with the *elements* of *subsequence-2 bounded* by *start2* and *end2*. 



*Sequence-1* is destructively modified by copying successive *elements* into it from *sequence-2*. *Elements* of the subsequence of *sequence-2 bounded* by *start2* and *end2* are copied into the subsequence of *sequence-1 bounded* by *start1* and *end1*. If these subsequences are not of the same length, then the shorter length determines how many *elements* are copied; the extra *elements* near the end of the longer subsequence are not involved in the operation. The number of elements copied can be expressed as: 







 



 



(min (- *end1 start1*) (- *end2 start2*)) 



If *sequence-1* and *sequence-2* are the *same object* and the region being modified overlaps the region being copied from, then it is as if the entire source region were copied to another place and only then copied back into the target region. However, if *sequence-1* and *sequence-2* are not the same, but the region being modified overlaps the region being copied from (perhaps because of shared list structure or displaced *arrays*), then after the **replace** operation the subsequence of *sequence-1* being modified will have unpredictable contents. It is an error if the elements of *sequence-2* are not of a *type* that can be stored into *sequence-1*. 



**Examples:**
```lisp
 



(replace "abcdefghij" "0123456789" :start1 4 :end1 7 :start2 4) 



*→* "abcd456hij" 



(setq lst "012345678") *→* "012345678" 



(replace lst lst :start1 2 :start2 0) *→* "010123456" 



lst *→* "010123456" 




```
**Side Effects:** 



The *sequence-1* is modified. 



**See Also:** 



**fill** 



<b><sup>substitute, substitute-if, substitute-if-not, nsubsti</sup> tute, nsubstitute-if, nsubstitute-if-not</b> <i>Function</i> 



**Syntax:** 



**substitute** *newitem olditem sequence* &key *from-end test* 



*test-not start* 



*end count key* 



*→ result-sequence* 



**substitute-if** *newitem predicate sequence* &key *from-end start end count key* 



*→ result-sequence* 



**substitute-if-not** *newitem predicate sequence* &key *from-end start end count key* 



*→ result-sequence* 



**nsubstitute** *newitem olditem sequence* &key *from-end test test-not start end count key → sequence* 







 



 



**substitute, substitute-if, substitute-if-not,** *. . .* 



**nsubstitute-if** *newitem predicate sequence* &key *from-end start end count key* 



*→ sequence* 



**nsubstitute-if-not** *newitem predicate sequence* &key *from-end start end count key* 



*→ sequence* 



**Arguments and Values:** 



*newitem*—an *object*. 



*olditem*—an *object*. 



*sequence*—a *proper sequence*. 



*predicate*—a *designator* for a *function* of one *argument* that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*count*—an *integer* or **nil**. The default is **nil**. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*result-sequence*—a *sequence*. 



**Description:** 



**substitute**, **substitute-if**, and **substitute-if-not** return a copy of *sequence* in which each *element* that *satisfies the test* has been replaced with *newitem*. 



**nsubstitute**, **nsubstitute-if**, and **nsubstitute-if-not** are like **substitute**, **substitute-if**, and **substitute-if-not** respectively, but they may modify *sequence*. 



If *sequence* is a *vector* , the result is a *vector* that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *list*. 



*Count*, if supplied, limits the number of elements altered; if more than *count elements satisfy the test*, then of these *elements* only the leftmost or rightmost, depending on *from-end*, are replaced, as many as specified by *count*. If *count* is supplied and negative, the behavior is as if zero had been supplied instead. If *count* is **nil**, all matching items are affected. 



Supplying a *from-end* of *true* matters only when the *count* is provided (and *non-nil*); in that case, only the rightmost *count elements satisfying the test* are removed (instead of the leftmost). 



*predicate*, *test*, and *test-not* might be called more than once for each *sequence element*, and their side effects can happen in any order. 







 



 



**substitute, substitute-if, substitute-if-not,** *. . .* 



The result of all these functions is a *sequence* of the same *type* as *sequence* that has the same elements except that those in the subsequence *bounded* by *start* and *end* and *satisfying the test* have been replaced by *newitem*. 



**substitute**, **substitute-if**, and **substitute-if-not** return a *sequence* which can share with *sequence* or may be *identical* to the input *sequence* if no elements need to be changed. 



**nsubstitute** and **nsubstitute-if** are required to **setf** any **car** (if *sequence* is a *list*) or **aref** (if *sequence* is a *vector* ) of *sequence* that is required to be replaced with *newitem*. If *sequence* is a *list*, none of the *cdrs* of the top-level *list* can be modified. 



**Examples:** 



(substitute #\. #\SPACE "0 2 4 6") *→* "0.2.4.6" 



(substitute 9 4 ’(1 2 4 1 3 4 5)) *→* (1 2 9 1 3 9 5) 



(substitute 9 4 ’(1 2 4 1 3 4 5) :count 1) *→* (1 2 9 1 3 4 5) 



(substitute 9 4 ’(1 2 4 1 3 4 5) :count 1 :from-end t) 



*→* (1 2 4 1 3 9 5) 



(substitute 9 3 ’(1 2 4 1 3 4 5) :test #’>) *→* (9 9 4 9 3 4 5) 



(substitute-if 0 #’evenp ’((1) (2) (3) (4)) :start 2 :key #’car) 



*→* ((1) (2) (3) 0) 



(substitute-if 9 #’oddp ’(1 2 4 1 3 4 5)) *→* (9 2 4 9 9 4 9) 



(substitute-if 9 #’evenp ’(1 2 4 1 3 4 5) :count 1 :from-end t) 



*→* (1 2 4 1 3 9 5) 



(setq some-things (list ’a ’car ’b ’cdr ’c)) *→* (A CAR B CDR C) 



(nsubstitute-if "function was here" #’fboundp some-things 



:count 1 :from-end t) *→* (A CAR B "function was here" C) 



some-things *→* (A CAR B "function was here" C) 



(setq alpha-tester (copy-seq "ab ")) *→* "ab " 



(nsubstitute-if-not #\z #’alpha-char-p alpha-tester) *→* "abz" 



alpha-tester *→* "abz" 



**Side Effects:** 



**nsubstitute**, **nsubstitute-if**, and **nsubstitute-if-not** modify *sequence*. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



**See Also:** 



**subst**, **nsubst**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



If *sequence* is a *vector* , the result might or might not be simple, and might or might not be *identical* 



 



 



to *sequence*. 



The :test-not *argument* is deprecated. 



The functions **substitute-if-not** and **nsubstitute-if-not** are deprecated. 



**nsubstitute** and **nsubstitute-if** can be used in for-effect-only positions in code. 



Because the side-effecting variants (*e.g.*, **nsubstitute**) potentially change the path that is being traversed, their effects in the presence of shared or circular structure may vary in surprising ways when compared to their non-side-effecting alternatives. To see this, consider the following side-effect behavior, which might be exhibited by some implementations: 



(defun test-it (fn) 



(let ((x (cons ’b nil))) 



(rplacd x x) 



(funcall fn ’a ’b x :count 1))) 



(test-it #’substitute) *→* (A . #1=(B . #1#)) 



(test-it #’nsubstitute) *→* (A . #1#) 



