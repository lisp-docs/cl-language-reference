 



It is not permitted to supply too many <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to a <ClLinks  term={"function"}><i>function</i></ClLinks>. Too many arguments means more <ClLinks  term={"argument"}><i>arguments</i></ClLinks> than the number of <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm> plus the number of <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm>; however, if the <ClLinks  term={"function"}><i>function</i></ClLinks> uses **&amp;rest** or **&amp;key**, it is not possible for it to receive too many arguments. 



If this <ClLinks  term={"situation"}><i>situation</i></ClLinks> occurs in a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> must be signaled; and in an <GlossaryTerm styled={true} term={"unsafe call"}><i>unsafe call</i></GlossaryTerm> the <ClLinks  term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



