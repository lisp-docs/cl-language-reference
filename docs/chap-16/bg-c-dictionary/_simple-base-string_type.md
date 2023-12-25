**simple-base-string** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-base-string"}><b>simple-base-string</b></ClLinks>, <ClLinks  term={"base-string"}><b>base-string</b></ClLinks>, <ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks>, <ClLinks  term={"string"}><b>string</b></ClLinks>, <ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-base-string"}><b>simple-base-string</b></ClLinks> is equivalent to (simple-array base-char (\*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-base-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (simple-array base-char (*size*)); that is, the set of *simple base strings* of size *size*. 



