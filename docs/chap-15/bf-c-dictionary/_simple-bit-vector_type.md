**simple-bit-vector** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>, <ClLinks  term={"bit-vector"}><b>bit-vector</b></ClLinks>, <ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of a <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-bit-vector [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the same type as the <ClLinks  term={"type"}><i>type</i></ClLinks> (simple-array bit (*size*)); that is, the set of <GlossaryTerm styled={true} term={"simple bit vector"}><i>simple bit vectors</i></GlossaryTerm> of size *size*. 



