**digit-char-p** *Function* 



**Syntax:** 



**digit-char-p** *char* &amp;optional *radix → weight* 



**Arguments and Values:** 



*char*—a *character* . 







 



 



*radix*—a *radix* . The default is 10. 



*weight*—either a non-negative *integer* less than *radix*, or *false*. 



**Description:** 



Tests whether *char* is a digit in the specified *radix* (*i.e.*, with a weight less than *radix*). If it is a digit in that *radix*, its weight is returned as an *integer* ; otherwise **nil** is returned. 



**Examples:**
```lisp

(digit-char-p #\5) → 5 
(digit-char-p #\5 2) → false 
(digit-char-p #\A) → false 
(digit-char-p #\a) → false 
(digit-char-p #\A 11) → 10 
(digit-char-p #\a 11) → 10 
(mapcar #’(lambda (radix) 
	    (map ’list #’(lambda (x) (digit-char-p x radix)) 
		  "059AaFGZ")) 
	  ’(2 8 10 16 36)) 
→ ((0 NIL NIL NIL NIL NIL NIL NIL) 
     (0 5 NIL NIL NIL NIL NIL NIL) 
     (0 5 9 NIL NIL NIL NIL NIL) 
     (0 5 9 10 10 15 NIL NIL) 
     (0 5 9 10 10 15 16 35)) 

```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**See Also:** 



**alphanumericp** 



**Notes:** 



Digits are *graphic characters*. 



