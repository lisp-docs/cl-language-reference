**symbol-name** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> *symbol → name* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The consequences are undefined if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is ever modified. 



**Examples:**
```lisp
(symbol-name ’temp) → "TEMP" 
(symbol-name :start) → "START" 
(symbol-name (gensym)) → "G1234" ;for example 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink> 



