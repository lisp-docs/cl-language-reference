**string** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is a *specialized vector* whose <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> or a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. When used as a *type specifier* for object creation, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> means (vector character). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (array *c* (*size*)) for all *subtypes c* of <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>; that is, the set of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> of size *size*. 



**See Also:** 



Section 16.1 (String Concepts), Section 2.4.5 (Double-Quote), Section 22.1.3.4 (Printing Strings) 