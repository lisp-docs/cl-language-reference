**multiple-values-limit** *Constant Variable* 



**Constant Value:** 



An *integer* not smaller than 20, the exact magnitude of which is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The upper exclusive bound on the number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that may be returned from a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, bound or assigned by <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> or <ClLinks styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></ClLinks>, or passed as a first argument to <ClLinks styled={true} term={"nth-value"}><b>nth-value</b></ClLinks>. (If these individual limits might di↵er, the minimum value is used.) 



**See Also:** 



<ClLinks styled={true} term={"lambda-parameters-limit"}><b>lambda-parameters-limit</b></ClLinks>, <ClLinks styled={true} term={"call-arguments-limit"}><b>call-arguments-limit</b></ClLinks> 



**Notes:** 



Implementors are encouraged to make this limit as large as possible. 



