**upgraded-complex-part-type** *Function* 



**Syntax:** 



**upgraded-complex-part-type** *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



*environment*—an *environment object*. The default is **nil**, denoting the *null lexical environment* and the and current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



**upgraded-complex-part-type** returns the part type of the most specialized *complex* number representation that can hold parts of *type typespec*. 



The *typespec* is a *subtype* of (and possibly *type equivalent* to) the *upgraded-typespec*. 



The purpose of **upgraded-complex-part-type** is to reveal how an implementation does its *upgrading*. 



**See Also:** 



**complex** (*function* and *type*) 



**Notes:** 



