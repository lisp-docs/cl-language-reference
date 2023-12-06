**dolist** *Macro* 



**Syntax:** 



**dolist** (*var list-form* [*result-form*]) *\{declaration\}*\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a *symbol*. 



*list-form*—a *form*. 



*result-form*—a *form*. 



*declaration*—a **declare** *expression*; not evaluated. 



*tag*—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a **return** or **return-from** form is executed, the *values* passed from that *form*; otherwise, the *values* returned by the *result-form* or **nil** if there is no *result-form*. 



**Description:** 



**dolist** iterates over the elements of a *list*. The body of **dolist** is like a **tagbody**. It consists of a series of *tags* and *statements*. 



**dolist** evaluates *list-form*, which should produce a *list*. It then executes the body once for each element in the *list*, in the order in which the *tags* and *statements* occur, with *var* bound to the element. Then *result-form* is evaluated. *tags* label *statements*. 



At the time *result-form* is processed, *var* is bound to **nil**. 



An *implicit block* named **nil** surrounds **dolist**. **return** may be used to terminate the loop immediately without performing any further iterations, returning zero or more *values*. 



The *scope* of the binding of *var* does not include the *list-form*, but the *result-form* is included. 



It is *implementation-dependent* whether **dolist** *establishes* a new *binding* of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then *assigns* it on any subsequent iterations. 



**Examples:**
```lisp
 

(setq temp-two ’()) *→* NIL 

(dolist (temp-one ’(1 2 3 4) temp-two) (push temp-one temp-two)) *→* (4 3 2 1) (setq temp-two 0) *→* 0 



 

 

(dolist (temp-one ’(1 2 3 4)) (incf temp-two)) *→* NIL 

temp-two *→* 4 

(dolist (x ’(a b c d)) (prin1 x) (princ " ")) 

▷ A B C D 

*→* NIL 


```
**See Also:** 



**do**, **dotimes**, **tagbody**, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



