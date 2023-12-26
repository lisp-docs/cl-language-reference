 



A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> for <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> at some position in a <ClLinks  term={"program"}><i>program</i></ClLinks> is that part of the <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains information having <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> within the <ClLinks  term={"form"}><i>forms</i></ClLinks> containing that position. A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> contains, among other things, the following: 



*• bindings* of <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>. 



*• bindings* of <ClLinks  term={"function"}><i>functions</i></ClLinks> and <ClLinks  term={"macro"}><i>macros</i></ClLinks>. (Implicit in this is information about those <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> that are locally disabled.) 



*• bindings* of <GlossaryTerm styled={true} term={"block tag"}><i>block tags</i></GlossaryTerm>. 



*• bindings* of <GlossaryTerm styled={true} term={"go tag"}><i>go tags</i></GlossaryTerm>. 



*•* information about <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that is active at any given position in a <ClLinks  term={"program"}><i>program</i></ClLinks> being semantically processed is referred to by definite reference as “the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>,” or sometimes as just “the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>.” 



Within a given <ClLinks  term={"namespace"}><i>namespace</i></ClLinks>, a <ClLinks  term={"name"}><i>name</i></ClLinks> is said to be <ClLinks  term={"bound"}><i>bound</i></ClLinks> in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> if there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its <ClLinks  term={"name"}><i>name</i></ClLinks> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> or, if not, there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> associated with its name in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.  







