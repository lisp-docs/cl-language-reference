 



If the reader encounters a *macro character* , then its associated *reader macro function* is invoked and may produce an <ClLinks  term={"object"}><i>object</i></ClLinks> to be returned. This <ClLinks  term={"function"}><i>function</i></ClLinks> may read the <ClLinks  term={"character"}><i>characters</i></ClLinks> following the *macro character* in the <ClLinks  term={"stream"}><i>stream</i></ClLinks> in any syntax and return the <ClLinks  term={"object"}><i>object</i></ClLinks> represented by that syntax. 



Any <ClLinks  term={"character"}><i>character</i></ClLinks> can be made to be a *macro character* . The *macro characters* defined initially in a *conforming implementation* include the following: 



