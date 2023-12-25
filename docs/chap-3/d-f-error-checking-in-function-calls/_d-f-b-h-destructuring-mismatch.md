 



When matching a *destructuring lambda list* against a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, the pattern and the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> must have compatible *tree structure*, as described in Section 3.4.4 (Macro Lambda Lists). 



Otherwise, in a *safe call*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> must be signaled; and in an *unsafe call* the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> has undefined consequences. 



