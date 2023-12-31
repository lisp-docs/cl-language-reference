**base-string** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"base-string"}><b>base-string</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"base-string"}><b>base-string</b></DictionaryLink> is equivalent to (vector base-char). The <GlossaryTerm styled={true} term={"base string"}><i>base string</i></GlossaryTerm> representation is the most efficient <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> representation that can hold an arbitrary sequence of <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(base-string [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (vector base-char *size*); that is, the set of <GlossaryTerm styled={true} term={"base string"}><i>base strings</i></GlossaryTerm> of size *size*. 