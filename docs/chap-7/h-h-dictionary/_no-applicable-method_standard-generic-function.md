**no-applicable-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



<ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> (*generic-function* <ClLinks  term={"t"}><b>t</b></ClLinks>) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a *generic function* on which no *applicable method* was found. 



*function-arguments*—<ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the *generic-function*. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is called when a *generic function* is invoked and no <ClLinks  term={"method"}><i>method</i></ClLinks> on that *generic function* is applicable. The *default method* signals an error. 



The generic function <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 







 



 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



