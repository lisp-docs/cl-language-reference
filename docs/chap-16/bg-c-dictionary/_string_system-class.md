**string** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is a *specialized vector* whose <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> or a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. When used as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for object creation, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> means (vector character). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (array *c* (*size*)) for all *subtypes c* of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>; that is, the set of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> of size *size*. 



**See Also:** 



Section 16.1 (String Concepts), Section 2.4.5 (Double-Quote), Section 22.1.3.4 (Printing Strings) 