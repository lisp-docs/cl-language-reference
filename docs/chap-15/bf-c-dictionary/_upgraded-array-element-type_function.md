**upgraded-array-element-type** *Function* 



**Syntax:** 



**upgraded-array-element-type** *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



*environment*—an *environment object*. The default is **nil**, denoting the *null lexical environment* and the current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



Returns the *element type* of the most *specialized array* representation capable of holding items of the *type* denoted by *typespec*. 



The *typespec* is a *subtype* of (and possibly *type equivalent* to) the *upgraded-typespec*. 



If *typespec* is **bit**, the result is *type equivalent* to bit. If *typespec* is **base-char**, the result is *type equivalent* to base-char. If *typespec* is **character**, the result is *type equivalent* to character. 



The purpose of **upgraded-array-element-type** is to reveal how an implementation does its *upgrading*. 



The *environment* is used to expand any *derived type specifiers* that are mentioned in the *typespec*. 



**See Also:** 



**array-element-type**, **make-array** 



**Notes:** 



Except for storage allocation consequences and dealing correctly with the optional *environment argument*, **upgraded-array-element-type** could be defined as: 



(defun upgraded-array-element-type (type &amp;optional environment) 



(array-element-type (make-array 0 :element-type type))) 







 



 



