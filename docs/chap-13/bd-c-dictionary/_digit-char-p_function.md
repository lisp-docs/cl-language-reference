**digit-char-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"digit-char-p"}><b>digit-char-p</b></DictionaryLink> *char* &amp;optional *radix → weight* 



**Arguments and Values:** 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 







 



 



<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . The default is 10. 



*weight*—either a non-negative *integer* less than <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



Tests whether *char* is a digit in the specified <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> (*i.e.*, with a weight less than <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>). If it is a digit in that <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>, its weight is returned as an *integer* ; otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp

(digit-char-p #\5) *→* 5 
(digit-char-p #\5 2) *→ false* 
(digit-char-p #\A) *→ false* 
(digit-char-p #\a) *→ false* 
(digit-char-p #\A 11) *→* 10 
(digit-char-p #\a 11) *→* 10 
(mapcar #’(lambda (radix) 
	    (map ’list #’(lambda (x) (digit-char-p x radix)) 
		  "059AaFGZ")) 
	  ’(2 8 10 16 36)) 
*→* ((0 NIL NIL NIL NIL NIL NIL NIL) 
     (0 5 NIL NIL NIL NIL NIL NIL) 
     (0 5 9 NIL NIL NIL NIL NIL) 
     (0 5 9 10 10 15 NIL NIL) 
     (0 5 9 10 10 15 16 35)) 

```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**See Also:** 



<DictionaryLink styled={true} term={"alphanumericp"}><b>alphanumericp</b></DictionaryLink> 



**Notes:** 



Digits are *graphic characters*. 



