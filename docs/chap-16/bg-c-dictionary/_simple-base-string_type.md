**simple-base-string** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"simple-base-string"}><b>simple-base-string</b></ClLinks>, <ClLinks styled={true} term={"base-string"}><b>base-string</b></ClLinks>, <ClLinks styled={true} term={"simple-string"}><b>simple-string</b></ClLinks>, <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-base-string"}><b>simple-base-string</b></ClLinks> is equivalent to (simple-array base-char (\*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-base-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (simple-array base-char (*size*)); that is, the set of *simple base strings* of size *size*. 



