**rplaca, rplacd** *Function* 



**Syntax:** 



**rplaca** *cons object → cons* 



**rplacd** *cons object → cons* 



**Pronunciation:** 



**rplaca**: [ **r—e plak***  ] or [ **r***  **plak***  ] 



**rplacd**: [ **r—e plakd***  ] or [ **r***  **plakd***  ] or [ **r—e plakd—e** ] or [ **r***  **plakd—e** ] 



**Arguments and Values:** 



*cons*—a *cons*. 



*object*—an *object*. 



**Description:** 



**rplaca** replaces the *car* of the *cons* with *object*. 



**rplacd** replaces the *cdr* of the *cons* with *object*. 



**Examples:**
```lisp
 

(defparameter \*some-list\* (list\* ’one ’two ’three ’four)) *→* \*some-list\* 

\*some-list\* *→* (ONE TWO THREE . FOUR) 

(rplaca \*some-list\* ’uno) *→* (UNO TWO THREE . FOUR) 

\*some-list\* *→* (UNO TWO THREE . FOUR) 

(rplacd (last \*some-list\*) (list ’IV)) *→* (THREE IV) 

\*some-list\* *→* (UNO TWO THREE IV) 


```
**Side Effects:** 



The *cons* is modified. 



Should signal an error of *type* **type-error** if *cons* is not a *cons*. 







 



 



**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar,** *. . .* 



