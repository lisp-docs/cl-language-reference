 



Note that *conforming code* may rely on particular <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> values or features. Also note that the requirements for *conforming code* and *conforming implementations* do not require that the results produced by conforming code always be the same when processed by a *conforming implementation*. The results may be the same, or they may differ. 



Conforming code may run in all conforming implementations, but might have allowable <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> behavior that makes it non-portable code. For example, the following are examples of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that are conforming, but that might return different <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> in different implementations: 



(evenp most-positive-fixnum) → implementation-dependent 



(random) → implementation-dependent 



(&gt; lambda-parameters-limit 93) → implementation-dependent 



(char-name #\A) → implementation-dependent 



