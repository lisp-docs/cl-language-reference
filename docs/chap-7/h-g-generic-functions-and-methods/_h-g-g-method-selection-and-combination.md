 



When a *generic function* is called with particular arguments, it must determine the code to execute. This code is called the *effective method* for those <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. The *effective method* is a combination of the *applicable methods* in the *generic function* that <GlossaryTerm styled={true} term={"call"}><i>calls</i></GlossaryTerm> some or all of the <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. 



If a *generic function* is called and no <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm>, the *generic function* <DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is invoked, with the *results* from that call being used as the *results* of the call to the original *generic function*. Calling <DictionaryLink styled={true} term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the *effective method* has been determined, it is invoked with the same <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as were passed to the *generic function*. Whatever <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the *generic function*. 



