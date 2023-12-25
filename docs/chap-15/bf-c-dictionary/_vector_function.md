**vector** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink> &amp;rest *objects → vector* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (vector t \*). 



**Description:** 



Creates a *fresh simple general vector* whose size corresponds to the number of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is initialized to contain the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 



**Examples:**
```lisp

(arrayp (setq v (vector 1 2 ’sirens))) *→ true* 
(vectorp v) *→ true* 
(simple-vector-p v) *→ true* 
(length v) *→* 3 




```
**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink> is analogous to <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>. 



(vector a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>) 



*≡* (make-array (list *n*) :element-type t 



:initial-contents 



(list a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>)) 



