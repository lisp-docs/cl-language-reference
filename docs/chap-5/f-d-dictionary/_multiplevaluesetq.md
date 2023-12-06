**multiple-value-setq** *Macro* 



**Syntax:** 



**multiple-value-setq** *vars form ! result* 



**Arguments and Values:** 



*vars*—a *list* of *symbols* that are either *variable names* or *names* of *symbol macros*. 



*form*—a *form*. 



*result*—The *primary value* returned by the *form*. 



**Description:** 



**multiple-value-setq** assigns values to *vars*. 



The *form* is evaluated, and each *var* is *assigned* to the corresponding *value* returned by that *form*. If there are more *vars* than *values* returned, **nil** is *assigned* to the extra *vars*. If there are more *values* than *vars*, the extra *values* are discarded. 



If any <i>var</i> is the <i>name</i> of a <i>symbol macro</i>, then it is <i>assigned</i> as if by <b>setf</b>. Specifically, (multiple-value-setq (<i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>) 



is defined to always behave in the same way as 



(values (setf (values <i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>)) 



in order that the rules for order of evaluation and side-e↵ects be consistent with those used by **setf**. See Section 5.1.2.3 (VALUES Forms as Places). 



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



**setq**, **symbol-macrolet** 



Data and Control 



 



 



