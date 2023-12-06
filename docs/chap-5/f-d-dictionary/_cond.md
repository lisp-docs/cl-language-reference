**cond** *Macro* 



**Syntax:** 



**cond** *\{↓clause\}*\* *→ \{result\}*\* 



*clause::*=(*test-form \{form\}*\*) 



**Arguments and Values:** 



*test-form*—a *form*. 



*forms*—an *implicit progn*. 



*results*—the *values* of the *forms* in the first *clause* whose *test-form yields true*, or the *primary value* of the *test-form* if there are no *forms* in that *clause*, or else **nil** if no *test-form yields true*. 



**Description:** 



**cond** allows the execution of *forms* to be dependent on *test-form*. 



Data and Control 











*Test-forms* are evaluated one at a time in the order in which they are given in the argument list until a *test-form* is found that evaluates to *true*. 



If there are no *forms* in that clause, the *primary value* of the *test-form* is returned by the **cond** *form*. Otherwise, the *forms* associated with this *test-form* are evaluated in order, left to right, as an *implicit progn*, and the *values* returned by the last *form* are returned by the **cond** *form*. 



Once one *test-form* has *yielded true*, no additional *test-forms* are *evaluated*. If no *test-form yields true*, **nil** is returned. 



**Examples:**
```lisp
 



(defun select-options () 



(cond ((= a 1) (setq a 2)) 



((= a 2) (setq a 3)) 



((and (= a 3) (floor a 2))) 



(t (floor a 3)))) *→* SELECT-OPTIONS 



(setq a 1) *→* 1 



(select-options) *→* 2 



a *→* 2 



(select-options) *→* 3 



a *→* 3 



(select-options) *→* 1 



(setq a 5) *→* 5 



(select-options) *→* 1, 2 




```
**See Also:** 



**if**, **case**. 



