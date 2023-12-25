**ftype** <GlossaryTerm styled={true} term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(ftype *type \{function-name\}*\*) 



**Arguments:** 



*function-name*—a *function name*. 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *type specifier* . 



**Valid Context:** 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm> 



**Binding Types Aected:** 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



**Description:** 



Specifies that the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> named by *function-names* are of the functional type <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. For example: 



(declare (ftype (function (integer list) t) ith) 



(ftype (function (number) float) sine cosine)) 



If one of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> mentioned has a lexically apparent local definition (as made by <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink>), then the declaration applies to that local definition and not to the global function definition. <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declarations never apply to variable <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> (see type). 



The lexically apparent bindings of *function-names* must not be <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definitions. (This is because <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declares the functional definition of each *function name* to be of a particular subtype of <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, and <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> do not denote <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>.) 



<DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declarations can be *free declarations* or *bound declarations*. <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declarations of functions that appear before the body of a <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink styled={true} term={"labels"}><b>labels</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defines that function are *bound declarations*. Such declarations in other contexts are *free declarations*. 



**See Also:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> 







 



 



