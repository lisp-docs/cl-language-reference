**return** *Macro* 



**Syntax:** 



**return** [*result*] *→* 



**Arguments and Values:** 



*result*—a *form*; evaluated. The default is **nil**. 



**Description:** 



Returns, as if by **return-from**, from the *block* named **nil**. 



**Examples:**
```lisp
 

(block nil (return) 1) *→* NIL 

(block nil (return 1) 2) *→* 1 

(block nil (return (values 1 2)) 3) *→* 1, 2 

(block nil (block alpha (return 1) 2)) *→* 1 

(block alpha (block nil (return 1)) 2) *→* 2 

(block nil (block nil (return 1) 2)) *→* 1 


```
**See Also:** 



**block**, **return-from**, Section 3.1 (Evaluation) 



**Notes:** 



(return) *≡* (return-from nil) 



(return *form*) *≡* (return-from nil *form*) 



The *implicit blocks established* by *macros* such as **do** are often named **nil**, so that **return** can be used to exit from such *forms*. 



Data and Control 











**tagbody** 



