**simple-vector** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that is not displaced to another <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, has no *fill pointer* , is not *expressly adjustable* and is able to hold elements of any <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, and is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (vector t). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is the same as (simple-array t (*size*)). 







 



 



