**multiple-value-list** *Macro* 



**Syntax:** 



**multiple-value-list** *form ! list* 



**Arguments and Values:** 



*form*—a *form*; evaluated as described below. 



*list*—a *list* of the *values* returned by *form*. 



Data and Control 



 



 



**Description:** 



**multiple-value-list** evaluates *form* and creates a *list* of the *multiple values*<sub>2</sub> it returns. **Examples:**
```lisp
 



(multiple-value-list (floor -3 4)) *!* (-1 1) 




```
**See Also:** 



**values-list**, **multiple-value-call** 



**Notes:** 



**multiple-value-list** and **values-list** are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 



