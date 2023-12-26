**no-next-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> *generic-function method* &amp;rest *args → \{result\}*\* 



**Method Signatures:** 



<ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



(<ClLinks  term={"method"}><i>method</i></ClLinks> <ClLinks  term={"standard-method"}><b>standard-method</b></ClLinks>) 



&amp;rest *args* 



**Arguments and Values:** 



*generic-function* – <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> to which <ClLinks  term={"method"}><i>method</i></ClLinks> belongs. 



<ClLinks  term={"method"}><i>method</i></ClLinks> – <ClLinks  term={"method"}><i>method</i></ClLinks> that contained the call to <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> for which there is no next <ClLinks  term={"method"}><i>method</i></ClLinks>. *args* – arguments to <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is called by <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> when there is no <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is not intended to be called by programmers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. 



**Exceptional Situations:** 



The system-supplied <ClLinks  term={"method"}><i>method</i></ClLinks> on <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> 







 



 



