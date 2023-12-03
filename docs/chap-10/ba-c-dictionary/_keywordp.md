**keywordp** *Function* 

**Syntax:** 

**keywordp** *object → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is a *keyword* &#60;sub&#62;1&#60;/sub&#62;; otherwise, returns *false*. 

**Examples:** 

(keywordp ’elephant) *→ false* 

(keywordp 12) *→ false* 

(keywordp :test) *→ true* 

(keywordp ’:test) *→ true* 

(keywordp nil) *→ false* 

(keywordp :nil) *→ true* 

(keywordp ’(:test)) *→ false* 

(keywordp "hello") *→ false* 

(keywordp ":hello") *→ false* 

(keywordp ’&optional) *→ false* 

**See Also:** 

**constantp**, **keyword**, **symbolp**, **symbol-package** 



 

 

