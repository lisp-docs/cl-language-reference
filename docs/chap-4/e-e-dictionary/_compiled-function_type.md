**compiled-function** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



Any <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> may be considered by an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be a a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> if it contains no references to <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> that must be expanded at run time, and it contains no unresolved references to <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm>. See Section 3.2.2 (Compilation Semantics). 



<GlossaryTerm  term={"function"}><i>Functions</i></GlossaryTerm> whose definitions appear lexically within a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> that has been *compiled* with <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> and then *loaded* with <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> are of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. <GlossaryTerm  term={"function"}><i>Functions</i></GlossaryTerm> produced by the <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> function are of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. Other <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> might also be of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>. 



