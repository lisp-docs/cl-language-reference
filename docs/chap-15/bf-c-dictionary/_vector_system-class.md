**vector** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



Any one-dimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> . 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>; for all <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> x, (vector x) is the same as (array x (\*)). The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (vector t), the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, and the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"bit-vector"}><b>bit-vector</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(vector [*\{element-type |* **\****\}* [*\{size |* **\****\}*]]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Compound Type Specifier Description:** 



This denotes the set of specialized <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> and <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm> match the specified values. Specifically: 



If *element-type* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> are not excluded on the basis of their <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm>. Otherwise, only those <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> are included whose <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 







 



 



If a *size* is specified, the set includes only those <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> whose only <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm> is *size*. If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** is specified instead of a *size*, the set is not restricted on the basis of <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>. 



**See Also:** 



Section 15.1.2.2 (Required Kinds of Specialized Arrays), Section 2.4.8.3 (Sharpsign Left Parenthesis), Section 22.1.3.7 (Printing Other Vectors), Section 2.4.8.12 (Sharpsign A) 



**Notes:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (vector *e s*) is equivalent to the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (array *e* (*s*)). 



The type (vector bit) has the name <DictionaryLink  term={"bit-vector"}><b>bit-vector</b></DictionaryLink>. 



The union of all <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (vector *C*), where *C* is any <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, has the name <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>. 



(vector \*) refers to all <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> regardless of element type, (vector *type-specifier*) refers only to those <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>. 



