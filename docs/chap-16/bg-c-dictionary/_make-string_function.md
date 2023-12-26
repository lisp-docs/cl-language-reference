**make-string** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-string"}><b>make-string</b></DictionaryLink> *size* &amp;key *initial-element element-type → string* 



**Arguments and Values:** 



*size*—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm>. 



*initial-element*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . The default is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"make-string"}><b>make-string</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm> of length *size* whose elements have been initialized to *initial-element*. 



The *element-type* names the <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>; a <ClLinks  term={"string"}><i>string</i></ClLinks> is constructed of the most *specialized type* that can accommodate <ClLinks  term={"element"}><i>elements</i></ClLinks> of the given <ClLinks  term={"type"}><i>type</i></ClLinks>. 



**Examples:**
```lisp
(make-string 10 :initial-element #\5) → "5555555555" 
(length (make-string 10)) → 10 
```
**Affected By:** 



The <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 







 



 





