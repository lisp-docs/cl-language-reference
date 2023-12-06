**getf** *Accessor* 



**Syntax:** 



**getf** *plist indicator* &amp;optional *default → value* 



**(setf (getf** *place indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



*plist*—a *property list*. 



*place*—a *place*, the *value* of which is a *property list*. 







 



 



**getf** 



*indicator*—an *object*. 



*default*—an *object*. The default is **nil**. 



*value*—an *object*. 



*new-value*—an *object*. 



**Description:** 



**getf** finds a *property* on the *plist* whose *property indicator* is *identical* to *indicator*, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , **getf** uses the first such *property*. If there is no *property* with that *property indicator* , *default* is returned. 



**setf** of **getf** may be used to associate a new *object* with an existing indicator in the *property list* held by *place*, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , **setf** of **getf** associates the *new-value* with the first such *property*. When a **getf** *form* is used as a **setf** *place*, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its *value* is ignored. 



**setf** of **getf** is permitted to either *write* the *value* of *place* itself, or modify of any part, *car* or *cdr* , of the *list structure* held by *place*. 



**Examples:**
```lisp
 

(setq x ’()) *→* NIL 

(getf x ’prop1) *→* NIL 

(getf x ’prop1 7) *→* 7 

(getf x ’prop1) *→* NIL 

(setf (getf x ’prop1) ’val1) *→* VAL1 

(eq (getf x ’prop1) ’val1) *→ true* 

(getf x ’prop1) *→* VAL1 

(getf x ’prop1 7) *→* VAL1 

x *→* (PROP1 VAL1) 

;; Examples of implementation variation permitted. 

(setq foo (list ’a ’b ’c ’d ’e ’f)) *→* (A B C D E F) 

(setq bar (cddr foo)) *→* (C D E F) 

(remf foo ’c) *→ true* 

foo *→* (A B E F) 

bar 

*→* (C D E F) 

<i><sup>or</sup>→</i> (C) 

<i><sup>or</sup>→</i> (NIL) 

<i><sup>or</sup>→</i> (C NIL) 

<i><sup>or</sup>→</i> (C D) 



 

 


```
**See Also:** 



**get**, **get-properties**, **setf**, Section 5.1.2.2 (Function Call Forms as Places) 



**Notes:** 



There is no way (using **getf**) to distinguish an absent property from one whose value is *default*; but see **get-properties**. 



Note that while supplying a *default* argument to **getf** in a **setf** situation is sometimes not very interesting, it is still important because some macros, such as **push** and **incf**, require a *place* argument which data is both *read* from and *written* to. In such a context, if a *default* argument is to be supplied for the *read* situation, it must be syntactically valid for the *write* situation as well. For example, 



(let ((plist ’())) 



(incf (getf plist ’count 0)) 



plist) *→* (COUNT 1) 



