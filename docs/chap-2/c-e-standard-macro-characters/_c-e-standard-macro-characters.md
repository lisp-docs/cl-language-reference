 



If the reader encounters a *macro character* , then its associated *reader macro function* is invoked and may produce an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to be returned. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may read the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> following the *macro character* in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> in any syntax and return the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> represented by that syntax. 



Any <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> can be made to be a *macro character* . The *macro characters* defined initially in a *conforming implementation* include the following: 



