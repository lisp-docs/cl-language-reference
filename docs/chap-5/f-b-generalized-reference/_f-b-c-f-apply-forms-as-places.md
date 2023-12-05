 



The following situations involving **setf** of **apply** must be supported: 



*•* (setf (apply #’aref *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’bit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’sbit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



In all three cases, the *element* of *array* designated by the concatenation of *subscripts* and *more-subscripts* (*i.e.*, the same *element* which would be *read* by the call to *apply* if it were not part of a **setf** *form*) is changed to have the *value* given by *new-element*. For these usages, the function name (**aref**, **bit**, or **sbit**) must refer to the global function definition, rather than a locally defined *function*. 



No other *standardized function* is required to be supported, but an *implementation* may define such support. An *implementation* may also define support for *implementation-defined operators*. 



If a user-defined *function* is used in this context, the following equivalence is true, except that care is taken to preserve proper left-to-right evaluation of argument *subforms*: 



(setf (apply #’*name \{arg\}*\*) *val*) 



*≡* (apply #’(setf *name*) *val \{arg\}*\*) 



