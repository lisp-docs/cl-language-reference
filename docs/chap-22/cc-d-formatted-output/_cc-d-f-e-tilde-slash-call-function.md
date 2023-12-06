 



&#126;/*name*/ 



User defined functions can be called from within a format string by using the directive &#126;/*name*/. The *colon* modifier, the *at-sign* modifier, and arbitrarily many parameters can be specified with the &#126;/*name*/ directive. *name* can be any arbitrary string that does not contain a ”/”. All of the characters in *name* are treated as if they were upper case. If *name* contains a single *colon* (:) or double *colon* (::), then everything up to but not including the first ":" or "::" is taken to be a *string* that names a *package*. Everything after the first ":" or "::" (if any) is taken to be a *string* 



that names a symbol. The function corresponding to a &#126;/name/ directive is obtained by looking up the *symbol* that has the indicated name in the indicated *package*. If *name* does not contain a ":" or "::", then the whole *name* string is looked up in the COMMON-LISP-USER *package*. 



When a &#126;/name/ directive is encountered, the indicated function is called with four or more arguments. The first four arguments are: the output stream, the *format argument* corresponding to the directive, a *generalized boolean* that is *true* if the *colon* modifier was used, and a *generalized boolean* that is *true* if the *at-sign* modifier was used. The remaining arguments consist of any parameters specified with the directive. The function should print the argument appropriately. Any values returned by the function are ignored. 



The three *functions* **pprint-linear**, **pprint-fill**, and **pprint-tabular** are specifically designed so that they can be called by &#126;/.../ (*i.e.*, &#126;/pprint-linear/, &#126;/pprint-fill/, and &#126;/pprint-tabular/). In particular they take *colon* and *at-sign* arguments. 



