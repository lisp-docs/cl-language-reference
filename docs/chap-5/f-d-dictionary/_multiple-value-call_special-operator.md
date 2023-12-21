**multiple-value-call** *Special Operator* 



**Syntax:** 



**multiple-value-call** *function-form form*\* *! \{result\}*\* 



**Arguments and Values:** 



*function-form*—a *form*; evaluated to produce *function*. 



*function*—a *function designator* resulting from the evaluation of *function-form*. 



*form*—a *form*. 



*results*—the *values* returned by the *function*. 



**Description:** 



Applies *function* to a *list* of the *objects* collected from groups of *multiple values*<sub>2</sub>. 



**multiple-value-call** first evaluates the *function-form* to obtain *function*, and then evaluates each *form*. All the values of each *form* are gathered together (not just one value from each) and given as arguments to the *function*. 



**Examples:**
```lisp

(multiple-value-call #’list 1 ’/ (values 2 3) ’/ (values) ’/ (floor 2.5)) 
*!* (1 / 2 3 / / 2 0.5) 
(+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 4) 
*!* 5 
(multiple-value-call #’+ (floor 5 3) (floor 19 4)) *⌘* (+ 1 2 4 3) 
*!* 10 

```
**See Also:** 



**multiple-value-list**, **multiple-value-bind** 



