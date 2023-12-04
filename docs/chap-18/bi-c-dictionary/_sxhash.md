**sxhash** *Function* 



**Syntax:** 



**sxhash** *object → hash-code* 



**Arguments and Values:** 



*object*—an *object*. 



*hash-code*—a non-negative *fixnum*. 



**Description:** 



**sxhash** returns a hash code for *object*. 



The manner in which the hash code is computed is *implementation-dependent*, but subject to certain constraints: 



1\. (equal *x y*) implies (= (sxhash *x*) (sxhash *y*)). 



2\. For any two *objects*, *x* and *y*, both of which are *bit vectors*, *characters*, *conses*, *numbers*, *pathnames*, *strings*, or *symbols*, and which are *similar* , (sxhash *x*) and (sxhash *y*) *yield* the same mathematical value even if *x* and *y* exist in different *Lisp images* of the same *implementation*. See Section 3.2.4 (Literal Objects in Compiled Files). 



3\. The *hash-code* for an *object* is always the *same* within a single *session* provided that the *object* is not visibly modified with regard to the equivalence test **equal**. See Section 18.1.2 (Modifying Hash Table Keys). 



Hash 



 



 



**sxhash** 



4\. The *hash-code* is intended for hashing. This places no verifiable constraint on a *conforming implementation*, but the intent is that an *implementation* should make a good-faith effort to produce *hash-codes* that are well distributed within the range of non-negative *fixnums*. 



5\. Computation of the *hash-code* must terminate, even if the *object* contains circularities. **Examples:**
```lisp
 



(= (sxhash (list ’list "ab")) (sxhash (list ’list "ab"))) *→ true* 



(= (sxhash "a") (sxhash (make-string 1 :initial-element #\a))) *→ true* 



(let ((r (make-random-state))) 



(= (sxhash r) (sxhash (make-random-state r)))) 



*→ implementation-dependent* 




```
**Affected By:** 



The *implementation*. 



**Notes:** 



Many common hashing needs are satisfied by **make-hash-table** and the related functions on *hash tables*. **sxhash** is intended for use where the pre-defined abstractions are insufficient. Its main intent is to allow the user a convenient means of implementing more complicated hashing paradigms than are provided through *hash tables*. 



The hash codes returned by **sxhash** are not necessarily related to any hashing strategy used by any other *function* in Common Lisp. 



For *objects* of *types* that **equal** compares with **eq**, item 3 requires that the *hash-code* be based on some immutable quality of the identity of the object. Another legitimate implementation technique would be to have **sxhash** assign (and cache) a random hash code for these *objects*, since there is no requirement that *similar* but non-**eq** objects have the same hash code. 



Although *similarity* is defined for *symbols* in terms of both the *symbol*’s *name* and the *packages* in which the *symbol* is *accessible*, item 3 disallows using *package* information to compute the hash code, since changes to the package status of a symbol are not visible to *equal*. 





