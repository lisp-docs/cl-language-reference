**when, unless** *Macro* 



**Syntax:** 



**when** *test-form \&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**unless** *test-form \&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*test-form*—a *form*. 



*forms*—an *implicit progn*. 



*results*—the *values* of the *forms* in a **when** *form* if the *test-form yields true* or in an **unless** *form* if the *test-form yields false*; otherwise **nil**. 



**Description:** 



**when** and **unless** allow the execution of *forms* to be dependent on a single *test-form*. 



In a **when** *form*, if the *test-form yields true*, the *forms* are *evaluated* in order from left to right and the *values* returned by the *forms* are returned from the **when** *form*. Otherwise, if the *test-form yields false*, the *forms* are not *evaluated*, and the **when** *form* returns **nil**. 















**when, unless** 



In an **unless** *form*, if the *test-form yields false*, the *forms* are *evaluated* in order from left to right and the *values* returned by the *forms* are returned from the **unless** *form*. Otherwise, if the *test-form yields false*, the *forms* are not *evaluated*, and the **unless** *form* returns **nil**. 



**Examples:**
```lisp
 



(when t ’hello) *→* HELLO 



(unless t ’hello) *→* NIL 



(when nil ’hello) *→* NIL 



(unless nil ’hello) *→* HELLO 



(when t) *→* NIL 



(unless nil) *→* NIL 



(when t (prin1 1) (prin1 2) (prin1 3)) 



▷ 123 



*→* 3 



(unless t (prin1 1) (prin1 2) (prin1 3)) *→* NIL 



(when nil (prin1 1) (prin1 2) (prin1 3)) *→* NIL 



(unless nil (prin1 1) (prin1 2) (prin1 3)) 



▷ 123 



*→* 3 



(let ((x 3)) 



(list (when (oddp x) (incf x) (list x)) 



(when (oddp x) (incf x) (list x)) 



(unless (oddp x) (incf x) (list x)) 



(unless (oddp x) (incf x) (list x)) 



(if (oddp x) (incf x) (list x)) 



(if (oddp x) (incf x) (list x)) 



(if (not (oddp x)) (incf x) (list x)) 



(if (not (oddp x)) (incf x) (list x)))) 



*→* ((4) NIL (5) NIL 6 (6) 7 (7)) 




```
**See Also:** 



**and**, **cond**, **if**, **or** 



**Notes:** 



(when *test \&#123;form\&#125;*<sup>+</sup>) *≡* (and *test* (progn *\&#123;form\&#125;*<sup>+</sup>)) 



(when *test \&#123;form\&#125;*<sup>+</sup>) *≡* (cond (*test \&#123;form\&#125;*<sup>+</sup>)) 



(when *test \&#123;form\&#125;*<sup>+</sup>) *≡* (if *test* (progn *\&#123;form\&#125;*<sup>+</sup>) nil) 



(when *test \&#123;form\&#125;*<sup>+</sup>) *≡* (unless (not *test*) *\&#123;form\&#125;*<sup>+</sup>) 



(unless *test \&#123;form\&#125;*<sup>+</sup>) *≡* (cond ((not *test*) *\&#123;form\&#125;*<sup>+</sup>)) 



(unless *test \&#123;form\&#125;*<sup>+</sup>) *≡* (if *test* nil (progn *\&#123;form\&#125;*<sup>+</sup>)) 



(unless *test \&#123;form\&#125;*<sup>+</sup>) *≡* (when (not *test*) *\&#123;form\&#125;*<sup>+</sup>) 



Data and Control 











