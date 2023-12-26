**simple-vector** <ClLinks  term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> of a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that is not displaced to another <ClLinks  term={"array"}><i>array</i></ClLinks>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> and is able to hold elements of any <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>. 



The <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, and is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (vector t). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. The default is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This is the same as (simple-array t (*size*)). 







 



 



