**2.1.4.6.1 Examples of Single Escape Characters** 

;; The following examples assume the readtable case of \*readtable\* 

;; and \*print-case\* are both :upcase. 

(eq ’abc ’\A\B\C) *→ true* 

(eq ’abc ’a\Bc) *→ true* 

(eq ’abc ’\ABC) *→ true* 

(eq ’abc ’\abc) *→ false* 

