**keywordp** *Function* 



**Syntax:** 



**keywordp** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is a *keyword* <sub>1</sub>; otherwise, returns *false*. 



**Examples:**
```lisp
 



(keywordp ’elephant) *→ false* 



(keywordp 12) *→ false* 



(keywordp :test) *→ true* 



(keywordp ’:test) *→ true* 



(keywordp nil) *→ false* 



(keywordp :nil) *→ true* 



(keywordp ’(:test)) *→ false* 



(keywordp "hello") *→ false* 



(keywordp ":hello") *→ false* 



(keywordp ’&amp;optional) *→ false* 




```
**See Also:** 



**constantp**, **keyword**, **symbolp**, **symbol-package** 







 



 



