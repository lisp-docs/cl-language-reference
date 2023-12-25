**base-string** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"base-string"}><b>base-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-string"}><b>base-string</b></DictionaryLink> is equivalent to (vector base-char). The *base string* representation is the most efficient <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> representation that can hold an arbitrary sequence of *standard characters*. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(base-string [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (vector base-char *size*); that is, the set of *base strings* of size *size*. 