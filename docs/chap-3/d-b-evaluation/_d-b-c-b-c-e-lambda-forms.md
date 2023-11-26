 

A *lambda form* is similar to a *function form*, except that the *function name* is replaced by a *lambda expression*. 

A *lambda form* is equivalent to using *funcall* of a *lexical closure* of the *lambda expression* on the given *arguments*. (In practice, some compilers are more likely to produce inline code for a *lambda form* than for an arbitrary named function that has been declared **inline**; however, such a difference is not semantic.) 

For further information, see Section 3.1.3 (Lambda Expressions). 

