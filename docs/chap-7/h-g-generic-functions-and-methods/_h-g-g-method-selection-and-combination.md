 



When a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is called with particular arguments, it must determine the code to execute. This code is called the <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> for those <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> is a combination of the <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that <GlossaryTerm  term={"call"}><i>calls</i></GlossaryTerm> some or all of the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. 



If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is called and no <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are <GlossaryTerm  term={"applicable"}><i>applicable</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> is invoked, with the *results* from that call being used as the *results* of the call to the original <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Calling <DictionaryLink  term={"no-applicable-method"}><b>no-applicable-method</b></DictionaryLink> takes precedence over checking for acceptable keyword arguments; see Section 7.6.5 (Keyword Arguments in Generic Functions and Methods). 



When the <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> has been determined, it is invoked with the same <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> as were passed to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Whatever <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> it returns are returned as the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



