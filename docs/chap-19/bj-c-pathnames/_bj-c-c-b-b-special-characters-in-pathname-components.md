 



*Strings* in *pathname* component values never contain special *characters* that represent separation between *pathname* fields, such as *slash* in Unix *filenames*. Whether separator *characters* are permitted as part of a *string* in a *pathname* component is *implementation-defined*; however, if the *implementation* does permit it, it must arrange to properly “quote” the character for the *file system* when constructing a *namestring*. For example, 


```lisp
;; In a TOPS-20 implementation, which uses ^V to quote 

(NAMESTRING (MAKE-PATHNAME :HOST "OZ" :NAME "<TEST>")) 

 → #P"OZ:PS:^V<TEST^V>" 

not → #P"OZ:PS:<TEST>" 

```