**append** *Function* 



**Syntax:** 



**append** &amp;rest *lists → result* 



**Arguments and Values:** 



*list*—each must be a *proper list* except the last, which may be any *object*. 







 



 



*result*—an *object*. This will be a *list* unless the last *list* was not a *list* and all preceding *lists* were *null*. 



**Description:** 



**append** returns a new *list* that is the concatenation of the copies. *lists* are left unchanged; the *list structure* of each of *lists* except the last is copied. The last argument is not copied; it becomes the *cdr* of the final *dotted pair* of the concatenation of the preceding *lists*, or is returned directly if there are no preceding *non-empty lists*. 



**Examples:**
```lisp
 

(append ’(a b c) ’(d e f) ’() ’(g)) *→* (A B C D E F G) 

(append ’(a b c) ’d) *→* (A B C . D) 

(setq lst ’(a b c)) *→* (A B C) 

(append lst ’(d)) *→* (A B C D) 

lst *→* (A B C) 

(append) *→* NIL 

(append ’a) *→* A 


```
**See Also:** 



**nconc**, **concatenate** 



