```lisp

;; The following examples assume the readtable case of \*readtable\* 
;; and \*print-case\* are both :upcase. 
(eq ’abc ’ABC) *→ true* 
(eq ’abc ’|ABC|) *→ true* 
(eq ’abc ’a|B|c) *→ true* 
(eq ’abc ’|abc|) *→ false* 

```