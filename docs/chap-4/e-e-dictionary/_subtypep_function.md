**subtypep** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> *type-1 type-2* &amp;optional *environment → subtype-p, valid-p* 



**Arguments and Values:** 



*type-1*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*type-2*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, denoting the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> and the current <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*subtype-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*valid-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



If *type-1* is a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of *type-2*, the first <ClLinks  term={"value"}><i>value</i></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks>. Otherwise, the first <ClLinks  term={"value"}><i>value</i></ClLinks> is <ClLinks  term={"false"}><i>false</i></ClLinks>, indicating that either *type-1* is not a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *type-2*, or else *type-1* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *type-2* but is not a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm>. 



A second <ClLinks  term={"value"}><i>value</i></ClLinks> is also returned indicating the ‘certainty’ of the first <ClLinks  term={"value"}><i>value</i></ClLinks>. If this value is <ClLinks  term={"true"}><i>true</i></ClLinks>, then the first value is an accurate indication of the <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> relationship. (The second <ClLinks  term={"value"}><i>value</i></ClLinks> is always <ClLinks  term={"true"}><i>true</i></ClLinks> when the first <ClLinks  term={"value"}><i>value</i></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks>.)  







<DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> 



Figure 4–9 summarizes the possible combinations of <ClLinks  term={"value"}><i>values</i></ClLinks> that might result. 



|**Value 1 Value 2 Meaning**|

| :- |

|<p>*true true type-1* is definitely a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *type-2*. </p><p>*false true type-1* is definitely not a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *type-2*. *false false* <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> could not determine the relationship, so *type-1* might or might not be a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *type-2*.</p>|





**Figure 4–9. Result possibilities for subtypep** 



<DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> is permitted to return the *values false* and <ClLinks  term={"false"}><i>false</i></ClLinks> only when at least one argument involves one of these <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>: <DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, the list form of <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"member"}><b>member</b></DictionaryLink>, <DictionaryLink  term={"not"}><b>not</b></DictionaryLink>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink>, **satisfies**, or <DictionaryLink  term={"values"}><b>values</b></DictionaryLink>. (A <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ‘involves’ such a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> if, after being *type expanded*, it contains that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a position that would call for its meaning as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> to be used.) One consequence of this is that if neither *type-1* nor *type-2* involves any of these <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>, then <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> is obliged to determine the relationship accurately. In particular, <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> returns the *values true* and <ClLinks  term={"true"}><i>true</i></ClLinks> if the arguments are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and do not involve any of these <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>. 



<DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> never returns a second value of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when both *type-1* and *type-2* involve only the names in Figure 4–2, or names of <ClLinks  term={"type"}><i>types</i></ClLinks> defined by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm> that expand into only those names. While <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> listed in Figure 4–2 and names of <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> and <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> can in some cases be implemented as <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm>, <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> regards them as primitive. 



The relationships between <ClLinks  term={"type"}><i>types</i></ClLinks> reflected by <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> are those specific to the particular implementation. For example, if an implementation supports only a single type of floating-point numbers, in that implementation (subtypep ’float ’long-float) returns the *values true* and <ClLinks  term={"true"}><i>true</i></ClLinks> (since the two <ClLinks  term={"type"}><i>types</i></ClLinks> are identical). 



For all *T1* and *T2* other than \*, (array *T1*) and (array *T2*) are two different *type spec ifiers* that always refer to the same sets of things if and only if they refer to <ClLinks  term={"array"}><i>arrays</i></ClLinks> of exactly the same specialized representation, *i.e.*, if (upgraded-array-element-type ’*T1*) and (upgraded-array-element-type ’*T2*) return two different <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> that always refer to the same sets of <ClLinks  term={"object"}><i>objects</i></ClLinks>. This is another way of saying that ‘(array *type-specifier*) and ‘(array ,(upgraded-array-element-type ’*type-specifier*)) refer to the same set of specialized <ClLinks  term={"array"}><i>array</i></ClLinks> representations. For all *T1* and *T2* other than \*, the intersection of (array *T1*) and (array *T2*) is the empty set if and only if they refer to <ClLinks  term={"array"}><i>arrays</i></ClLinks> of different, distinct specialized representations. 



Therefore, 



