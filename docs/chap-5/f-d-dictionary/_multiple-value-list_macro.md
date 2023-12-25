**multiple-value-list** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> *form ! list* 



**Arguments and Values:** 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks  term={"list"}><i>list</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Data and Control 



 



 



**Description:** 



<ClLinks  term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> evaluates <ClLinks  term={"form"}><i>form</i></ClLinks> and creates a <ClLinks  term={"list"}><i>list</i></ClLinks> of the *multiple values*<sub>2</sub> it returns. 

**Examples:**
```lisp
(multiple-value-list (floor -3 4)) *!* (-1 1) 
```
**See Also:** 



<ClLinks  term={"values-list"}><b>values-list</b></ClLinks>, <ClLinks  term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> 



**Notes:** 



<ClLinks  term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> and <ClLinks  term={"values-list"}><b>values-list</b></ClLinks> are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 



