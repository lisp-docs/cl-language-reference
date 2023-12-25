**simple-array** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of an <ClLinks  term={"array"}><i>array</i></ClLinks> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no *fill pointer* , and is not *expressly adjustable* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>. The concept of a *simple array* exists to allow the implementation to use a specialized representation and to allow the user to declare that certain values will always be *simple arrays*. 



The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks>, <ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks>, and <ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks> are *disjoint subtypes* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, for they respectively mean (simple-array t (\*)), the union of all (simple-array *c* (\*)) for any *c* being a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>, and (simple-array bit (\*)). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"dimension"}><i>dimension</i></ClLinks>—a *valid array dimension*. 



*element-type*—a *type specifier* . 



<ClLinks  term={"rank"}><i>rank</i></ClLinks>—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. 







 



 



**Compound Type Specifier Description:** 



This *compound type specifier* is treated exactly as the corresponding *compound type specifier* for <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"array"}><b>array</b></ClLinks> would be treated, except that the set is further constrained to include only *simple arrays*. 



**Notes:** 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *displaced arrays*, *vectors* with *fill pointers*, or arrays that are *actually adjustable* are *simple arrays*. 



(simple-array \*) refers to all *simple arrays* regardless of element type, (simple-array *type specifier*) refers only to those *simple arrays* that can result from giving *type-specifier* as the :element-type argument to <ClLinks  term={"make-array"}><b>make-array</b></ClLinks>. 



