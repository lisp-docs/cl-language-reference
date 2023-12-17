**char-int** *Function* 



**Syntax:** 



**char-int** *character → integer* 



**Arguments and Values:** 



*character*—a *character* . 



*integer*—a non-negative *integer* . 



**Description:** 



Returns a non-negative *integer* encoding the *character* object. The manner in which the *integer* is computed is *implementation-dependent*. In contrast to **sxhash**, the result is not guaranteed to be independent of the particular *Lisp image*. 



If *character* has no *implementation-defined attributes*, the results of **char-int** and **char-code** are the same. 



(char= *c1 c2*) *≡* (= (char-int *c1*) (char-int *c2*)) 



for characters *c1* and *c2*. 



**Examples:**
```lisp
 



(char-int #\A) → 65 ; implementation A 



(char-int #\A) → 577 ; implementation B 



(char-int #\A) → 262145 ; implementation C 




```
**See Also:** 



**char-code** 



