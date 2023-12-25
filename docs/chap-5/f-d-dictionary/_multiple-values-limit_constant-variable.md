**multiple-values-limit** *Constant Variable* 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The upper exclusive bound on the number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that may be returned from a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, bound or assigned by <DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> or <DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink>, or passed as a first argument to <DictionaryLink styled={true} term={"nth-value"}><b>nth-value</b></DictionaryLink>. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



<DictionaryLink styled={true} term={"lambda-parameters-limit"}><b>lambda-parameters-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"call-arguments-limit"}><b>call-arguments-limit</b></DictionaryLink> 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



