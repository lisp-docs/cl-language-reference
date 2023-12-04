**t** *Constant Variable* 



**Constant Value:** 



**t**. 



**Description:** 



The *boolean* representing true, and the canonical *generalized boolean* representing true. Although any *object* other than **nil** is considered *true*, **t** is generally used when there is no special reason to prefer one such *object* over another. 



Data and Control 











The *symbol* **t** is also sometimes used for other purposes as well. For example, as the *name* of a *class*, as a *designator* (*e.g.*, a *stream designator* ) or as a special symbol for some syntactic reason (*e.g.*, in **case** and **typecase** to label the *otherwise-clause*). 



**Examples:**
```lisp
 



t *→* T 



(eq t ’t) *→ true* 



(find-class ’t) *→* #<CLASS T 610703333> 



(case ’a (a 1) (t 2)) *→* 1 



(case ’b (a 1) (t 2)) *→* 2 



(prin1 ’hello t) 



▷ HELLO 



*→* HELLO 




```
**See Also:** 



**nil** 



