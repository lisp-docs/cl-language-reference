**prog1, prog2** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"prog1"}><b>prog1</b></ClLinks> *first-form \{form\}*\* *! result-1* 



<ClLinks  term={"prog2"}><b>prog2</b></ClLinks> *first-form second-form \{form\}*\* *! result-2* 



**Arguments and Values:** 



*first-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*second-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*; evaluated as described below. 



*result-1*—the *primary value* resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of *first-form*. 



Data and Control 



 



 



**prog1, prog2** 



*result-2*—the *primary value* resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of *second-form*. 



**Description:** 



<ClLinks  term={"prog1"}><b>prog1</b></ClLinks> *evaluates first-form* and then <ClLinks  term={"form"}><i>forms</i></ClLinks>, *yielding* as its only <ClLinks  term={"value"}><i>value</i></ClLinks> the *primary value yielded* by *first-form*. 



<ClLinks  term={"prog2"}><b>prog2</b></ClLinks> *evaluates first-form*, then *second-form*, and then <ClLinks  term={"form"}><i>forms</i></ClLinks>, *yielding* as its only <ClLinks  term={"value"}><i>value</i></ClLinks> the *primary value yielded* by *first-form*. 



**Examples:**
```lisp
(setq temp 1) *!* 1 
(prog1 temp (print temp) (incf temp) (print temp)) 
▷ 1 
▷ 2 
*!* 1 
(prog1 temp (setq temp nil)) *!* 2 
temp *!* NIL 
(prog1 (values 1 2 3) 4) *!* 1 
(setq temp (list ’a ’b ’c)) 
(prog1 (car temp) (setf (car temp) ’alpha)) *!* A 
temp *!* (ALPHA B C) 
(flet ((swap-symbol-values (x y) 
	 (setf (symbol-value x) 
	       (prog1 (symbol-value y) 
		 (setf (symbol-value y) (symbol-value x)))))) 
  (let ((\*foo\* 1) (\*bar\* 2)) 
    (declare (special \*foo\* \*bar\*)) 
    (swap-symbol-values ’\*foo\* ’\*bar\*) 
    (values \*foo\* \*bar\*))) 
*!* 2, 1 
(setq temp 1) *!* 1 
(prog2 (incf temp) (incf temp) (incf temp)) *!* 3 
temp *!* 4 
(prog2 1 (values 2 3 4) 5) *!* 2 
```
**See Also:** 



<ClLinks  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks>, <ClLinks  term={"progn"}><b>progn</b></ClLinks> 



**Notes:** 



<ClLinks  term={"prog1"}><b>prog1</b></ClLinks> and <ClLinks  term={"prog2"}><b>prog2</b></ClLinks> are typically used to <ClLinks  term={"evaluate"}><i>evaluate</i></ClLinks> one or more <ClLinks  term={"form"}><i>forms</i></ClLinks> with side e↵ects and return a <ClLinks  term={"value"}><i>value</i></ClLinks> that must be computed before some or all of the side e↵ects happen. 



(prog1 <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) *⌘* (values (multiple-value-prog1 <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)) 



(prog2 *form1 \{form\}*\*) *⌘* (let () *form1* (prog1 <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*)) 







 



 



