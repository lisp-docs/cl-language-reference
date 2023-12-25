**simple-string** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"simple-string"}><b>simple-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *simple string* is a specialized one-dimensional *simple array* whose <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> or a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. When used as a *type specifier* for object creation, <DictionaryLink styled={true} term={"simple-string"}><b>simple-string</b></DictionaryLink> means (simple-array character (*size*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (simple-array *c* (*size*)) for all *subtypes c* of <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>; that is, the set of *simple strings* of size *size*. 







 



 



