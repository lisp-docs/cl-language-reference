**simple-bit-vector** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<DictionaryLink  term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>, <DictionaryLink  term={"bit-vector"}><b>bit-vector</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of a <GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , and is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(simple-bit-vector [*size*]) 







 



 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the same type as the <ClLinks  term={"type"}><i>type</i></ClLinks> (simple-array bit (*size*)); that is, the set of <GlossaryTerm styled={true} term={"simple bit vector"}><i>simple bit vectors</i></GlossaryTerm> of size *size*. 



