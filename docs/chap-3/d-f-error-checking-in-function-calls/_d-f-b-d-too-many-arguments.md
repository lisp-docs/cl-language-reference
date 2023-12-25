 



It is not permitted to supply too many <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. Too many arguments means more <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> than the number of *required parameters* plus the number of *optional parameters*; however, if the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> uses **&amp;rest** or **&amp;key**, it is not possible for it to receive too many arguments. 



If this <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> occurs in a *safe call*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> must be signaled; and in an *unsafe call* the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> has undefined consequences. 



