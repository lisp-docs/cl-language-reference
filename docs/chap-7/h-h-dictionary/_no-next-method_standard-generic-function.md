**no-next-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> *generic-function method* &amp;rest *args → \{result\}*\* 



**Method Signatures:** 



<ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



(<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>) 



&amp;rest *args* 



**Arguments and Values:** 



*generic-function* – *generic function* to which <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> belongs. 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> – <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> that contained the call to <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> for which there is no next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. *args* – arguments to <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The *generic function* <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> is called by <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> when there is no *next method*. 



The *generic function* <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. 



**Exceptional Situations:** 



The system-supplied <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on <ClLinks styled={true} term={"no-next-method"}><b>no-next-method</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> 







 



 



