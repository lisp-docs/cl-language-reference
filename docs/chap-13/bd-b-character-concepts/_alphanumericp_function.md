**alphanumericp** *Function* 



**Syntax:** 



**alphanumericp** *character → generalized-boolean* 



**Arguments and Values:** 



*character*—a *character* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *character* is an *alphabetic*<sub>1</sub> *character* or a *numeric character* ; otherwise, returns *false*. 



**Examples:** 



(alphanumericp #\Z) → true 



(alphanumericp #\9) → true 



(alphanumericp #\Newline) → false 



(alphanumericp #\#) → false 



**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**alpha-char-p**, **graphic-char-p**, **digit-char-p** 



**Notes:** 



Alphanumeric characters are graphic as defined by **graphic-char-p**. The alphanumeric characters are a subset of the graphic characters. The standard characters A through Z, a through z, and 0 through 9 are alphanumeric characters. 



(alphanumericp x) 



*≡* (or (alpha-char-p x) (not (null (digit-char-p x)))) 







 



 



