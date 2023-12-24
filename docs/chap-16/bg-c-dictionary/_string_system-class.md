**string** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is a *specialized vector* whose <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks> or a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. When used as a *type specifier* for object creation, <ClLinks styled={true} term={"string"}><b>string</b></ClLinks> means (vector character). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the union of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (array *c* (*size*)) for all *subtypes c* of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; that is, the set of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> of size *size*. 



**See Also:** 



Section 16.1 (String Concepts), Section 2.4.5 (Double-Quote), Section 22.1.3.4 (Printing Strings) 