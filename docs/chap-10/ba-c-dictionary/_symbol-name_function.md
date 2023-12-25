**symbol-name** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"symbol-name"}><b>symbol-name</b></DictionaryLink> *symbol → name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The consequences are undefined if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is ever modified. 



**Examples:**
```lisp

(symbol-name ’temp) *→* "TEMP" 
(symbol-name :start) *→* "START" 
(symbol-name (gensym)) *→* "G1234" ;for example 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink> 



