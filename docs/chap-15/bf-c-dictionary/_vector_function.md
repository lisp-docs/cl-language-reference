**vector** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks> &amp;rest *objects → vector* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>—a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (vector t \*). 



**Description:** 



Creates a *fresh simple general vector* whose size corresponds to the number of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. The <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is initialized to contain the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 



**Examples:**
```lisp

(arrayp (setq v (vector 1 2 ’sirens))) → true 
(vectorp v) → true 
(simple-vector-p v) → true 
(length v) → 3 




```
**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks> is analogous to <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>. 



(vector a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>) 



*≡* (make-array (list *n*) :element-type t 



:initial-contents 



(list a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>)) 



