**zerop** *Function* 



**Syntax:** 



**zerop** *number → generalized-boolean* 



**Pronunciation:** 



[ **z—e( )r—o( )p—e** ] 



**Arguments and Values:** 



*number*—a *number* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *number* is zero (*integer* , *float*, or *complex* ); otherwise, returns *false*. 



Regardless of whether an *implementation* provides distinct representations for positive and negative floating-point zeros, (zerop -0.0) always returns *true*. 



**Examples:**
```lisp
 

(zerop 0) *→ true* 

(zerop 1) *→ false* 

(zerop -0.0) *→ true* 

(zerop 0/100) *→ true* 

(zerop #c(0 0.0)) *→ true* 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *number* is not a *number* . 



**Notes:** 



(zerop *number*) *≡* (= *number* 0) 



