 



When a *generic function* is called with particular arguments, it must determine the code to execute. This code is called the *effective method* for those <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. The *effective method* is a combination of the *applicable methods* in the *generic function* that <ClLinks styled={true} term={"call"}><i>calls</i></ClLinks> some or all of the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. 



If a *generic function* is called and no <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are <ClLinks styled={true} term={"applicable"}><i>applicable</i></ClLinks>, the *generic function* <ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> is invoked, with the *results* from that call being used as the *results* of the call to the original *generic function*. Calling <ClLinks styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></ClLinks> takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the *effective method* has been determined, it is invoked with the same <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> as were passed to the *generic function*. Whatever <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> it returns are returned as the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the *generic function*. 



