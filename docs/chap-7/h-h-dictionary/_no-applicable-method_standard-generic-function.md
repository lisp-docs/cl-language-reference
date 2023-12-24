**no-applicable-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



<ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a *generic function* on which no *applicable method* was found. 



*function-arguments*—<ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to the *generic-function*. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is called when a *generic function* is invoked and no <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on that *generic function* is applicable. The *default method* signals an error. 



The generic function <ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. 







 



 



**Exceptional Situations:** 



The default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



