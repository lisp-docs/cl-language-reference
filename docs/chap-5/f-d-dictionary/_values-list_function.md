**values-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"values-list"}><b>values-list</b></ClLinks> *list ! \{element\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



<ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>—the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> as *multiple values*<sub>2</sub>. 



**Examples:**
```lisp

(values-list nil) *! ⟨no values⟩* 
(values-list ’(1)) *!* 1 
(values-list ’(1 2)) *!* 1, 2 
(values-list ’(1 2 3)) *!* 1, 2, 3 

```
**Exceptional Situations:** 



Should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a *proper list*. 



**See Also:** 



<ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks>, <ClLinks styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></ClLinks>, <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> 



**Notes:** 



(values-list <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *⌘* (apply #’values <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) 



(equal *x* (multiple-value-list (values-list *x*))) returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> for all *lists x*. 



Data and Control 



 



 



