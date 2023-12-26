 



It is not permitted to supply a keyword argument to a <ClLinks  term={"function"}><i>function</i></ClLinks> using a name that is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



If this <ClLinks  term={"situation"}><i>situation</i></ClLinks> occurs in a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an <GlossaryTerm styled={true} term={"unsafe call"}><i>unsafe call</i></GlossaryTerm> the <ClLinks  term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



