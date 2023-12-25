**simple-base-string** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"simple-base-string"}><b>simple-base-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"base-string"}><b>base-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-string"}><b>simple-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-base-string"}><b>simple-base-string</b></DictionaryLink> is equivalent to (simple-array base-char (\*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-base-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (simple-array base-char (*size*)); that is, the set of *simple base strings* of size *size*. 



