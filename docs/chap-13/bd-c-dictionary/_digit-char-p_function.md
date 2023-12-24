**digit-char-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"digit-char-p"}><b>digit-char-p</b></ClLinks> *char* &amp;optional *radix → weight* 



**Arguments and Values:** 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 







 



 



<ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . The default is 10. 



*weight*—either a non-negative *integer* less than <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



Tests whether *char* is a digit in the specified <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> (*i.e.*, with a weight less than <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>). If it is a digit in that <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>, its weight is returned as an *integer* ; otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



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



<ClLinks styled={true} term={"alphanumericp"}><b>alphanumericp</b></ClLinks> 



**Notes:** 



Digits are *graphic characters*. 



