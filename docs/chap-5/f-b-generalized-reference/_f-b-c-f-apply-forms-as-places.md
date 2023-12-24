 



The following situations involving <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> must be supported: 



*•* (setf (apply #’aref *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’bit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’sbit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



In all three cases, the <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> designated by the concatenation of *subscripts* and *more-subscripts* (*i.e.*, the same <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> which would be <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> by the call to <ClLinks styled={true} term={"apply"}><i>apply</i></ClLinks> if it were not part of a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) is changed to have the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> given by *new-element*. For these usages, the function name (<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>, or <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks>) must refer to the global function definition, rather than a locally defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



No other *standardized function* is required to be supported, but an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may define such support. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may also define support for *implementation-defined operators*. 



If a user-defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is used in this context, the following equivalence is true, except that care is taken to preserve proper left-to-right evaluation of argument <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks>: 



(setf (apply #’*name \{arg\}*\*) *val*) 



*≡* (apply #’(setf <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) *val \{arg\}*\*) 



