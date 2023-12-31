**simple-base-string** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"simple-base-string"}><b>simple-base-string</b></DictionaryLink>, <DictionaryLink  term={"base-string"}><b>base-string</b></DictionaryLink>, <DictionaryLink  term={"simple-string"}><b>simple-string</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-base-string"}><b>simple-base-string</b></DictionaryLink> is equivalent to (simple-array base-char (\*)). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-base-string [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This is equivalent to the type (simple-array base-char (*size*)); that is, the set of *simple base strings* of size *size*. 



