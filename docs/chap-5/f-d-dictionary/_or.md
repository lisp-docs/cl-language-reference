**or** *Macro* 



**Syntax:** 



**or** *\{form\}*\* *→ \{results\}*\* 



**Arguments and Values:** 



*form*—a *form*. 



*results*—the *values* or *primary value* (see below) resulting from the evaluation of the last *form* executed or **nil**. 



**Description:** 



**or** evaluates each *form*, one at a time, from left to right. The evaluation of all *forms* terminates when a *form* evaluates to *true* (*i.e.*, something other than **nil**). 



Data and Control 











If the *evaluation* of any *form* other than the last returns a *primary value* that is *true*, **or** immediately returns that *value* (but no additional *values*) without evaluating the remaining *forms*. If every *form* but the last returns *false* as its *primary value*, **or** returns all *values* returned by the last *form*. If no *forms* are supplied, **or** returns **nil**. 



**Examples:**
```lisp
 

(or) *→* NIL 

(setq temp0 nil temp1 10 temp2 20 temp3 30) *→* 30 

(or temp0 temp1 (setq temp2 37)) *→* 10 

temp2 *→* 20 

(or (incf temp1) (incf temp2) (incf temp3)) *→* 11 

temp1 *→* 11 

temp2 *→* 20 

temp3 *→* 30 

(or (values) temp1) *→* 11 

(or (values temp1 temp2) temp3) *→* 11 

(or temp0 (values temp1 temp2)) *→* 11, 20 

(or (values temp0 temp1) (values temp2 temp3)) *→* 20, 30 


```
**See Also:** 



**and**, **some**, **unless** 



