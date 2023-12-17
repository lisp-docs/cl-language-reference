**alpha-char-p** *Function* 



**Syntax:** 



**alpha-char-p** *character → generalized-boolean* 



**Arguments and Values:** 



*character*—a *character* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *character* is an *alphabetic*<sub>1</sub> *character* ; otherwise, returns *false*. 



**Examples:** 



(alpha-char-p #\a) → true 



(alpha-char-p #\5) → false 



(alpha-char-p #\Newline) → false 



;; This next example presupposes an implementation 



;; in which #\*α* is a defined character. 



(alpha-char-p #\*α*) → implementation-dependent 



**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**alphanumericp**, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



 



 



