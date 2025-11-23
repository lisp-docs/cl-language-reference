A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> for <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> at some position in a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> is that part of the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> that contains information having <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> within the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> containing that position. A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> contains, among other things, the following: 



*• bindings* of <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>.
*• bindings* of <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> and <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>. (Implicit in this is information about those <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> that are locally disabled.)
*• bindings* of <GlossaryTerm styled={true} term={"block tag"}><i>block tags</i></GlossaryTerm>.
*• bindings* of <GlossaryTerm styled={true} term={"go tag"}><i>go tags</i></GlossaryTerm>.
*•* information about <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>.
The <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that is active at any given position in a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> being semantically processed is referred to by definite reference as “the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>,” or sometimes as just “the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>.” 



Within a given <GlossaryTerm  term={"namespace"}><i>namespace</i></GlossaryTerm>, a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is said to be <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> if there is a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> associated with its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> or, if not, there is a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> associated with its name in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.  







