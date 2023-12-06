**fmakunbound** *Function* 



**Syntax:** 



**fmakunbound** *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



*name*—a *function name*. 



**Description:** 



Removes the *function* or *macro* definition, if any, of *name* in the *global environment*. **Examples:**
```lisp
 

(defun add-some (x) (+ x 19)) *→* ADD-SOME 

(fboundp ’add-some) *→ true* 

(flet ((add-some (x) (+ x 37))) 

(fmakunbound ’add-some) 

(add-some 1)) *→* 38 

(fboundp ’add-some) *→ false* 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *name* is not a *function name*. 



The consequences are undefined if *name* is a *special operator* . 



**See Also:** 



**fboundp**, **makunbound** 



Data and Control 











**flet, labels, macrolet** 



