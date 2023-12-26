**make-string** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-string"}><b>make-string</b></DictionaryLink> *size* &amp;key *initial-element element-type → string* 



**Arguments and Values:** 



*size*—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm>. 



*initial-element*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . The default is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"make-string"}><b>make-string</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm> of length *size* whose elements have been initialized to *initial-element*. 



The *element-type* names the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is constructed of the most *specialized type* that can accommodate <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



**Examples:**
```lisp
(make-string 10 :initial-element #\5) → "5555555555" 
(length (make-string 10)) → 10 
```
**Affected By:** 



The <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 







 



 





