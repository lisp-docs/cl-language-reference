**char, schar** *Accessor* 



**Syntax:** 



**char** *string index → character* 



**schar** *string index → character* 



**(setf (char** *string index***)** *new-character***)** 



**(setf (schar** *string index***)** *new-character***)** 



**Arguments and Values:** 



*string*—for **char**, a *string*; for **schar**, a *simple string*. 



*index*—a *valid array index* for the *string*. 



*character*, *new-character*—a *character* . 



**Description:** 



**char** and **schar** *access* the *element* of *string* specified by *index*. 



**char** ignores *fill pointers* when *accessing elements*. 



**Examples:**
```lisp
 



(setq my-simple-string (make-string 6 :initial-element #\A)) *→* "AAAAAA" 



(schar my-simple-string 4) *→* #\A 



(setf (schar my-simple-string 4) #\B) *→* #\B 



my-simple-string *→* "AAAABA" 



(setq my-filled-string 



(make-array 6 :element-type ’character 



:fill-pointer 5 



:initial-contents my-simple-string)) 



*→* "AAAAB" 



(char my-filled-string 4) *→* #\B 



(char my-filled-string 5) *→* #\A 



(setf (char my-filled-string 3) #\C) *→* #\C 



(setf (char my-filled-string 5) #\D) *→* #\D 



(setf (fill-pointer my-filled-string) 6) *→* 6 



my-filled-string *→* "AAACBD" 







 



 




```
**See Also:** 



**aref**, **elt**, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



(char s j) *≡* (aref (the string s) j) 



