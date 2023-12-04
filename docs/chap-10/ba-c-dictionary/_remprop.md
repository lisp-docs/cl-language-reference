**remprop** *Function* 



**Syntax:** 



**remprop** *symbol indicator → generalized-boolean* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*indicator*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**remprop** removes from the *property list* <sub>2</sub> of *symbol* a *property*<sub>1</sub> with a *property indicator identical* to *indicator*. If there are multiple *properties*<sub>1</sub> with the *identical* key, **remprop** only removes the first such *property*. **remprop** returns *false* if no such *property* was found, or *true* if a property was found. 



The *property indicator* and the corresponding *property value* are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for **remf**, such that: 



(remprop *x y*) *≡* (remf (symbol-plist *x*) *y*) 



**Examples:**
```lisp
 



(setq test (make-symbol "PSEUDO-PI")) *→* #:PSEUDO-PI 



(symbol-plist test) *→* () 



(setf (get test ’constant) t) *→* T 



(setf (get test ’approximation) 3.14) *→* 3.14 



(setf (get test ’error-range) ’noticeable) *→* NOTICEABLE 



(symbol-plist test) 



*→* (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T) 



(setf (get test ’approximation) nil) *→* NIL 



(symbol-plist test) 



*→* (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T) 



(get test ’approximation) *→* NIL 







 



 



(remprop test ’approximation) *→ true* 



(get test ’approximation) *→* NIL 



(symbol-plist test) 



*→* (ERROR-RANGE NOTICEABLE CONSTANT T) 



(remprop test ’approximation) *→* NIL 



(symbol-plist test) 



*→* (ERROR-RANGE NOTICEABLE CONSTANT T) 



(remprop test ’error-range) *→ true* 



(setf (get test ’approximation) 3) *→* 3 



(symbol-plist test) 



*→* (APPROXIMATION 3 CONSTANT T) 




```
**Side Effects:** 



The *property list* of *symbol* is modified. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



**See Also:** 



**remf**, **symbol-plist** 



**Notes:** 



*Numbers* and *characters* are not recommended for use as *indicators* in portable code since **remprop** tests with **eq** rather than **eql**, and consequently the effect of using such *indicators* is *implementation-dependent*. Of course, if you’ve gotten as far as needing to remove such a *property*, you don’t have much choice—the time to have been thinking about this was when you used **setf** of **get** to establish the *property*. 



