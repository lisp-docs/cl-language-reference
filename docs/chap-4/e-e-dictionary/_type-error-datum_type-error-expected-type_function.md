**type-error-datum, type-error-expected-type** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"type-error-datum"}><b>type-error-datum</b></ClLinks> *condition → datum* 



<ClLinks styled={true} term={"type-error-expected-type"}><b>type-error-expected-type</b></ClLinks> *condition → expected-type* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks>. 



*datum*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*expected-type*—a *type specifier* . 



**Description:** 



<ClLinks styled={true} term={"type-error-datum"}><b>type-error-datum</b></ClLinks> returns the offending datum in the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> represented by the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



<ClLinks styled={true} term={"type-error-expected-type"}><b>type-error-expected-type</b></ClLinks> returns the expected type of the offending datum in the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> represented by the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



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
→ 10 
```
**See Also:** 



<ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks>, Chapter 9 (Conditions) 



