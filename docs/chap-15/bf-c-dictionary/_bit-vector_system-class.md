**bit-vector** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *bit vector* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> the *element type* of which is <GlossaryTerm styled={true} term={"bit"}><i>bit</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, for <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink> means (vector bit). 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(bit-vector [*size*]) 



**Compound Type Specifier Arguments:** 



*size*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (array bit (*size*)); that is, the set of *bit vectors* of size *size*. 



**See Also:** 



Section 2.4.8.4 (Sharpsign Asterisk), Section 22.1.3.6 (Printing Bit Vectors), Section 15.1.2.2 (Required Kinds of Specialized Arrays) 



