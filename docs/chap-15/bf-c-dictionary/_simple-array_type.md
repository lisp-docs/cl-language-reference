**simple-array** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of an <ClLinks  term={"array"}><i>array</i></ClLinks> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>. The concept of a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm> exists to allow the implementation to use a specialized representation and to allow the user to declare that certain values will always be <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks>, <ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks>, and <ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks> are *disjoint subtypes* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>, for they respectively mean (simple-array t (\*)), the union of all (simple-array *c* (\*)) for any *c* being a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>, and (simple-array bit (\*)). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"dimension"}><i>dimension</i></ClLinks>—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<ClLinks  term={"rank"}><i>rank</i></ClLinks>—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. 







 



 



**Compound Type Specifier Description:** 



This <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifier</i></GlossaryTerm> is treated exactly as the corresponding <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifier</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"array"}><b>array</b></ClLinks> would be treated, except that the set is further constrained to include only <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



**Notes:** 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <GlossaryTerm styled={true} term={"displaced array"}><i>displaced arrays</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>, or arrays that are <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



(simple-array \*) refers to all <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm> regardless of element type, (simple-array <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm>) refers only to those <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <ClLinks  term={"make-array"}><b>make-array</b></ClLinks>. 



