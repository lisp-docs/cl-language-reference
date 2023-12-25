**make-string** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-string"}><b>make-string</b></DictionaryLink> *size* &amp;key *initial-element element-type → string* 



**Arguments and Values:** 



*size*—a *valid array dimension*. 



*initial-element*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*element-type*—a *type specifier* . The default is <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a *simple string*. 



**Description:** 



<DictionaryLink styled={true} term={"make-string"}><b>make-string</b></DictionaryLink> returns a *simple string* of length *size* whose elements have been initialized to *initial-element*. 



The *element-type* names the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is constructed of the most *specialized type* that can accommodate <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**Examples:**
```lisp

(make-string 10 :initial-element #\5) *→* "5555555555" 
(length (make-string 10)) *→* 10 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 







 



 





