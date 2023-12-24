 



A *lexical environment* for <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> at some position in a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> is that part of the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains information having *lexical scope* within the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> containing that position. A *lexical environment* contains, among other things, the following: 



*• bindings* of *lexical variables* and *symbol macros*. 



*• bindings* of <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> and <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>. (Implicit in this is information about those *compiler macros* that are locally disabled.) 



*• bindings* of *block tags*. 



*• bindings* of *go tags*. 



*•* information about <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks>. 



The *lexical environment* that is active at any given position in a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> being semantically processed is referred to by definite reference as “the current *lexical environment*,” or sometimes as just “the *lexical environment*.” 



Within a given <ClLinks styled={true} term={"namespace"}><i>namespace</i></ClLinks>, a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is said to be <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> in a *lexical environment* if there is a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> associated with its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> in the *lexical environment* or, if not, there is a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> associated with its name in the *global environment*.  







