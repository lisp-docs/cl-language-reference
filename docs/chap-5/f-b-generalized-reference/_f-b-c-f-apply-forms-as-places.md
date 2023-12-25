 



The following situations involving <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"apply"}><b>apply</b></ClLinks> must be supported: 



*•* (setf (apply #’aref *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’bit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’sbit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



In all three cases, the <ClLinks  term={"element"}><i>element</i></ClLinks> of <ClLinks  term={"array"}><i>array</i></ClLinks> designated by the concatenation of *subscripts* and *more-subscripts* (*i.e.*, the same <ClLinks  term={"element"}><i>element</i></ClLinks> which would be <ClLinks  term={"read"}><i>read</i></ClLinks> by the call to <ClLinks  term={"apply"}><i>apply</i></ClLinks> if it were not part of a <ClLinks  term={"setf"}><b>setf</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>) is changed to have the <ClLinks  term={"value"}><i>value</i></ClLinks> given by *new-element*. For these usages, the function name (<ClLinks  term={"aref"}><b>aref</b></ClLinks>, <ClLinks  term={"bit"}><b>bit</b></ClLinks>, or <ClLinks  term={"sbit"}><b>sbit</b></ClLinks>) must refer to the global function definition, rather than a locally defined <ClLinks  term={"function"}><i>function</i></ClLinks>. 



No other *standardized function* is required to be supported, but an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may define such support. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may also define support for *implementation-defined operators*. 



If a user-defined <ClLinks  term={"function"}><i>function</i></ClLinks> is used in this context, the following equivalence is true, except that care is taken to preserve proper left-to-right evaluation of argument <ClLinks  term={"subform"}><i>subforms</i></ClLinks>: 



(setf (apply #’*name \{arg\}*\*) *val*) 



*≡* (apply #’(setf <ClLinks  term={"name"}><i>name</i></ClLinks>) *val \{arg\}*\*) 



