**name-char** *Function* 



**Syntax:** 



**name-char** *name → char-p* 



**Arguments and Values:** 



*name*—a *string designator* . 



*char-p*—a *character* or **nil**. 



**Description:** 



Returns the *character object* whose *name* is *name* (as determined by **string-equal**—*i.e.*, lookup is not case sensitive). If such a *character* does not exist, **nil** is returned. 



**Examples:**
```lisp
 



(name-char ’space) → #\Space 



(name-char "space") → #\Space 



(name-char "Space") → #\Space 



(let ((x (char-name #\a))) 



(or (not x) (eql (name-char x) #\a))) → true 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *name* is not a *string designator* . 



**See Also:** 



**char-name** 







 



 





