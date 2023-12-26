 



If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the changed set of <ClLinks  term={"argument"}><i>arguments</i></ClLinks> for <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> must be the same as the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the original <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or else an error should be signaled. 



The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers. 



If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that specify a different ordered set of <ClLinks  term={"applicable"}><i>applicable</i></ClLinks> methods and there is no <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> available, the test for different methods and the associated error signaling (when present) takes precedence over calling <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks>.  







