**simple-string** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks>, <ClLinks  term={"string"}><b>string</b></ClLinks>, <ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm> is a specialized one-dimensional <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm> whose <ClLinks  term={"element"}><i>elements</i></ClLinks> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks> or a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>. When used as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for object creation, <ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks> means (simple-array character (*size*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <ClLinks  term={"type"}><i>types</i></ClLinks> (simple-array *c* (*size*)) for all *subtypes c* of <ClLinks  term={"character"}><b>character</b></ClLinks>; that is, the set of <GlossaryTerm styled={true} term={"simple string"}><i>simple strings</i></GlossaryTerm> of size *size*. 







 



 



