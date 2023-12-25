 



When a *generic function* is called with particular arguments, it must determine the code to execute. This code is called the *effective method* for those <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. The *effective method* is a combination of the *applicable methods* in the *generic function* that <ClLinks  term={"call"}><i>calls</i></ClLinks> some or all of the <ClLinks  term={"method"}><i>methods</i></ClLinks>. 



If a *generic function* is called and no <ClLinks  term={"method"}><i>methods</i></ClLinks> are <ClLinks  term={"applicable"}><i>applicable</i></ClLinks>, the *generic function* <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is invoked, with the *results* from that call being used as the *results* of the call to the original *generic function*. Calling <ClLinks  term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the *effective method* has been determined, it is invoked with the same <ClLinks  term={"argument"}><i>arguments</i></ClLinks> as were passed to the *generic function*. Whatever <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are returned as the <ClLinks  term={"value"}><i>values</i></ClLinks> of the *generic function*. 



