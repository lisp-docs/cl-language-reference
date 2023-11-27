 

*Strings* in *pathname* component values never contain special *characters* that represent separation between *pathname* fields, such as *slash* in Unix *filenames*. Whether separator *characters* are permitted as part of a *string* in a *pathname* component is *implementation-defined*; however, if the *implementation* does permit it, it must arrange to properly “quote” the character for the *file system* when constructing a *namestring*. For example, 

;; In a TOPS-20 implementation, which uses &#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;V to quote 

(NAMESTRING (MAKE-PATHNAME :HOST "OZ" :NAME "&#60;TEST&#62;")) 

&#60;i&#62;→&#60;/i&#62; #P"OZ:PS:&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;V&#60;TEST&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;V&#62;" 

&#60;i&#62;&#60;sup&#62;not&#60;/sup&#62; →&#60;/i&#62; #P"OZ:PS:&#60;TEST&#62;" 

