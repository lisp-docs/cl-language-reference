**simple-vector** <GlossaryTerm  term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink  term={"simple-array"}><b>simple-array</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> that is not displaced to another <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , is not <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> and is able to hold elements of any <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink>. 



The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"simple-vector"}><b>simple-vector</b></DictionaryLink> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, and is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (vector t). 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(simple-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. The default is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This is the same as (simple-array t (*size*)). 







 



 



