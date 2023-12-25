 



If <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, the ordered set of *applicable methods* for the changed set of <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> for <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be the same as the ordered set of *applicable methods* for the original <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the *generic function*, or else an error should be signaled. 



The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers. 



If <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that specify a different ordered set of <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm> methods and there is no *next method* available, the test for different methods and the associated error signaling (when present) takes precedence over calling <DictionaryLink styled={true} term={"no-next-method"}><b>no-next-method</b></DictionaryLink>.  







