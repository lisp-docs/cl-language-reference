**multiple-values-limit** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The upper exclusive bound on the number of <ClLinks  term={"value"}><i>values</i></ClLinks> that may be returned from a <ClLinks  term={"function"}><i>function</i></ClLinks>, bound or assigned by <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> or <DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink>, or passed as a first argument to <DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink>. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



<DictionaryLink  term={"lambda-parameters-limit"}><b>lambda-parameters-limit</b></DictionaryLink>, <DictionaryLink  term={"call-arguments-limit"}><b>call-arguments-limit</b></DictionaryLink> 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



