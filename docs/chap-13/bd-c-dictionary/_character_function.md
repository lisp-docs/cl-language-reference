**character** *Function* 



**Syntax:** 



**character** *character → denoted-character* 



**Arguments and Values:** 



*character*—a *character designator* . 



*denoted-character*—a *character* . 



**Description:** 



Returns the *character* denoted by the *character designator* . 







 



 



**Examples:**
```lisp

(character #\a) → #\a 
(character "a") → #\a 
(character ’a) → #\A 
(character ’\a) → #\a 
(character 65.) is an error. 
(character ’apple) is an error. 

```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *object* is not a *character designator* . 



**See Also:** 



**coerce** 



**Notes:** 



(character *object*) *≡* (coerce *object* ’character) 



