**reverse, nreverse** *Function* 



**Syntax:** 



**reverse** *sequence → reversed-sequence* 



**nreverse** *sequence → reversed-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*reversed-sequence*—a *sequence*. 



**Description:** 



**reverse** and **nreverse** return a new *sequence* of the same kind as *sequence*, containing the same *elements*, but in reverse order. 



**reverse** and **nreverse** differ in that **reverse** always creates and returns a new *sequence*, whereas **nreverse** might modify and return the given *sequence*. **reverse** never modifies the given *sequence*. 



For **reverse**, if *sequence* is a *vector* , the result is a *fresh simple array* of *rank* one that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *fresh list*. 



For **nreverse**, if *sequence* is a *vector* , the result is a *vector* that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *list*. 



For **nreverse**, *sequence* might be destroyed and re-used to produce the result. The result might or might not be *identical* to *sequence*. Specifically, when *sequence* is a *list*, **nreverse** is permitted to **setf** any part, **car** or **cdr**, of any *cons* that is part of the *list structure* of *sequence*. When *sequence* 



is a *vector* , **nreverse** is permitted to re-order the elements of *sequence* in order to produce the resulting *vector* . 



**Examples:**
```lisp
 

(setq str "abc") *→* "abc" 

(reverse str) *→* "cba" 

str *→* "abc" 

(setq str (copy-seq str)) *→* "abc" 

(nreverse str) *→* "cba" 

str *→ implementation-dependent* 

(setq l (list 1 2 3)) *→* (1 2 3) 

(nreverse l) *→* (3 2 1) 

l *→ implementation-dependent* 


```
**Side Effects:** 



**nreverse** might either create a new *sequence*, modify the argument *sequence*, or both. (**reverse** does not modify *sequence*.) 







 



 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* 