**multiple-value-setq** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> *vars form ! result* 



**Arguments and Values:** 



*vars*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are either *variable names* or <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of *symbol macros*. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*result*—The *primary value* returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks> assigns values to *vars*. 



The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated, and each *var* is *assigned* to the corresponding <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> returned by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. If there are more *vars* than <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is *assigned* to the extra *vars*. If there are more <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> than *vars*, the extra <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are discarded. 



If any <i>var</i> is the <i>name</i> of a <i>symbol macro</i>, then it is <i>assigned</i> as if by <b>setf</b>. Specifically, (multiple-value-setq (<i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>) 



is defined to always behave in the same way as 



(values (setf (values <i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>)) 



in order that the rules for order of evaluation and side-e↵ects be consistent with those used by <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. See Section 5.1.2.3 (VALUES Forms as Places). 



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



<ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>, <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> 



Data and Control 



 



 



