**ftype** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(ftype *type \{function-name\}*\*) 



**Arguments:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



<ClLinks  term={"type"}><i>type</i></ClLinks>—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> or <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"function"}><i>function</i></ClLinks> 



**Description:** 



Specifies that the <ClLinks  term={"function"}><i>functions</i></ClLinks> named by *function-names* are of the functional type <ClLinks  term={"type"}><i>type</i></ClLinks>. For example: 



(declare (ftype (function (integer list) t) ith) 



(ftype (function (number) float) sine cosine)) 



If one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> mentioned has a lexically apparent local definition (as made by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>), then the declaration applies to that local definition and not to the global function definition. <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations never apply to variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> (see type). 



The lexically apparent bindings of *function-names* must not be <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions. (This is because <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declares the functional definition of each <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to be of a particular subtype of <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, and <ClLinks  term={"macro"}><i>macros</i></ClLinks> do not denote <ClLinks  term={"function"}><i>functions</i></ClLinks>.) 



<DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations can be <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations of functions that appear before the body of a <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> that defines that function are <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. Such declarations in other contexts are <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 







 



 



