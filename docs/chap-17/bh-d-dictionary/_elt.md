**elt** *Accessor* 



**Syntax:** 



**elt** *sequence index → object* 



**(setf (elt** *sequence index***)** *new-object***)** 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*index*—a *valid sequence index* for *sequence*. 



*object*—an *object*. 



*new-object*—an *object*. 



**Description:** 



*Accesses* the *element* of *sequence* specified by *index*. 



**Examples:**
```lisp
 

(setq str (copy-seq "0123456789")) *→* "0123456789" 

(elt str 6) *→* #\6 

(setf (elt str 0) #\#) *→* #\# 

str *→* "#123456789" 


```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. Should signal an error of *type* **type-error** if *index* is not a *valid sequence index* for *sequence*. 



**See Also:** 



**aref**, **nth**, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



**aref** may be used to *access vector* elements that are beyond the *vector* ’s *fill pointer* . 



 



 



