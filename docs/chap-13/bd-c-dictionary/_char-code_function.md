**char-code** *Function* 



**Syntax:** 



**char-code** *character → code* 



**Arguments and Values:** 



*character*—a *character* . 



*code*—a *character code*. 



**Description:** 



**char-code** returns the *code attribute* of *character*. 



**Examples:**
```lisp


;; An implementation using ASCII character encoding 

;; might return these values: 

(char-code #\$) → 36 

(char-code #\a) → 97 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**char-code-limit** 







 



 



