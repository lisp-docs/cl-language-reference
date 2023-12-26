**compiled-function** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



Any <ClLinks  term={"function"}><i>function</i></ClLinks> may be considered by an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> if it contains no references to <ClLinks  term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and it contains no unresolved references to <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm>. See Section 3.2.2 (Compilation Semantics). 



<ClLinks  term={"function"}><i>Functions</i></ClLinks> whose definitions appear lexically within a <ClLinks  term={"file"}><i>file</i></ClLinks> that has been *compiled* with <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> and then *loaded* with <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. <ClLinks  term={"function"}><i>Functions</i></ClLinks> produced by the <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> function are of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. Other <ClLinks  term={"function"}><i>functions</i></ClLinks> might also be of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. 



