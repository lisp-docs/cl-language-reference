**upper-case-p, lower-case-p, both-case-p** *Function* 



**Syntax:** 



**upper-case-p** *character → generalized-boolean* 



**lower-case-p** *character → generalized-boolean* 



**both-case-p** *character → generalized-boolean* 



**Arguments and Values:** 



*character*—a *character* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



These functions test the case of a given *character*. 



**upper-case-p** returns *true* if *character* is an *uppercase character* ; otherwise, returns *false*. **lower-case-p** returns *true* if *character* is a *lowercase character* ; otherwise, returns *false*. **both-case-p** returns *true* if *character* is a *character* with *case*; otherwise, returns *false*. **Examples:**
```lisp


(upper-case-p #\A) → true 

(upper-case-p #\a) → false 

(both-case-p #\a) → true 

(both-case-p #\5) → false 

(lower-case-p #\5) → false 

(upper-case-p #\5) → false 

;; This next example presupposes an implementation 

;; in which #\Bell is an implementation-defined character. 

(lower-case-p #\Bell) → false 








```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**char-upcase**, **char-downcase**, Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



