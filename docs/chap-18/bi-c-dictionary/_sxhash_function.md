**sxhash** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> *object → hash-code* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*hash-code*—a non-negative <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. 



**Description:** 



<ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> returns a hash code for <ClLinks  term={"object"}><i>object</i></ClLinks>. 



The manner in which the hash code is computed is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but subject to certain constraints: 



1\. (equal *x y*) implies (= (sxhash *x*) (sxhash *y*)). 



2\. For any two <ClLinks  term={"object"}><i>objects</i></ClLinks>, *x* and *y*, both of which are <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, *conses*, <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, or <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, and which are <ClLinks  term={"similar"}><i>similar</i></ClLinks> , (sxhash *x*) and (sxhash *y*) <ClLinks  term={"yield"}><i>yield</i></ClLinks> the same mathematical value even if *x* and *y* exist in different *Lisp images* of the same <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. See Section 3.2.4 (Literal Objects in Compiled Files). 



3\. The *hash-code* for an <ClLinks  term={"object"}><i>object</i></ClLinks> is always the <ClLinks  term={"same"}><i>same</i></ClLinks> within a single <ClLinks  term={"session"}><i>session</i></ClLinks> provided that the <ClLinks  term={"object"}><i>object</i></ClLinks> is not visibly modified with regard to the equivalence test <ClLinks  term={"equal"}><b>equal</b></ClLinks>. See Section 18.1.2 (Modifying Hash Table Keys). 



Hash 



 



 



<ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> 



4\. The *hash-code* is intended for hashing. This places no verifiable constraint on a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>, but the intent is that an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> should make a good-faith effort to produce *hash-codes* that are well distributed within the range of non-negative <ClLinks  term={"fixnum"}><i>fixnums</i></ClLinks>. 



5\. Computation of the *hash-code* must terminate, even if the <ClLinks  term={"object"}><i>object</i></ClLinks> contains circularities. 

**Examples:**
```lisp
(= (sxhash (list ’list "ab")) (sxhash (list ’list "ab"))) → true 
(= (sxhash "a") (sxhash (make-string 1 :initial-element #\a))) → true 
(let ((r (make-random-state))) 
  (= (sxhash r) (sxhash (make-random-state r)))) 
→ implementation-dependent 
```
**Affected By:** 



The <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



**Notes:** 



Many common hashing needs are satisfied by <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks> and the related functions on <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. <ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> is intended for use where the pre-defined abstractions are insufficient. Its main intent is to allow the user a convenient means of implementing more complicated hashing paradigms than are provided through <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. 



The hash codes returned by <ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> are not necessarily related to any hashing strategy used by any other <ClLinks  term={"function"}><i>function</i></ClLinks> in Common Lisp. 



For <ClLinks  term={"object"}><i>objects</i></ClLinks> of <ClLinks  term={"type"}><i>types</i></ClLinks> that <ClLinks  term={"equal"}><b>equal</b></ClLinks> compares with <ClLinks  term={"eq"}><b>eq</b></ClLinks>, item 3 requires that the *hash-code* be based on some immutable quality of the identity of the object. Another legitimate implementation technique would be to have <ClLinks  term={"sxhash"}><b>sxhash</b></ClLinks> assign (and cache) a random hash code for these <ClLinks  term={"object"}><i>objects</i></ClLinks>, since there is no requirement that <ClLinks  term={"similar"}><i>similar</i></ClLinks> but non-<ClLinks  term={"eq"}><b>eq</b></ClLinks> objects have the same hash code. 



Although <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> is defined for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in terms of both the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks  term={"name"}><i>name</i></ClLinks> and the <ClLinks  term={"package"}><i>packages</i></ClLinks> in which the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks>, item 3 disallows using <ClLinks  term={"package"}><i>package</i></ClLinks> information to compute the hash code, since changes to the package status of a symbol are not visible to *equal*. 





