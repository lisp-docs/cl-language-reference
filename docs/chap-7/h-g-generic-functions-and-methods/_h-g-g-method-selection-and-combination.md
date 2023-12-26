 



When a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is called with particular arguments, it must determine the code to execute. This code is called the <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> for those <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. The <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> is a combination of the <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that <ClLinks  term={"call"}><i>calls</i></ClLinks> some or all of the <ClLinks  term={"method"}><i>methods</i></ClLinks>. 



If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is called and no <ClLinks  term={"method"}><i>methods</i></ClLinks> are <ClLinks  term={"applicable"}><i>applicable</i></ClLinks>, the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is invoked, with the *results* from that call being used as the *results* of the call to the original <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Calling <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> has been determined, it is invoked with the same <ClLinks  term={"argument"}><i>arguments</i></ClLinks> as were passed to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Whatever <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are returned as the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



