**char, schar** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"char"}><b>char</b></ClLinks> *string index → character* 



<ClLinks  term={"schar"}><b>schar</b></ClLinks> *string index → character* 



**(setf (char** *string index***)** *new-character***)** 



**(setf (schar** *string index***)** *new-character***)** 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—for <ClLinks  term={"char"}><b>char</b></ClLinks>, a <ClLinks  term={"string"}><i>string</i></ClLinks>; for <ClLinks  term={"schar"}><b>schar</b></ClLinks>, a *simple string*. 



*index*—a *valid array index* for the <ClLinks  term={"string"}><i>string</i></ClLinks>. 



<ClLinks  term={"character"}><i>character</i></ClLinks>, *new-character*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



**Description:** 



<ClLinks  term={"char"}><b>char</b></ClLinks> and <ClLinks  term={"schar"}><b>schar</b></ClLinks> <ClLinks  term={"access"}><i>access</i></ClLinks> the <ClLinks  term={"element"}><i>element</i></ClLinks> of <ClLinks  term={"string"}><i>string</i></ClLinks> specified by *index*. 



<ClLinks  term={"char"}><b>char</b></ClLinks> ignores *fill pointers* when *accessing elements*. 



**Examples:**
```lisp
(setq my-simple-string (make-string 6 :initial-element #\A)) → "AAAAAA" 
(schar my-simple-string 4) → #\A 
(setf (schar my-simple-string 4) #\B) → #\B 
my-simple-string → "AAAABA" 
(setq my-filled-string 
      (make-array 6 :element-type ’character 
		  :fill-pointer 5 
		  :initial-contents my-simple-string)) 
→ "AAAAB" 
(char my-filled-string 4) → #\B 
(char my-filled-string 5) → #\A 
(setf (char my-filled-string 3) #\C) → #\C 
(setf (char my-filled-string 5) #\D) → #\D 
(setf (fill-pointer my-filled-string) 6) → 6 
my-filled-string → "AAACBD" 


```
**See Also:** 



<ClLinks  term={"aref"}><b>aref</b></ClLinks>, <ClLinks  term={"elt"}><b>elt</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



(char s j) *≡* (aref (the string s) j) 



