**simple-bit-vector** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of a *bit vector* that is not displaced to another <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, has no *fill pointer* , and is not *expressly adjustable* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-bit-vector [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. The default is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the same type as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (simple-array bit (*size*)); that is, the set of *simple bit vectors* of size *size*. 



