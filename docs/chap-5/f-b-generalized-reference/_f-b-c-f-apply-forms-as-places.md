 



The following situations involving <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink> must be supported: 



*•* (setf (apply #’aref *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’bit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



*•* (setf (apply #’sbit *array \{subscript\}*\* *more-subscripts*) *new-element*) 



In all three cases, the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> designated by the concatenation of *subscripts* and *more-subscripts* (*i.e.*, the same <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> which would be <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> by the call to <GlossaryTerm  term={"apply"}><i>apply</i></GlossaryTerm> if it were not part of a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) is changed to have the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> given by *new-element*. For these usages, the function name (<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink>, or <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink>) must refer to the global function definition, rather than a locally defined <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



No other *standardized function* is required to be supported, but an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may define such support. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may also define support for *implementation-defined operators*. 



If a user-defined <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is used in this context, the following equivalence is true, except that care is taken to preserve proper left-to-right evaluation of argument <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm>: 



(setf (apply #’*name \{arg\}*\*) *val*) 



*≡* (apply #’(setf <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>) *val \{arg\}*\*) 



