**sxhash** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> *object → hash-code* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*hash-code*—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> returns a hash code for <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



The manner in which the hash code is computed is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but subject to certain constraints: 



1\. (equal *x y*) implies (= (sxhash *x*) (sxhash *y*)). 



2\. For any two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, *x* and *y*, both of which are *bit vectors*, *characters*, *conses*, *numbers*, *pathnames*, *strings*, or <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, and which are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> , (sxhash *x*) and (sxhash *y*) <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the same mathematical value even if *x* and *y* exist in different *Lisp images* of the same <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. See Section 3.2.4 (Literal Objects in Compiled Files). 



3\. The *hash-code* for an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is always the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> within a single <GlossaryTerm styled={true} term={"session"}><i>session</i></GlossaryTerm> provided that the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not visibly modified with regard to the equivalence test <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. See Section 18.1.2 (Modifying Hash Table Keys). 



Hash 



 



 



<DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> 



4\. The *hash-code* is intended for hashing. This places no verifiable constraint on a *conforming implementation*, but the intent is that an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> should make a good-faith effort to produce *hash-codes* that are well distributed within the range of non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnums</i></GlossaryTerm>. 



5\. Computation of the *hash-code* must terminate, even if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> contains circularities. **Examples:**
```lisp

(= (sxhash (list ’list "ab")) (sxhash (list ’list "ab"))) *→ true* 
(= (sxhash "a") (sxhash (make-string 1 :initial-element #\a))) *→ true* 
(let ((r (make-random-state))) 
  (= (sxhash r) (sxhash (make-random-state r)))) 
*→ implementation-dependent* 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Notes:** 



Many common hashing needs are satisfied by <DictionaryLink styled={true} term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink> and the related functions on *hash tables*. <DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> is intended for use where the pre-defined abstractions are insufficient. Its main intent is to allow the user a convenient means of implementing more complicated hashing paradigms than are provided through *hash tables*. 



The hash codes returned by <DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> are not necessarily related to any hashing strategy used by any other <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> in Common Lisp. 



For <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> that <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> compares with <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, item 3 requires that the *hash-code* be based on some immutable quality of the identity of the object. Another legitimate implementation technique would be to have <DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink> assign (and cache) a random hash code for these <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, since there is no requirement that <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> but non-<DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> objects have the same hash code. 



Although <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> is defined for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in terms of both the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>, item 3 disallows using <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> information to compute the hash code, since changes to the package status of a symbol are not visible to *equal*. 





