**vector** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<ClLinks  term={"vector"}><b>vector</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



Any one-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> . 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"vector"}><b>vector</b></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"array"}><b>array</b></ClLinks>; for all <ClLinks  term={"type"}><i>types</i></ClLinks> x, (vector x) is the same as (array x (\*)). The <ClLinks  term={"type"}><i>type</i></ClLinks> (vector t), the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"string"}><b>string</b></ClLinks>, and the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"bit-vector"}><b>bit-vector</b></ClLinks> are *disjoint subtypes* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"vector"}><b>vector</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(vector [*\{element-type |* **\****\}* [*\{size |* **\****\}*]]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Compound Type Specifier Description:** 



This denotes the set of specialized <ClLinks  term={"vector"}><i>vectors</i></ClLinks> whose <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> and <ClLinks  term={"dimension"}><i>dimension</i></ClLinks> match the specified values. Specifically: 



If *element-type* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***, <ClLinks  term={"vector"}><i>vectors</i></ClLinks> are not excluded on the basis of their <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm>. Otherwise, only those <ClLinks  term={"vector"}><i>vectors</i></ClLinks> are included whose <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 







 



 



If a *size* is specified, the set includes only those <ClLinks  term={"vector"}><i>vectors</i></ClLinks> whose only <ClLinks  term={"dimension"}><i>dimension</i></ClLinks> is *size*. If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\*** is specified instead of a *size*, the set is not restricted on the basis of <ClLinks  term={"dimension"}><i>dimension</i></ClLinks>. 



**See Also:** 



Section 15.1.2.2 (Required Kinds of Specialized Arrays), Section 2.4.8.3 (Sharpsign Left Parenthesis), Section 22.1.3.7 (Printing Other Vectors), Section 2.4.8.12 (Sharpsign A) 



**Notes:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (vector *e s*) is equivalent to the <ClLinks  term={"type"}><i>type</i></ClLinks> (array *e* (*s*)). 



The type (vector bit) has the name <ClLinks  term={"bit-vector"}><b>bit-vector</b></ClLinks>. 



The union of all <ClLinks  term={"type"}><i>types</i></ClLinks> (vector *C*), where *C* is any <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"character"}><b>character</b></ClLinks>, has the name <ClLinks  term={"string"}><b>string</b></ClLinks>. 



(vector \*) refers to all <ClLinks  term={"vector"}><i>vectors</i></ClLinks> regardless of element type, (vector *type-specifier*) refers only to those <ClLinks  term={"vector"}><i>vectors</i></ClLinks> that can result from giving *type-specifier* as the :element-type argument to <ClLinks  term={"make-array"}><b>make-array</b></ClLinks>. 



