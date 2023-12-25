**base-char** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> is defined as the *upgraded array element type* of <DictionaryLink styled={true} term={"standard-char"}><b>standard-char</b></DictionaryLink>. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> can support additional <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> (besides the ones listed in this standard) that might or might not be <GlossaryTerm styled={true} term={"supertype"}><i>supertypes</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>. In addition, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> can define <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> to be the *same type* as <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. 



*Base characters* are distinguished in the following respects: 



1\. The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-char"}><b>standard-char</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"subrepertoire"}><i>subrepertoire</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>. 



2\. The selection of *base characters* that are not *standard characters* is implementation defined. 



3\. Only <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> can be <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of a *base string*. 



4\. No upper bound is specified for the number of characters in the <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> <GlossaryTerm styled={true} term={"repertoire"}><i>repertoire</i></GlossaryTerm>; the size of that <GlossaryTerm styled={true} term={"repertoire"}><i>repertoire</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. The lower bound is 96, the number of *standard characters*. 



Whether a character is a *base character* depends on the way that an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> represents <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, and not any other properties of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> or the host operating system. For example, one implementation might encode all <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> as characters having 16-bit encodings, and another might have two kinds of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>: those with characters having 8-bit encodings and those with characters having 16-bit encodings. In the first <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> is 







 



 



equivalent to the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>: there is only one kind of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. In the second <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, the *base characters* might be those <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that could be stored in a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> having 8-bit encodings. In such an implementation, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink> is a *proper subtype* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-char"}><b>standard-char</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>. 



