*∗***print-escape***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*true*. 



**Description:** 



If *false*, escape characters and *package prefixes* are not output when an expression is printed. 



If *true*, an attempt is made to print an *expression* in such a way that it can be read again to produce an **equal** *expression*. (This is only a guideline; not a requirement. See **\*print-readably\***.) 



For more specific details of how the *value* of **\*print-escape\*** affects the printing of certain *types*, see Section 22.1.3 (Default Print-Object Methods). 



**Examples:**
```lisp


(let ((\*print-escape\* t)) (write #\a)) 







▷ #\a 

→ #\a 

(let ((\*print-escape\* nil)) (write #\a)) 

▷ a 

→ #\a 


```
**Affected By:** 



**princ**, **prin1**, **format** 



**See Also:** 



**write**, **readtable-case** 



**Notes:** 



**princ** effectively binds **\*print-escape\*** to *false*. **prin1** effectively binds **\*print-escape\*** to *true*. 