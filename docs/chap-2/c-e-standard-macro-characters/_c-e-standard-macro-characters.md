 



If the reader encounters a *macro character* , then its associated *reader macro function* is invoked and may produce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to be returned. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may read the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> following the *macro character* in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> in any syntax and return the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> represented by that syntax. 



Any <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> can be made to be a *macro character* . The *macro characters* defined initially in a *conforming implementation* include the following: 



