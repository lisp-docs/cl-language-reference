**no-applicable-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> *generic-function* &amp;rest *function-arguments → \{result\}*\* 



**Method Signatures:** 



<ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> (*generic-function* <ClLinks  term={"t"}><b>t</b></ClLinks>) 



&amp;rest *function-arguments* 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> on which no <GlossaryTerm styled={true} term={"applicable method"}><i>applicable method</i></GlossaryTerm> was found. 



*function-arguments*—<ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the *generic-function*. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The generic function <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is called when a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is invoked and no <ClLinks  term={"method"}><i>method</i></ClLinks> on that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is applicable. The <GlossaryTerm styled={true} term={"default method"}><i>default method</i></GlossaryTerm> signals an error. 



The generic function <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 







 



 



**Exceptional Situations:** 



The default <ClLinks  term={"method"}><i>method</i></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



