**multiple-value-setq** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> *vars form ! result* 



**Arguments and Values:** 



*vars*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are either *variable names* or <ClLinks  term={"name"}><i>names</i></ClLinks> of *symbol macros*. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*result*—The *primary value* returned by the <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> assigns values to *vars*. 



The <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated, and each *var* is *assigned* to the corresponding <ClLinks  term={"value"}><i>value</i></ClLinks> returned by that <ClLinks  term={"form"}><i>form</i></ClLinks>. If there are more *vars* than <ClLinks  term={"value"}><i>values</i></ClLinks> returned, <ClLinks  term={"nil"}><b>nil</b></ClLinks> is *assigned* to the extra *vars*. If there are more <ClLinks  term={"value"}><i>values</i></ClLinks> than *vars*, the extra <ClLinks  term={"value"}><i>values</i></ClLinks> are discarded. 



If any <i>var</i> is the <i>name</i> of a <i>symbol macro</i>, then it is <i>assigned</i> as if by <b>setf</b>. Specifically, (multiple-value-setq (<i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>) 



is defined to always behave in the same way as 



(values (setf (values <i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>)) 



in order that the rules for order of evaluation and side-e↵ects be consistent with those used by <ClLinks  term={"setf"}><b>setf</b></ClLinks>. See Section 5.1.2.3 (VALUES Forms as Places). 



**Examples:**
```lisp
(multiple-value-setq (quotient remainder) (truncate 3.2 2)) *!* 1 
quotient *!* 1 
remainder *!* 1.2 
(multiple-value-setq (a b c) (values 1 2)) *!* 1 
a *!* 1 
b *!* 2 
c *!* NIL 
(multiple-value-setq (a b) (values 4 5 6)) *!* 4 
a *!* 4 
b *!* 5 
```
**See Also:** 



<ClLinks  term={"setq"}><b>setq</b></ClLinks>, <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



Data and Control 



 



 



