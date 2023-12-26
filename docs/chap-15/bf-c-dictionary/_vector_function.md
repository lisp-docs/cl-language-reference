**vector** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink> &amp;rest *objects → vector* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"vector"}><i>vector</i></ClLinks>—a <ClLinks  term={"vector"}><i>vector</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (vector t \*). 



**Description:** 



Creates a *fresh simple general vector* whose size corresponds to the number of <ClLinks  term={"object"}><i>objects</i></ClLinks>. The <ClLinks  term={"vector"}><i>vector</i></ClLinks> is initialized to contain the <ClLinks  term={"object"}><i>objects</i></ClLinks>. 



**Examples:**
```lisp
(arrayp (setq v (vector 1 2 ’sirens))) → true 
(vectorp v) → true 
(simple-vector-p v) → true 
(length v) → 3 


```
**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink> is analogous to <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>. 



(vector a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>) 



*≡* (make-array (list *n*) :element-type t 



:initial-contents 



(list a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>)) 



