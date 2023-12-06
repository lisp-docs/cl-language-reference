**values-list** *Function* 



**Syntax:** 



**values-list** *list ! \{element\}*\* 



**Arguments and Values:** 



*list*—a *list*. 



*elements*—the *elements* of the *list*. 



**Description:** 



Returns the *elements* of the *list* as *multiple values*<sub>2</sub>. 



**Examples:**
```lisp
 



(values-list nil) *! hno valuesi* 



(values-list ’(1)) *!* 1 



(values-list ’(1 2)) *!* 1, 2 



(values-list ’(1 2 3)) *!* 1, 2, 3 




```
**Exceptional Situations:** 



Should signal **type-error** if its argument is not a *proper list*. 



**See Also:** 



**multiple-value-bind**, **multiple-value-list**, **multiple-values-limit**, **values** 



**Notes:** 



(values-list *list*) *⌘* (apply #’values *list*) 



(equal *x* (multiple-value-list (values-list *x*))) returns *true* for all *lists x*. 



Data and Control 



 



 



