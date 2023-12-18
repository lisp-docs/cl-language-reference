*∗***print-case***∗ Variable* 



**Value Type:** 



One of the *symbols* :upcase, :downcase, or :capitalize. 



**Initial Value:** 



The *symbol* :upcase. 



**Description:** 



The *value* of **\*print-case\*** controls the case (upper, lower, or mixed) in which to print any uppercase characters in the names of *symbols* when vertical-bar syntax is not used. 



**\*print-case\*** has an effect at all times when the *value* of **\*print-escape\*** is *false*. **\*print-case\*** also has an effect when the *value* of **\*print-escape\*** is *true* unless inside an escape context (*i.e.*, unless between *vertical-bars* or after a *slash*). 



**Examples:**
```lisp


(defun test-print-case () 

  (dolist (\*print-case\* ’(:upcase :downcase :capitalize)) 

    (format t "~&~S ~S~%" ’this-and-that ’|And-something-elSE|))) 

→ TEST-PC 

;; Although the choice of which characters to escape is specified by 

;; \*PRINT-CASE\*, the choice of how to escape those characters 

;; (i.e., whether single escapes or multiple escapes are used) 

;; is implementation-dependent. The examples here show two of the 

;; many valid ways in which escaping might appear. 







(test-print-case) ;Implementation A 

▷ THIS-AND-THAT |And-something-elSE| 

▷ this-and-that a\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 

▷ This-And-That A\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 

→ NIL 

(test-print-case) ;Implementation B 

▷ THIS-AND-THAT |And-something-elSE| 

▷ this-and-that a|nd-something-el|se 

▷ This-And-That A|nd-something-el|se 

→ NIL 


```
**See Also:** 



**write** 



**Notes:** 



**read** normally converts lowercase characters appearing in *symbols* to corresponding uppercase characters, so that internally print names normally contain only uppercase characters. 



If **\*print-escape\*** is *true*, lowercase characters in the *name* of a *symbol* are always printed in lowercase, and are preceded by a single escape character or enclosed by multiple escape characters; uppercase characters in the *name* of a *symbol* are printed in upper case, in lower case, or in mixed case so as to capitalize words, according to the value of **\*print-case\***. The convention for what constitutes a “word” is the same as for **string-capitalize**. 



