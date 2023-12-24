**bit-vector** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *bit vector* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> the *element type* of which is <ClLinks styled={true} term={"bit"}><i>bit</i></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, for <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks> means (vector bit). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(bit-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (array bit (*size*)); that is, the set of *bit vectors* of size *size*. 



**See Also:** 



Section 2.4.8.4 (Sharpsign Asterisk), Section 22.1.3.6 (Printing Bit Vectors), Section 15.1.2.2 (Required Kinds of Specialized Arrays) 



