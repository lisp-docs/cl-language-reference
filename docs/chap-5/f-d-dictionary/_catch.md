**catch** *Special Operator* 



**Syntax:** 



**catch** *tag \{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



*tag*—a *catch tag*; evaluated. 



*forms*—an *implicit progn*. 



*results*—if the *forms* exit normally, the *values* returned by the *forms*; if a throw occurs to the *tag*, the *values* that are thrown. 



**Description:** 



**catch** is used as the destination of a non-local control transfer by **throw**. *Tags* are used to find the **catch** to which a **throw** is transferring control. (catch ’foo *form*) catches a (throw ’foo *form*) but not a (throw ’bar *form*). 



The order of execution of **catch** follows: 



1\. *Tag* is evaluated. It serves as the name of the **catch**. 



2\. *Forms* are then evaluated as an implicit **progn**, and the results of the last *form* are returned unless a **throw** occurs. 



3\. If a **throw** occurs during the execution of one of the *forms*, control is transferred to the **catch** *form* whose *tag* is **eq** to the tag argument of the **throw** and which is the most recently established **catch** with that *tag*. No further evaluation of *forms* occurs. 



4\. The *tag established* by **catch** is *disestablished* just before the results are returned. 



If during the execution of one of the *forms*, a **throw** is executed whose tag is **eq** to the **catch** tag, then the values specified by the **throw** are returned as the result of the dynamically most recently established **catch** form with that tag. 



The mechanism for **catch** and **throw** works even if **throw** is not within the lexical scope of **catch**. **throw** must occur within the *dynamic extent* of the *evaluation* of the body of a **catch** with a corresponding *tag*. 



**Examples:**
```lisp
 

(catch ’dummy-tag 1 2 (throw ’dummy-tag 3) 4) *→* 3 

(catch ’dummy-tag 1 2 3 4) *→* 4 

(defun throw-back (tag) (throw tag t)) *→* THROW-BACK 

(catch ’dummy-tag (throw-back ’dummy-tag) 2) *→* T 

Data and Control 





;; Contrast behavior of this example with corresponding example of BLOCK. 

(catch ’c 

(flet ((c1 () (throw ’c 1))) 

(catch ’c (c1) (print ’unreachable)) 

2)) *→* 2 


```
**Exceptional Situations:** 



An error of *type* **control-error** is signaled if **throw** is done when there is no suitable **catch** *tag*. 



**See Also:** 



**throw**, Section 3.1 (Evaluation) 



**Notes:** 



It is customary for *symbols* to be used as *tags*, but any *object* is permitted. However, numbers should not be used because the comparison is done using **eq**. 



**catch** differs from **block** in that **catch** tags have dynamic *scope* while **block** names have *lexical scope*. 



