**char-name** *Function* 



**Syntax:** 



**char-name** *character → name* 



**Arguments and Values:** 



*character*—a *character* . 



*name*—a *string* or **nil**. 



**Description:** 



Returns a *string* that is the *name* of the *character*, or **nil** if the *character* has no *name*. 



All *non-graphic* characters are required to have *names* unless they have some *implementation-defined attribute* which is not *null*. Whether or not other *characters* have *names* is *implementation dependent*. 



The *standard characters hNewlinei* and *hSpacei* have the respective names "Newline" and "Space". The *semi-standard characters hTabi*, *hPagei*, *hRubouti*, *hLinefeedi*, *hReturni*, and *hBackspacei* (if they are supported by the *implementation*) have the respective names "Tab", "Page", "Rubout", "Linefeed", "Return", and "Backspace" (in the indicated case, even though name lookup by “#\” and by the *function* **name-char** is not case sensitive). 



**Examples:**
```lisp
 

(char-name #\ ) → "Space" 

(char-name #\Space) → "Space" 

(char-name #\Page) → "Page" 

(char-name #\a) 

→ NIL 

<i><sup>or</sup>→</i> "LOWERCASE-a" 

<i><sup>or</sup>→</i> "Small-A" 

<i><sup>or</sup>→</i> "LA01" 

(char-name #\A) 

→ NIL 

<i><sup>or</sup>→</i> "UPPERCASE-A" 

<i><sup>or</sup>→</i> "Capital-A" 

<i><sup>or</sup>→</i> "LA02" 

;; Even though its CHAR-NAME can vary, #\A prints as #\A 

(prin1-to-string (read-from-string (format nil "#\\&#126;A" (or (char-name #\A) "A")))) → "#\\A" 



 

 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *character* is not a *character* . 



**See Also:** 



**name-char**, Section 22.1.3.2 (Printing Characters) 



**Notes:** 



*Non-graphic characters* having *names* are written by the *Lisp printer* as “#\” followed by the their *name*; see Section 22.1.3.2 (Printing Characters). 



