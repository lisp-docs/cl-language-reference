**special-operator-p** *Function* 



**Syntax:** 



**special-operator-p** *symbol ! generalized-boolean* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *symbol* is a *special operator* ; otherwise, returns *false*. 



**Examples:**
```lisp

(special-operator-p ’if) *! true* 
(special-operator-p ’car) *! false* 
(special-operator-p ’one) *! false* 

```
**Exceptional Situations:** 



Should signal **type-error** if its argument is not a *symbol*. 



**Notes:** 



Historically, this function was called special-form-p. The name was finally declared a misnomer and changed, since it returned true for *special operators*, not *special forms*. 







 



 



**constantp** 



