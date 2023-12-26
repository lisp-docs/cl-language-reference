 



It is not permitted to supply too many <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. Too many arguments means more <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> than the number of <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm> plus the number of <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm>; however, if the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> uses **&amp;rest** or **&amp;key**, it is not possible for it to receive too many arguments. 



If this <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> occurs in a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> must be signaled; and in an <GlossaryTerm styled={true} term={"unsafe call"}><i>unsafe call</i></GlossaryTerm> the <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> has undefined consequences. 



