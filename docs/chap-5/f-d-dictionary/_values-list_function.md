**values-list** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"values-list"}><b>values-list</b></ClLinks> *list ! \{element\}*\* 



**Arguments and Values:** 



<ClLinks  term={"list"}><i>list</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



<ClLinks  term={"element"}><i>elements</i></ClLinks>—the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Returns the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks> as *multiple values*<sub>2</sub>. 



**Examples:**
```lisp
(values-list nil) *! ⟨no values⟩* 
(values-list ’(1)) *!* 1 
(values-list ’(1 2)) *!* 1, 2 
(values-list ’(1 2 3)) *!* 1, 2, 3 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a *proper list*. 



**See Also:** 



<ClLinks  term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks>, <ClLinks  term={"multiple-value-list"}><b>multiple-value-list</b></ClLinks>, <ClLinks  term={"multiple-values-limit"}><b>multiple-values-limit</b></ClLinks>, <ClLinks  term={"values"}><b>values</b></ClLinks> 



**Notes:** 



(values-list <ClLinks  term={"list"}><i>list</i></ClLinks>) *⌘* (apply #’values <ClLinks  term={"list"}><i>list</i></ClLinks>) 



(equal *x* (multiple-value-list (values-list *x*))) returns <ClLinks  term={"true"}><i>true</i></ClLinks> for all *lists x*. 



Data and Control 



 



 



