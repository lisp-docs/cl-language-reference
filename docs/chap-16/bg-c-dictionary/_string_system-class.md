**string** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <ClLinks  term={"string"}><i>string</i></ClLinks> is a *specialized vector* whose <ClLinks  term={"element"}><i>elements</i></ClLinks> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> or a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. When used as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for object creation, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> means (vector character). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <ClLinks  term={"type"}><i>types</i></ClLinks> (array *c* (*size*)) for all *subtypes c* of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>; that is, the set of <ClLinks  term={"string"}><i>strings</i></ClLinks> of size *size*. 



**See Also:** 



Section 16.1 (String Concepts), Section 2.4.5 (Double-Quote), Section 22.1.3.4 (Printing Strings) 