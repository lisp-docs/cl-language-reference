**simple-array** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that is not displaced to another <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>. The concept of a <GlossaryTerm styled={true} term={"simple array"}><i>simple array</i></GlossaryTerm> exists to allow the implementation to use a specialized representation and to allow the user to declare that certain values will always be <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>, <DictionaryLink  term={"simple-string"}><b>simple-string</b></DictionaryLink>, and <DictionaryLink  term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, for they respectively mean (simple-array t (\*)), the union of all (simple-array *c* (\*)) for any *c* being a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, and (simple-array bit (\*)). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 







 



 



**Compound Type Specifier Description:** 



This <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifier</i></GlossaryTerm> is treated exactly as the corresponding <GlossaryTerm styled={true} term={"compound type specifier"}><i>compound type specifier</i></GlossaryTerm> for <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"array"}><b>array</b></DictionaryLink> would be treated, except that the set is further constrained to include only <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



**Notes:** 



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm styled={true} term={"displaced array"}><i>displaced arrays</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>, or arrays that are <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm>. 



(simple-array \*) refers to all <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm> regardless of element type, (simple-array <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm>) refers only to those <GlossaryTerm styled={true} term={"simple array"}><i>simple arrays</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>. 



