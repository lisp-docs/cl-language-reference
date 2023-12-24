**simple-bit-vector** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>, <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of a *bit vector* that is not displaced to another <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, has no *fill pointer* , and is not *expressly adjustable* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-bit-vector [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the same type as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (simple-array bit (*size*)); that is, the set of *simple bit vectors* of size *size*. 



