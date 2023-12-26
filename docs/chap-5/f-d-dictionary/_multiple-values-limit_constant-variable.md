**multiple-values-limit** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The upper exclusive bound on the number of <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> that may be returned from a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, bound or assigned by <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> or <DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink>, or passed as a first argument to <DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink>. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



<DictionaryLink  term={"lambda-parameters-limit"}><b>lambda-parameters-limit</b></DictionaryLink>, <DictionaryLink  term={"call-arguments-limit"}><b>call-arguments-limit</b></DictionaryLink> 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



