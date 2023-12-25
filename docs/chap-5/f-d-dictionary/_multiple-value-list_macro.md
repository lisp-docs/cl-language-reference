**multiple-value-list** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> *form ! list* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



Data and Control 



 



 



**Description:** 



<ClLinks styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> evaluates <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and creates a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the *multiple values*<sub>2</sub> it returns. 

**Examples:**
```lisp
(multiple-value-list (floor -3 4)) *!* (-1 1) 
```
**See Also:** 



<ClLinks styled={true} term={"values-list"}><b>values-list</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks> and <ClLinks styled={true} term={"values-list"}><b>values-list</b></ClLinks> are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 



