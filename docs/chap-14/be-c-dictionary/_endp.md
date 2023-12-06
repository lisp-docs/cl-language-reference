**endp** *Function* 



**Syntax:** 



**endp** *list → generalized-boolean* 



**Arguments and Values:** 



*list*—a *list*, which might be a *dotted list* or a *circular list*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *list* is the *empty list*. Returns *false* if *list* is a *cons*. 



**Examples:**
```lisp
 

(endp nil) *→ true* 

(endp ’(1 2)) *→ false* 

(endp (cddr ’(1 2))) *→ true* 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *list* is not a *list*. 



**Notes:** 



The purpose of **endp** is to test for the end of *proper list*. Since **endp** does not descend into a *cons*, it is well-defined to pass it a *dotted list*. However, if shorter “lists” are iteratively produced by calling **cdr** on such a *dotted list* and those “lists” are tested with **endp**, a situation that has undefined consequences will eventually result when the *non-nil atom* (which is not in fact a *list*) finally becomes the argument to **endp**. Since this is the usual way in which **endp** is used, it is conservative programming style and consistent with the intent of **endp** to treat **endp** as simply a function on *proper lists* which happens not to enforce an argument type of *proper list* except when the argument is *atomic*. 



