**compiled-function** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>, <ClLinks  term={"function"}><b>function</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



Any <ClLinks  term={"function"}><i>function</i></ClLinks> may be considered by an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> if it contains no references to <ClLinks  term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and it contains no unresolved references to <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm>. See Section 3.2.2 (Compilation Semantics). 



<ClLinks  term={"function"}><i>Functions</i></ClLinks> whose definitions appear lexically within a <ClLinks  term={"file"}><i>file</i></ClLinks> that has been *compiled* with <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> and then *loaded* with <ClLinks  term={"load"}><b>load</b></ClLinks> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>. <ClLinks  term={"function"}><i>Functions</i></ClLinks> produced by the <ClLinks  term={"compile"}><b>compile</b></ClLinks> function are of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>. Other <ClLinks  term={"function"}><i>functions</i></ClLinks> might also be of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>. 



