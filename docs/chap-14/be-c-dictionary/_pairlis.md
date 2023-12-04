**pairlis** *Function* 



**Syntax:** 



**pairlis** *keys data* &optional *alist → new-alist* 



**Arguments and Values:** 



*keys*—a *proper list*. 



*data*—a *proper list*. 



*alist*—an *association list*. The default is the *empty list*. 



*new-alist*—an *association list*. 



**Description:** 



Returns an *association list* that associates elements of *keys* to corresponding elements of *data*. The consequences are undefined if *keys* and *data* are not of the same *length*. 



If *alist* is supplied, **pairlis** returns a modified *alist* with the new pairs prepended to it. The new pairs may appear in the resulting *association list* in either forward or backward order. The result of 



(pairlis ’(one two) ’(1 2) ’((three . 3) (four . 19))) 



might be 



((one . 1) (two . 2) (three . 3) (four . 19)) 



or 







 



 



((two . 2) (one . 1) (three . 3) (four . 19)) 



**Examples:**
```lisp
 



(setq keys ’(1 2 3) 



data ’("one" "two" "three") 



alist ’((4 . "four"))) *→* ((4 . "four")) 



(pairlis keys data) *→* ((3 . "three") (2 . "two") (1 . "one")) 



(pairlis keys data alist) 



*→* ((3 . "three") (2 . "two") (1 . "one") (4 . "four")) 



alist *→* ((4 . "four")) 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *keys* and *data* are not *proper lists*. 



**See Also:** 



**acons** 



