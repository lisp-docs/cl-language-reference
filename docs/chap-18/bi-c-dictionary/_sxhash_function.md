**sxhash** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> *object → hash-code* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*hash-code*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> returns a hash code for <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



The manner in which the hash code is computed is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but subject to certain constraints: 



1\. (equal *x y*) implies (= (sxhash *x*) (sxhash *y*)). 



2\. For any two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, *x* and *y*, both of which are *bit vectors*, *characters*, *conses*, *numbers*, *pathnames*, *strings*, or <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, and which are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> , (sxhash *x*) and (sxhash *y*) <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> the same mathematical value even if *x* and *y* exist in different *Lisp images* of the same <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. See Section 3.2.4 (Literal Objects in Compiled Files). 



3\. The *hash-code* for an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is always the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> within a single <ClLinks styled={true} term={"session"}><i>session</i></ClLinks> provided that the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not visibly modified with regard to the equivalence test <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>. See Section 18.1.2 (Modifying Hash Table Keys). 



Hash 



 



 



<ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> 



4\. The *hash-code* is intended for hashing. This places no verifiable constraint on a *conforming implementation*, but the intent is that an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> should make a good-faith effort to produce *hash-codes* that are well distributed within the range of non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnums</i></ClLinks>. 



5\. Computation of the *hash-code* must terminate, even if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> contains circularities. 

**Examples:**
```lisp

(= (sxhash (list ’list "ab")) (sxhash (list ’list "ab"))) → true 
(= (sxhash "a") (sxhash (make-string 1 :initial-element #\a))) → true 
(let ((r (make-random-state))) 
  (= (sxhash r) (sxhash (make-random-state r)))) 
→ implementation-dependent 

```
**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**Notes:** 



Many common hashing needs are satisfied by <ClLinks styled={true} term={"make-hash-table"}><b>make-hash-table</b></ClLinks> and the related functions on *hash tables*. <ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> is intended for use where the pre-defined abstractions are insufficient. Its main intent is to allow the user a convenient means of implementing more complicated hashing paradigms than are provided through *hash tables*. 



The hash codes returned by <ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> are not necessarily related to any hashing strategy used by any other <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> in Common Lisp. 



For <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> that <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> compares with <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, item 3 requires that the *hash-code* be based on some immutable quality of the identity of the object. Another legitimate implementation technique would be to have <ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks> assign (and cache) a random hash code for these <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, since there is no requirement that <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> but non-<ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> objects have the same hash code. 



Although <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> is defined for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in terms of both the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and the <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>, item 3 disallows using <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> information to compute the hash code, since changes to the package status of a symbol are not visible to *equal*. 





