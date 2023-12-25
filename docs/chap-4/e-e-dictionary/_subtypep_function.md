**subtypep** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> *type-1 type-2* &amp;optional *environment → subtype-p, valid-p* 



**Arguments and Values:** 



*type-1*—a *type specifier* . 



*type-2*—a *type specifier* . 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, denoting the *null lexical environment* and the current *global environment*. 



*subtype-p*—a *generalized boolean*. 



*valid-p*—a *generalized boolean*. 



**Description:** 



If *type-1* is a *recognizable subtype* of *type-2*, the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Otherwise, the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, indicating that either *type-1* is not a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *type-2*, or else *type-1* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *type-2* but is not a *recognizable subtype*. 



A second <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is also returned indicating the ‘certainty’ of the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. If this value is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the first value is an accurate indication of the <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> relationship. (The second <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is always <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>.)  







<ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> 



Figure 4–9 summarizes the possible combinations of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that might result. 



|**Value 1 Value 2 Meaning**|

| :- |

|<p>*true true type-1* is definitely a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *type-2*. </p><p>*false true type-1* is definitely not a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *type-2*. *false false* <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> could not determine the relationship, so *type-1* might or might not be a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *type-2*.</p>|





**Figure 4–9. Result possibilities for subtypep** 



<ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> is permitted to return the *values false* and <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> only when at least one argument involves one of these *type specifiers*: <ClLinks styled={true} term={"and"}><b>and</b></ClLinks>, <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, the list form of <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"member"}><b>member</b></ClLinks>, <ClLinks styled={true} term={"not"}><b>not</b></ClLinks>, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks>, **satisfies**, or <ClLinks styled={true} term={"values"}><b>values</b></ClLinks>. (A *type specifier* ‘involves’ such a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> if, after being *type expanded*, it contains that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a position that would call for its meaning as a *type specifier* to be used.) One consequence of this is that if neither *type-1* nor *type-2* involves any of these *type specifiers*, then <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> is obliged to determine the relationship accurately. In particular, <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> returns the *values true* and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the arguments are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> and do not involve any of these *type specifiers*. 



<ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> never returns a second value of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when both *type-1* and *type-2* involve only the names in Figure 4–2, or names of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> defined by <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, or <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, or *derived types* that expand into only those names. While *type specifiers* listed in Figure 4–2 and names of <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> and <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> can in some cases be implemented as *derived types*, <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> regards them as primitive. 



The relationships between <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> reflected by <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> are those specific to the particular implementation. For example, if an implementation supports only a single type of floating-point numbers, in that implementation (subtypep ’float ’long-float) returns the *values true* and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> (since the two <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> are identical). 



For all *T1* and *T2* other than \*, (array *T1*) and (array *T2*) are two different *type spec ifiers* that always refer to the same sets of things if and only if they refer to <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> of exactly the same specialized representation, *i.e.*, if (upgraded-array-element-type ’*T1*) and (upgraded-array-element-type ’*T2*) return two different *type specifiers* that always refer to the same sets of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. This is another way of saying that ‘(array *type-specifier*) and ‘(array ,(upgraded-array-element-type ’*type-specifier*)) refer to the same set of specialized <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> representations. For all *T1* and *T2* other than \*, the intersection of (array *T1*) and (array *T2*) is the empty set if and only if they refer to <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> of different, distinct specialized representations. 



Therefore, 



(subtypep ’(array T1) ’(array T2)) → true 



if and only if 



(upgraded-array-element-type ’T1) and 



(upgraded-array-element-type ’T2)  







<ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> 



return two different *type specifiers* that always refer to the same sets of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 



For all type-specifiers *T1* and *T2* other than \*, 



(subtypep ’(complex T1) ’(complex T2)) → true, <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> 



if: 



1\. T1 is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of T2, or 



2\. (upgraded-complex-part-type ’*T1*) and (upgraded-complex-part-type ’*T2*) return two different *type specifiers* that always refer to the same sets of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>; in this case, (complex *T1*) and (complex *T2*) both refer to the same specialized representation. 



The <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> otherwise. 



The form 



(subtypep ’(complex single-float) ’(complex float)) 



must return <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> in all implementations, but 



(subtypep ’(array single-float) ’(array float)) 



returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> only in implementations that do not have a specialized <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> representation for *single floats* distinct from that for other <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks>. 



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



The small differences between the <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks> specification for the <ClLinks styled={true} term={"array"}><b>array</b></ClLinks> and <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> types are necessary because there is no creation function for *complexes* which allows the specification of the resultant part type independently of the actual types of the parts. Thus in the case of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>, the actual type of the parts is referred to, although a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> can be a member of more than one <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. For example, 17 is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (mod 18) as well as <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (mod 256) and <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>; and 2.3f5 is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> as well as <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. 



