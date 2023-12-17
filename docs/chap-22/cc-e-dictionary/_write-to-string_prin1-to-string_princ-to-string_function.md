**write-to-string, prin1-to-string, princ-to-string** *Function* 



**Syntax:** 



**write-to-string** *object* &key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin* 



→ string 



**prin1-to-string** *object → string* 



**princ-to-string** *object → string* 



**Arguments and Values:** 



*object*—an *object*. 



*array*—a *generalized boolean*. 



*base*—a *radix* . 







 



 



**write-to-string, prin1-to-string, princ-to-string** 



*case*—a *symbol* of *type* (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



*escape*—a *generalized boolean*. 



*gensym*—a *generalized boolean*. 



*length*—a non-negative *integer* , or **nil**. 



*level*—a non-negative *integer* , or **nil**. 



*lines*—a non-negative *integer* , or **nil**. 



*miser-width*—a non-negative *integer* , or **nil**. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



*radix*—a *generalized boolean*. 



*readably*—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or **nil**. 



*string*—a *string*. 



**Description:** 



**write-to-string**, **prin1-to-string**, and **princ-to-string** are used to create a *string* consisting of the printed representation of *object*. *Object* is effectively printed as if by **write**, **prin1**, or **princ**, respectively, and the *characters* that would be output are made into a *string*. 



**write-to-string** is the general output function. It has the ability to specify all the parameters applicable to the printing of *object*. 



**prin1-to-string** acts like **write-to-string** with :escape t, that is, escape characters are written where appropriate. 



**princ-to-string** acts like **write-to-string** with :escape nil :readably nil. Thus no *escape characters* are written. 



All other keywords that would be specified to **write-to-string** are default values when **prin1-to-string** or **princ-to-string** is invoked. 



The meanings and defaults for the keyword arguments to **write-to-string** are the same as those for **write**. 



**Examples:**
```lisp
 



(prin1-to-string "abc") → "\"abc\"" 







 



 



(princ-to-string "abc") → "abc" 




```
**Affected By:** 



**\*print-escape\***, **\*print-radix\***, **\*print-base\***, **\*print-circle\***, **\*print-pretty\***, **\*print-level\***, **\*print-length\***, **\*print-case\***, **\*print-gensym\***, **\*print-array\***, **\*read-default-float-format\***. 



**See Also:** 



**write** 



**Notes:** 



(write-to-string *object \&#123;key argument\&#125;*\*) 



*≡* (with-output-to-string (#1=#:string-stream) 



(write object :stream #1# *\&#123;key argument\&#125;*\*)) 



(princ-to-string *object*) 



*≡* (with-output-to-string (string-stream) 



(princ *object* string-stream)) 



(prin1-to-string *object*) 



*≡* (with-output-to-string (string-stream) 



(prin1 *object* string-stream)) 



