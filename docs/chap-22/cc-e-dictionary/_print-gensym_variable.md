*∗<ClLinks styled={true} term={"print-gensym"}><b>*print-gensym*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**Description:** 



Controls whether the prefix “#:” is printed before *apparently uninterned symbols*. The prefix is printed before such <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> if and only if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**Examples:**
```lisp

(let ((\*print-gensym\* nil)) 
  (print (gensym))) 
▷ G6040 
→ #:G6040 

```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> 







 



 



*∗***print-level***∗***,** *∗<ClLinks styled={true} term={"print-length"}><b>*print-length*</b></ClLinks>∗* 



*∗***print-level***∗***,** 