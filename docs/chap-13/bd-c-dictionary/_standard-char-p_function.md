**standard-char-p** *Function* 



**Syntax:** 



**standard-char-p** *character → generalized-boolean* 



**Arguments and Values:** 



*character*—a *character* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *character* is of *type* **standard-char**; otherwise, returns *false*. 



**Examples:**
```lisp


(standard-char-p #\Space) → true 

(standard-char-p #\~) → true 

;; This next example presupposes an implementation 

;; in which #\Bell is a defined character. 

(standard-char-p #\Bell) → false 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 







 



 



**char-upcase, char-downcase** 



