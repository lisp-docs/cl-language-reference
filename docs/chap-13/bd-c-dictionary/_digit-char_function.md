**digit-char** *Function* 



**Syntax:** 



**digit-char** *weight* &amp;optional *radix → char* 



**Arguments and Values:** 



*weight*—a non-negative *integer* . 



*radix*—a *radix* . The default is 10. 



*char*—a *character* or *false*. 



**Description:** 



If *weight* is less than *radix*, **digit-char** returns a *character* which has that *weight* when considered as a digit in the specified radix. If the resulting *character* is to be an *alphabetic*<sub>1</sub> *character* , it will be an uppercase *character* . 



If *weight* is greater than or equal to *radix*, **digit-char** returns *false*. 



**Examples:**
```lisp


(digit-char 0) → #\0 

(digit-char 10 11) → #\A 

(digit-char 10 10) → false 

(digit-char 7) → #\7 

(digit-char 12) → false 

(digit-char 12 16) → #\C ;not #\c 

(digit-char 6 2) → false 

(digit-char 1 2) → #\1 


```
**See Also:** 



**digit-char-p**, **graphic-char-p**, Section 2.1 (Character Syntax) 



**Notes:** 



