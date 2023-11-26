**2.1.4.5.1 Examples of Multiple Escape Characters** 

;; The following examples assume the readtable case of \*readtable\* 

;; and \*print-case\* are both :upcase. 

(eq ’abc ’ABC) *→ true* 

(eq ’abc ’|ABC|) *→ true* 

(eq ’abc ’a|B|c) *→ true* 

(eq ’abc ’|abc|) *→ false* 

