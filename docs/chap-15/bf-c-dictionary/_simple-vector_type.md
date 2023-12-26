**simple-vector** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks>, <ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> and is able to hold elements of any <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks>. 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"vector"}><b>vector</b></ClLinks>, and is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (vector t). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is the same as (simple-array t (*size*)). 







 



 



