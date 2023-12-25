**subtypep** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> *type-1 type-2* &amp;optional *environment → subtype-p, valid-p* 



**Arguments and Values:** 



*type-1*—a *type specifier* . 



*type-2*—a *type specifier* . 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, denoting the *null lexical environment* and the current *global environment*. 



*subtype-p*—a *generalized boolean*. 



*valid-p*—a *generalized boolean*. 



**Description:** 



If *type-1* is a *recognizable subtype* of *type-2*, the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Otherwise, the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, indicating that either *type-1* is not a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *type-2*, or else *type-1* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *type-2* but is not a *recognizable subtype*. 



A second <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is also returned indicating the ‘certainty’ of the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. If this value is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then the first value is an accurate indication of the <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> relationship. (The second <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is always <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>.)  







<DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> 



Figure 4–9 summarizes the possible combinations of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that might result. 



|**Value 1 Value 2 Meaning**|

| :- |

|<p>*true true type-1* is definitely a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *type-2*. </p><p>*false true type-1* is definitely not a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *type-2*. *false false* <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> could not determine the relationship, so *type-1* might or might not be a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *type-2*.</p>|





**Figure 4–9. Result possibilities for subtypep** 



<DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> is permitted to return the *values false* and <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> only when at least one argument involves one of these *type specifiers*: <DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, the list form of <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink>, <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink>, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink>, **satisfies**, or <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink>. (A *type specifier* ‘involves’ such a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> if, after being *type expanded*, it contains that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a position that would call for its meaning as a *type specifier* to be used.) One consequence of this is that if neither *type-1* nor *type-2* involves any of these *type specifiers*, then <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> is obliged to determine the relationship accurately. In particular, <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> returns the *values true* and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the arguments are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> and do not involve any of these *type specifiers*. 



<DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> never returns a second value of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> when both *type-1* and *type-2* involve only the names in Figure 4–2, or names of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> defined by <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, or *derived types* that expand into only those names. While *type specifiers* listed in Figure 4–2 and names of <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> and <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> can in some cases be implemented as *derived types*, <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> regards them as primitive. 



The relationships between <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> reflected by <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> are those specific to the particular implementation. For example, if an implementation supports only a single type of floating-point numbers, in that implementation (subtypep ’float ’long-float) returns the *values true* and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> (since the two <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> are identical). 



For all *T1* and *T2* other than \*, (array *T1*) and (array *T2*) are two different *type spec ifiers* that always refer to the same sets of things if and only if they refer to <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> of exactly the same specialized representation, *i.e.*, if (upgraded-array-element-type ’*T1*) and (upgraded-array-element-type ’*T2*) return two different *type specifiers* that always refer to the same sets of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. This is another way of saying that ‘(array *type-specifier*) and ‘(array ,(upgraded-array-element-type ’*type-specifier*)) refer to the same set of specialized <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> representations. For all *T1* and *T2* other than \*, the intersection of (array *T1*) and (array *T2*) is the empty set if and only if they refer to <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> of different, distinct specialized representations. 



Therefore, 



(subtypep ’(array T1) ’(array T2)) *→ true* 



if and only if 



(upgraded-array-element-type ’T1) and 



(upgraded-array-element-type ’T2)  







<DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> 



return two different *type specifiers* that always refer to the same sets of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 



For all type-specifiers *T1* and *T2* other than \*, 



(subtypep ’(complex T1) ’(complex T2)) *→ true*, *true* 



if: 



1\. T1 is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of T2, or 



2\. (upgraded-complex-part-type ’*T1*) and (upgraded-complex-part-type ’*T2*) return two different *type specifiers* that always refer to the same sets of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>; in this case, (complex *T1*) and (complex *T2*) both refer to the same specialized representation. 



The <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> otherwise. 



The form 



(subtypep ’(complex single-float) ’(complex float)) 



must return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> in all implementations, but 



(subtypep ’(array single-float) ’(array float)) 



returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> only in implementations that do not have a specialized <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> representation for *single floats* distinct from that for other <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm>. 



**Examples:**
```lisp

(subtypep ’compiled-function ’function) *→ true*, *true* 
(subtypep ’null ’list) *→ true*, *true* 
(subtypep ’null ’symbol) *→ true*, *true* 
(subtypep ’integer ’string) *→ false*, *true* 
(subtypep ’(satisfies dummy) nil) *→ false*, *implementation-dependent* 
(subtypep ’(integer 1 3) ’(integer 1 4)) *→ true*, *true* 
(subtypep ’(integer (0) (0)) ’nil) *→ true*, *true* 
(subtypep ’nil ’(integer (0) (0))) *→ true*, *true* 
(subtypep ’(integer (0) (0)) ’(member)) *→ true*, *true* ;or *false*, *false* 
(subtypep ’(member) ’nil) *→ true*, *true* ;or *false*, *false* 
(subtypep ’nil ’(member)) *→ true*, *true* ;or *false*, *false* 
Let <aet-x> and <aet-y> be two distinct *type specifiers* that do not always refer to the same sets of *objects* in a given implementation, but for which **make-array**, will return an *object* of the same *array type*. 
Thus, in each case, 
(subtypep (array-element-type (make-array 0 :element-type ’<aet-x>)) 
	  (array-element-type (make-array 0 :element-type ’<aet-y>))) 
*→ true*, *true*  

(subtypep (array-element-type (make-array 0 :element-type ’<aet-y>)) 
	  (array-element-type (make-array 0 :element-type ’<aet-x>))) 
*→ true*, *true* 
If (array <aet-x>) and (array <aet-y>) are different names for exactly the same set of *objects*, these names should always refer to the same sets of *objects*. That implies that the following set of tests are also true: 
(subtypep ’(array <aet-x>) ’(array <aet-y>)) *→ true*, *true* 
(subtypep ’(array <aet-y>) ’(array <aet-x>)) *→ true*, *true* 

```
**See Also:** 



Section 4.2 (Types) 



**Notes:** 



The small differences between the <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink> specification for the <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> and <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> types are necessary because there is no creation function for *complexes* which allows the specification of the resultant part type independently of the actual types of the parts. Thus in the case of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>, the actual type of the parts is referred to, although a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> can be a member of more than one <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. For example, 17 is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (mod 18) as well as <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (mod 256) and <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>; and 2.3f5 is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> as well as <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>. 



