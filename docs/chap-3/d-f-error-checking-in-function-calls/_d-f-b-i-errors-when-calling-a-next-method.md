 



If <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>, the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the changed set of <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> for <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be the same as the ordered set of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> for the original <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or else an error should be signaled. 



The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers. 



If <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called with <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that specify a different ordered set of <GlossaryTerm  term={"applicable"}><i>applicable</i></GlossaryTerm> methods and there is no <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> available, the test for different methods and the associated error signaling (when present) takes precedence over calling <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink>.  







