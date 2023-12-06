**svref** *Accessor* 



**Syntax:** 



**svref** *simple-vector index → element* 



**(setf (svref** *simple-vector index***)** *new-element***)** 



**Arguments and Values:** 



*simple-vector*—a *simple vector* . 



*index*—a *valid array index* for the *simple-vector*. 







 



 



*element*, *new-element*—an *object* (whose *type* is a *subtype* of the *array element type* of the *simple-vector*). 



**Description:** 



*Accesses* the *element* of *simple-vector* specified by *index*. 



**Examples:**
```lisp
 

(simple-vector-p (setq v (vector 1 2 ’sirens))) *→ true* 

(svref v 0) *→* 1 

(svref v 2) *→* SIRENS 

(setf (svref v 1) ’newcomer) *→* NEWCOMER 

v *→* #(1 NEWCOMER SIRENS) 


```
**See Also:** 



**aref**, **sbit**, **schar**, **vector**, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



**svref** is identical to **aref** except that it requires its first argument to be a *simple vector* . (svref *v i*) *≡* (aref (the simple-vector *v*) *i*) 



