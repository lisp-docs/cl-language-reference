**copy-alist** *Function* 



**Syntax:** 



**copy-alist** *alist → new-alist* 



**Arguments and Values:** 



*alist*—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



**copy-alist** returns a *copy* of *alist*. 



The *list structure* of *alist* is copied, and the *elements* of *alist* which are *conses* are also copied (as *conses* only). Any other *objects* which are referred to, whether directly or indirectly, by the *alist* continue to be shared. 



**Examples:**
```lisp
 



(defparameter \*alist\* (acons 1 "one" (acons 2 "two" ’()))) 







 



 



\*alist\* *→* ((1 . "one") (2 . "two")) 



(defparameter \*list-copy\* (copy-list \*alist\*)) 



\*list-copy\* *→* ((1 . "one") (2 . "two")) 



(defparameter \*alist-copy\* (copy-alist \*alist\*)) 



\*alist-copy\* *→* ((1 . "one") (2 . "two")) 



(setf (cdr (assoc 2 \*alist-copy\*)) "deux") *→* "deux" 



\*alist-copy\* *→* ((1 . "one") (2 . "deux")) 



\*alist\* *→* ((1 . "one") (2 . "two")) 



(setf (cdr (assoc 1 \*list-copy\*)) "uno") *→* "uno" 



\*list-copy\* *→* ((1 . "uno") (2 . "two")) 



\*alist\* *→* ((1 . "uno") (2 . "two")) 




```
**See Also:** 



**copy-list** 



