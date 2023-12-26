**base-string** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"base-string"}><b>base-string</b></ClLinks>, <ClLinks  term={"string"}><b>string</b></ClLinks>, <ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"base-string"}><b>base-string</b></ClLinks> is equivalent to (vector base-char). The <GlossaryTerm styled={true} term={"base string"}><i>base string</i></GlossaryTerm> representation is the most efficient <ClLinks  term={"string"}><i>string</i></ClLinks> representation that can hold an arbitrary sequence of <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(base-string [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (vector base-char *size*); that is, the set of <GlossaryTerm styled={true} term={"base string"}><i>base strings</i></GlossaryTerm> of size *size*. 