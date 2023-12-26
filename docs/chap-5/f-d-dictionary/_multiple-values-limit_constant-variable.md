**multiple-values-limit** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The upper exclusive bound on the number of <ClLinks  term={"value"}><i>values</i></ClLinks> that may be returned from a <ClLinks  term={"function"}><i>function</i></ClLinks>, bound or assigned by <ClLinks  term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> or <ClLinks  term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks>, or passed as a first argument to <ClLinks  term={"nth-value"}><b>nth-value</b></ClLinks>. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



<ClLinks  term={"lambda-parameters-limit"}><b>lambda-parameters-limit</b></ClLinks>, <ClLinks  term={"call-arguments-limit"}><b>call-arguments-limit</b></ClLinks> 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



