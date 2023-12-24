**vector** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



Any one-dimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>; for all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> x, (vector x) is the same as (array x (\*)). The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (vector t), the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>, and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks> are *disjoint subtypes* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(vector [*\{element-type |* **\****\}* [*\{size |* **\****\}*]]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>. 



*element-type*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of specialized <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> whose *element type* and <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks> match the specified values. Specifically: 



If *element-type* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***, <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> are not excluded on the basis of their *element type*. Otherwise, only those <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 







 



 



If a *size* is specified, the set includes only those <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> whose only <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks> is *size*. If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\*** is specified instead of a *size*, the set is not restricted on the basis of <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks>. 



**See Also:** 



Section 15.1.2.2 (Required Kinds of Specialized Arrays), Section 2.4.8.3 (Sharpsign Left Parenthesis), Section 22.1.3.7 (Printing Other Vectors), Section 2.4.8.12 (Sharpsign A) 



**Notes:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (vector *e s*) is equivalent to the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (array *e* (*s*)). 



The type (vector bit) has the name <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks>. 



The union of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (vector *C*), where *C* is any <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, has the name <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>. 



(vector \*) refers to all <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> regardless of element type, (vector *type-specifier*) refers only to those <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> that can result from giving *type-specifier* as the :element-type argument to <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>. 



