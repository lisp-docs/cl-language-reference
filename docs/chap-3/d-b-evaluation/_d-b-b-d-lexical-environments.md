 



A *lexical environment* for <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> at some position in a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> is that part of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains information having *lexical scope* within the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> containing that position. A *lexical environment* contains, among other things, the following: 



*• bindings* of *lexical variables* and *symbol macros*. 



*• bindings* of <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. (Implicit in this is information about those *compiler macros* that are locally disabled.) 



*• bindings* of *block tags*. 



*• bindings* of *go tags*. 



*•* information about <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>. 



The *lexical environment* that is active at any given position in a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> being semantically processed is referred to by definite reference as “the current *lexical environment*,” or sometimes as just “the *lexical environment*.” 



Within a given <GlossaryTerm styled={true} term={"namespace"}><i>namespace</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in a *lexical environment* if there is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> associated with its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in the *lexical environment* or, if not, there is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> associated with its name in the *global environment*.  







