**remf** *Macro* 



**Syntax:** 



**remf** *place indicator → generalized-boolean* 



**Arguments and Values:** 



*place*—a *place*. 



*indicator*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**remf** removes from the *property list* stored in *place* a *property*<sub>1</sub> with a *property indicator identical* to *indicator*. If there are multiple *properties*<sub>1</sub> with the *identical* key, **remf** only removes the first such *property*. **remf** returns *false* if no such *property* was found, or *true* if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. **remf** is permitted to either **setf** *place* or to **setf** any part, **car** or **cdr**, of the *list structure* held by that *place*. 



For information about the *evaluation* of *subforms* of *place*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



**Examples:**
```lisp
 



(setq x (cons () ())) *→* (NIL) 



(setf (getf (car x) ’prop1) ’val1) *→* VAL1 



(remf (car x) ’prop1) *→ true* 



(remf (car x) ’prop1) *→ false* 




```
**Side Effects:** 



The property list stored in *place* is modified. 



**See Also:** 



**remprop**, **getf** 