(subtypep ’(array T1) ’(array T2)) → true 



if and only if 



(upgraded-array-element-type ’T1) and 



(upgraded-array-element-type ’T2)  







<DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> 



return two different <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> that always refer to the same sets of <ClLinks  term={"object"}><i>objects</i></ClLinks>. 



For all type-specifiers *T1* and *T2* other than \*, 



(subtypep ’(complex T1) ’(complex T2)) → true, <ClLinks  term={"true"}><i>true</i></ClLinks> 



if: 



1\. T1 is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of T2, or 



2\. (upgraded-complex-part-type ’*T1*) and (upgraded-complex-part-type ’*T2*) return two different <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> that always refer to the same sets of <ClLinks  term={"object"}><i>objects</i></ClLinks>; in this case, (complex *T1*) and (complex *T2*) both refer to the same specialized representation. 



The <ClLinks  term={"value"}><i>values</i></ClLinks> are <ClLinks  term={"false"}><i>false</i></ClLinks> and <ClLinks  term={"true"}><i>true</i></ClLinks> otherwise. 



The form 



(subtypep ’(complex single-float) ’(complex float)) 



must return <ClLinks  term={"true"}><i>true</i></ClLinks> in all implementations, but 



(subtypep ’(array single-float) ’(array float)) 



returns <ClLinks  term={"true"}><i>true</i></ClLinks> only in implementations that do not have a specialized <ClLinks  term={"array"}><i>array</i></ClLinks> representation for <GlossaryTerm styled={true} term={"single float"}><i>single floats</i></GlossaryTerm> distinct from that for other <ClLinks  term={"float"}><i>floats</i></ClLinks>. 



**Examples:**
```lisp
(subtypep ’compiled-function ’function) → true, *true* 
(subtypep ’null ’list) → true, *true* 
(subtypep ’null ’symbol) → true, *true* 
(subtypep ’integer ’string) → false, *true* 
(subtypep ’(satisfies dummy) nil) → false, *implementation-dependent* 
(subtypep ’(integer 1 3) ’(integer 1 4)) → true, *true* 
(subtypep ’(integer (0) (0)) ’nil) → true, *true* 
(subtypep ’nil ’(integer (0) (0))) → true, *true* 
(subtypep ’(integer (0) (0)) ’(member)) → true, *true* ;or *false*, *false* 
(subtypep ’(member) ’nil) → true, *true* ;or *false*, *false* 
(subtypep ’nil ’(member)) → true, *true* ;or *false*, *false* 
Let <aet-x> and <aet-y> be two distinct *type specifiers* that do not always refer to the same sets of *objects* in a given implementation, but for which **make-array**, will return an *object* of the same *array type*. 
Thus, in each case, 
(subtypep (array-element-type (make-array 0 :element-type ’<aet-x>)) 
	  (array-element-type (make-array 0 :element-type ’<aet-y>))) 
→ true, *true*  
(subtypep (array-element-type (make-array 0 :element-type ’<aet-y>)) 
	  (array-element-type (make-array 0 :element-type ’<aet-x>))) 
→ true, *true* 
If (array <aet-x>) and (array <aet-y>) are different names for exactly the same set of *objects*, these names should always refer to the same sets of *objects*. That implies that the following set of tests are also true: 
(subtypep ’(array <aet-x>) ’(array <aet-y>)) → true, *true* 
(subtypep ’(array <aet-y>) ’(array <aet-x>)) → true, *true* 
```
**See Also:** 



Section 4.2 (Types) 



**Notes:** 



The small differences between the <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink> specification for the <DictionaryLink  term={"array"}><b>array</b></DictionaryLink> and <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> types are necessary because there is no creation function for *complexes* which allows the specification of the resultant part type independently of the actual types of the parts. Thus in the case of the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink>, the actual type of the parts is referred to, although a <ClLinks  term={"number"}><i>number</i></ClLinks> can be a member of more than one <ClLinks  term={"type"}><i>type</i></ClLinks>. For example, 17 is of <ClLinks  term={"type"}><i>type</i></ClLinks> (mod 18) as well as <ClLinks  term={"type"}><i>type</i></ClLinks> (mod 256) and <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>; and 2.3f5 is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> as well as <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. 



