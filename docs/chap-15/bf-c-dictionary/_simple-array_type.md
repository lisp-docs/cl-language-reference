**simple-array** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is not displaced to another <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, has no *fill pointer* , and is not *expressly adjustable* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>. The concept of a *simple array* exists to allow the implementation to use a specialized representation and to allow the user to declare that certain values will always be *simple arrays*. 



The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-vector"}><b>simple-vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-string"}><b>simple-string</b></DictionaryLink>, and <DictionaryLink styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>, for they respectively mean (simple-array t (\*)), the union of all (simple-array *c* (\*)) for any *c* being a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, and (simple-array bit (\*)). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>—a *valid array dimension*. 



*element-type*—a *type specifier* . 



<GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 







 



 



**Compound Type Specifier Description:** 



This *compound type specifier* is treated exactly as the corresponding *compound type specifier* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> would be treated, except that the set is further constrained to include only *simple arrays*. 



**Notes:** 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether *displaced arrays*, *vectors* with *fill pointers*, or arrays that are *actually adjustable* are *simple arrays*. 



(simple-array \*) refers to all *simple arrays* regardless of element type, (simple-array *type specifier*) refers only to those *simple arrays* that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>. 



