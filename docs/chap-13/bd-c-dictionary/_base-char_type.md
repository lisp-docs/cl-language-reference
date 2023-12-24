**base-char** <ClLinks styled={true} term={"type"}><i>Type</i></ClLinks> 



**Supertypes:** 



<ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>, <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> is defined as the *upgraded array element type* of <ClLinks styled={true} term={"standard-char"}><b>standard-char</b></ClLinks>. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> can support additional <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks> (besides the ones listed in this standard) that might or might not be <ClLinks styled={true} term={"supertype"}><i>supertypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>. In addition, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> can define <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> to be the *same type* as <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. 



*Base characters* are distinguished in the following respects: 



1\. The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"standard-char"}><b>standard-char</b></ClLinks> is a <ClLinks styled={true} term={"subrepertoire"}><i>subrepertoire</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>. 



2\. The selection of *base characters* that are not *standard characters* is implementation defined. 



3\. Only <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> can be <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of a *base string*. 



4\. No upper bound is specified for the number of characters in the <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> <ClLinks styled={true} term={"repertoire"}><i>repertoire</i></ClLinks>; the size of that <ClLinks styled={true} term={"repertoire"}><i>repertoire</i></ClLinks> is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. The lower bound is 96, the number of *standard characters*. 



Whether a character is a *base character* depends on the way that an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> represents <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, and not any other properties of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> or the host operating system. For example, one implementation might encode all <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> as characters having 16-bit encodings, and another might have two kinds of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>: those with characters having 8-bit encodings and those with characters having 16-bit encodings. In the first <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> is 







 



 



equivalent to the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>: there is only one kind of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. In the second <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, the *base characters* might be those <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that could be stored in a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> having 8-bit encodings. In such an implementation, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks> is a *proper subtype* of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"standard-char"}><b>standard-char</b></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>. 



