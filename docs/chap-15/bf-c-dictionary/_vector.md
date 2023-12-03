**vector** *Function* 

**Syntax:** 

**vector** &rest *objects → vector* 

**Arguments and Values:** 

*object*—an *object*. 

*vector*—a *vector* of *type* (vector t \*). 

**Description:** 

Creates a *fresh simple general vector* whose size corresponds to the number of *objects*. The *vector* is initialized to contain the *objects*. 

**Examples:** 

(arrayp (setq v (vector 1 2 ’sirens))) *→ true* 

(vectorp v) *→ true* 

(simple-vector-p v) *→ true* 

(length v) *→* 3 



 

 

**See Also:** 

**make-array** 

**Notes:** 

**vector** is analogous to **list**. 

(vector a&#60;sub&#62;1&#60;/sub&#62; a&#60;sub&#62;2&#60;/sub&#62; ... a&#60;i&#62;&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;) 

*≡* (make-array (list *n*) :element-type t 

:initial-contents 

(list a&#60;sub&#62;1&#60;/sub&#62; a&#60;sub&#62;2&#60;/sub&#62; ... a&#60;i&#62;&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;)) 

