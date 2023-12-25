**vector** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



Any one-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>; for all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> x, (vector x) is the same as (array x (\*)). The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (vector t), the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink> are *disjoint subtypes* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(vector [*\{element-type |* **\****\}* [*\{size |* **\****\}*]]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



*element-type*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of specialized <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> whose *element type* and <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm> match the specified values. Specifically: 



If *element-type* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> are not excluded on the basis of their *element type*. Otherwise, only those <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 







 



 



If a *size* is specified, the set includes only those <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> whose only <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm> is *size*. If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** is specified instead of a *size*, the set is not restricted on the basis of <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>. 



**See Also:** 



Section 15.1.2.2 (Required Kinds of Specialized Arrays), Section 2.4.8.3 (Sharpsign Left Parenthesis), Section 22.1.3.7 (Printing Other Vectors), Section 2.4.8.12 (Sharpsign A) 



**Notes:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (vector *e s*) is equivalent to the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (array *e* (*s*)). 



The type (vector bit) has the name <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink>. 



The union of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (vector *C*), where *C* is any <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, has the name <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>. 



(vector \*) refers to all <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> regardless of element type, (vector *type-specifier*) refers only to those <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> that can result from giving *type-specifier* as the :element-type argument to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>. 



