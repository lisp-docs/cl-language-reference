**simple-string** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"simple-string"}><b>simple-string</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm> is a specialized one-dimensional <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm> whose <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> or a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. When used as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for object creation, <DictionaryLink  term={"simple-string"}><b>simple-string</b></DictionaryLink> means (simple-array character (*size*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (simple-array *c* (*size*)) for all *subtypes c* of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>; that is, the set of <GlossaryTerm styled={true} term={"simple string"}><i>simple strings</i></GlossaryTerm> of size *size*. 







 



 



