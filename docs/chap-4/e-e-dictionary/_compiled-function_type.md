**compiled-function** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



Any <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> may be considered by an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a a *compiled function* if it contains no references to <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and it contains no unresolved references to *load time values*. See Section 3.2.2 (Compilation Semantics). 



<ClLinks styled={true} term={"function"}><i>Functions</i></ClLinks> whose definitions appear lexically within a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> that has been *compiled* with <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> and then *loaded* with <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>. <ClLinks styled={true} term={"function"}><i>Functions</i></ClLinks> produced by the <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> function are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>. Other <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> might also be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>. 



