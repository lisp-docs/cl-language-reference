*∗***print-gensym***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*true*. 



**Description:** 



Controls whether the prefix “#:” is printed before *apparently uninterned symbols*. The prefix is printed before such *symbols* if and only if the *value* of **\*print-gensym\*** is *true*. 



**Examples:**
```lisp

(let ((\*print-gensym\* nil)) 
  (print (gensym))) 
▷ G6040 
→ #:G6040 

```
**See Also:** 



**write**, **\*print-escape\*** 







 



 



*∗***print-level***∗***,** *∗***print-length***∗* 



*∗***print-level***∗***,** 