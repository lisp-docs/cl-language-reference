**graphic-char-p** *Function* 



**Syntax:** 



**graphic-char-p** *char → generalized-boolean* 



**Arguments and Values:** 



*char*—a *character* . 







 



 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *character* is a *graphic character* ; otherwise, returns *false*. 



**Examples:**
```lisp


(graphic-char-p #\G) → true 

(graphic-char-p #\#) → true 

(graphic-char-p #\Space) → true 

(graphic-char-p #\Newline) → false 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**read**, Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



