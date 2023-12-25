 



A *lambda form* is similar to a *function form*, except that the *function name* is replaced by a *lambda expression*. 



A *lambda form* is equivalent to using *funcall* of a *lexical closure* of the *lambda expression* on the given <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. (In practice, some compilers are more likely to produce inline code for a *lambda form* than for an arbitrary named function that has been declared <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>; however, such a difference is not semantic.) 



For further information, see Section 3.1.3 (Lambda Expressions). 



