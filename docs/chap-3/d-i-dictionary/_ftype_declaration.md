**ftype** <GlossaryTerm  term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(ftype *type \{function-name\}*\*) 



**Arguments:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



<GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Valid Context:** 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> or <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm> 



**Binding Types Aected:** 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



**Description:** 



Specifies that the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> named by *function-names* are of the functional type <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. For example: 



(declare (ftype (function (integer list) t) ith) 



(ftype (function (number) float) sine cosine)) 



If one of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> mentioned has a lexically apparent local definition (as made by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>), then the declaration applies to that local definition and not to the global function definition. <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations never apply to variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> (see type). 



The lexically apparent bindings of *function-names* must not be <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definitions. (This is because <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declares the functional definition of each <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to be of a particular subtype of <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, and <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> do not denote <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>.) 



<DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations can be <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> declarations of functions that appear before the body of a <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that defines that function are <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. Such declarations in other contexts are <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 







 



 



