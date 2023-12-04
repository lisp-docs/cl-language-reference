**reduce** *Function* 



**Syntax:** 



**reduce** *function sequence* &key *key from-end start end initial-value → result* 



**Arguments and Values:** 



*function*—a *designator* for a *function* that might be called with either zero or two *arguments*. *sequence*—a *proper sequence*. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*from-end*—a *generalized boolean*. The default is *false*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*initial-value*—an *object*. 



*result*—an *object*. 



**Description:** 



**reduce** uses a binary operation, *function*, to combine the *elements* of *sequence bounded* by *start* and *end*. 



The *function* must accept as *arguments* two *elements* of *sequence* or the results from combining those *elements*. The *function* must also be able to accept no arguments. 



If *key* is supplied, it is used is used to extract the values to reduce. The *key* function is applied exactly once to each element of *sequence* in the order implied by the reduction order but not to 







 



 



the value of *initial-value*, if supplied. The *key* function typically returns part of the *element* of *sequence*. If *key* is not supplied or is **nil**, the *sequence element* itself is used. 



The reduction is left-associative, unless *from-end* is *true* in which case it is right-associative. 



If *initial-value* is supplied, it is logically placed before the subsequence (or after it if *from-end* is *true*) and included in the reduction operation. 



In the normal case, the result of **reduce** is the combined result of *function*’s being applied to successive pairs of *elements* of *sequence*. If the subsequence contains exactly one *element* and no *initial-value* is given, then that *element* is returned and *function* is not called. If the subsequence is empty and an *initial-value* is given, then the *initial-value* is returned and *function* is not called. If the subsequence is empty and no *initial-value* is given, then the *function* is called with zero arguments, and **reduce** returns whatever *function* does. This is the only case where the *function* is called with other than two arguments. 



**Examples:**
```lisp
 



(reduce #’\* ’(1 2 3 4 5)) *→* 120 



(reduce #’append ’((1) (2)) :initial-value ’(i n i t)) *→* (I N I T 1 2) 



(reduce #’append ’((1) (2)) :from-end t 



:initial-value ’(i n i t)) *→* (1 2 I N I T) 



(reduce #’- ’(1 2 3 4)) *≡* (- (- (- 1 2) 3) 4) *→* -8 



(reduce #’- ’(1 2 3 4) :from-end t) ;Alternating sum. 



*≡* (- 1 (- 2 (- 3 4))) *→* -2 



(reduce #’+ ’()) *→* 0 



(reduce #’+ ’(3)) *→* 3 



(reduce #’+ ’(foo)) *→* FOO 



(reduce #’list ’(1 2 3 4)) *→* (((1 2) 3) 4) 



(reduce #’list ’(1 2 3 4) :from-end t) *→* (1 (2 (3 4))) 



(reduce #’list ’(1 2 3 4) :initial-value ’foo) *→* ((((foo 1) 2) 3) 4) 



(reduce #’list ’(1 2 3 4) 



:from-end t :initial-value ’foo) *→* (1 (2 (3 (4 foo)))) 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 







 



 



**count, count-if, count-if-not** 



