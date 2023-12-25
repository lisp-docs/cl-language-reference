**compiled-function** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



Any <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> may be considered by an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a a *compiled function* if it contains no references to <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> that must be expanded at run time, and it contains no unresolved references to *load time values*. See Section 3.2.2 (Compilation Semantics). 



<GlossaryTerm styled={true} term={"function"}><i>Functions</i></GlossaryTerm> whose definitions appear lexically within a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> that has been *compiled* with <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> and then *loaded* with <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. <GlossaryTerm styled={true} term={"function"}><i>Functions</i></GlossaryTerm> produced by the <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> function are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. Other <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> might also be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. 



