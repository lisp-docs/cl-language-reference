**simple-string** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"simple-string"}><b>simple-string</b></ClLinks>, <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *simple string* is a specialized one-dimensional *simple array* whose <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks> or a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. When used as a *type specifier* for object creation, <ClLinks styled={true} term={"simple-string"}><b>simple-string</b></ClLinks> means (simple-array character (*size*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (simple-array *c* (*size*)) for all *subtypes c* of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; that is, the set of *simple strings* of size *size*. 







 



 



