**type-error-datum, type-error-expected-type** *Function* 



**Syntax:** 



**type-error-datum** *condition → datum* 



**type-error-expected-type** *condition → expected-type* 



**Arguments and Values:** 



*condition*—a *condition* of *type* **type-error**. 



*datum*—an *object*. 



*expected-type*—a *type specifier* . 



**Description:** 



**type-error-datum** returns the offending datum in the *situation* represented by the *condition*. 



**type-error-expected-type** returns the expected type of the offending datum in the *situation* represented by the *condition*. 



**Examples:**
```lisp
 



(defun fix-digits (condition) 



(check-type condition type-error) 



(let\* ((digits ’(zero one two three four 



five six seven eight nine))  







(val (position (type-error-datum condition) digits))) 



(if (and val (subtypep ’fixnum (type-error-expected-type condition))) 



(store-value 7)))) 



(defun foo (x) 



(handler-bind ((type-error #’fix-digits)) 



(check-type x number) 



(+ x 3))) 



(foo ’seven) 



*→* 10 




```
**See Also:** 



**type-error**, Chapter 9 (Conditions) 



