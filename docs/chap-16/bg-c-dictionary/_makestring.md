**make-string** *Function* 



**Syntax:** 



**make-string** *size* &amp;key *initial-element element-type → string* 



**Arguments and Values:** 



*size*—a *valid array dimension*. 



*initial-element*—a *character* . The default is *implementation-dependent*. 



*element-type*—a *type specifier* . The default is **character**. 



*string*—a *simple string*. 



**Description:** 



**make-string** returns a *simple string* of length *size* whose elements have been initialized to *initial-element*. 



The *element-type* names the *type* of the *elements* of the *string*; a *string* is constructed of the most *specialized type* that can accommodate *elements* of the given *type*. 



**Examples:**
```lisp
 

(make-string 10 :initial-element #\5) *→* "5555555555" 

(length (make-string 10)) *→* 10 


```
**Affected By:** 



The *implementation*. 







 



 





