**merge** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"merge"}><b>merge</b></DictionaryLink> *result-type sequence-1 sequence-2 predicate* &amp;key *key → result-sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> *type specifier* . 



*sequence-1*—a *sequence*. 



*sequence-2*—a *sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-sequence*—a *proper sequence* of *type result-type*. 







 



 



<DictionaryLink styled={true} term={"merge"}><b>merge</b></DictionaryLink> 



**Description:** 



Destructively merges *sequence-1* with *sequence-2* according to an order determined by the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. <DictionaryLink styled={true} term={"merge"}><b>merge</b></DictionaryLink> determines the relationship between two elements by giving keys extracted from the sequence elements to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. 



The first argument to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> function is an element of *sequence-1* as returned by the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> (if supplied); the second argument is an element of *sequence-2* as returned by the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> (if supplied). <GlossaryTerm styled={true} term={"predicate"}><i>Predicate</i></GlossaryTerm> should return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if its first argument is strictly less than the second (in some appropriate sense). If the first argument is greater than or equal to the second (in the appropriate sense), then <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> should return <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"merge"}><b>merge</b></DictionaryLink> considers two elements x and y to be equal if (funcall predicate x y) and (funcall predicate y x) both *yield false*. 



The argument to the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> is the *sequence* element. Typically, the return value of the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> becomes the argument to <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the sequence element itself is used. The <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> may be executed more than once for each *sequence element*, and its side effects may occur in any order. 



If <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> return, then the merging operation will terminate. The result of merging two *sequences* x and y is a new *sequence* of type *result-type* z, such that the length of z is the sum of the lengths of x and y, and z contains all the elements of x and y. If x1 and x2 are two elements of x, and x1 precedes x2 in x, then x1 precedes x2 in z, and similarly for elements of y. In short, z is an interleaving of x and y. 



If x and y were correctly sorted according to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>, then z will also be correctly sorted. If x or y is not so sorted, then z will not be sorted, but will nevertheless be an interleaving of x and y. 



The merging operation is guaranteed stable; if two or more elements are considered equal by the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>, then the elements from *sequence-1* will precede those from *sequence-2* in the result. 



*sequence-1* and/or *sequence-2* may be destroyed. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, the result will be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp

(setq test1 (list 1 3 4 6 7)) 
(setq test2 (list 2 5 8)) 
(merge ’list test1 test2 #’<) *→* (1 2 3 4 5 6 7 8) 
(setq test1 (copy-seq "BOY")) 
(setq test2 (copy-seq :nosy")) 
(merge ’string test1 test2 #’char-lessp) *→* "BnOosYy" 
(setq test1 (vector ((red . 1) (blue . 4)))) 

 
 
(setq test2 (vector ((yellow . 2) (green . 7)))) 
(merge ’vector test1 test2 #’< :key #’cdr) 
*→* #((RED . 1) (YELLOW . 2) (BLUE . 4) (GREEN . 7)) 
(merge ’(vector \* 4) ’(1 5) ’(2 4 6) #’<) should signal an error 

```
**Exceptional Situations:** 



An error must be signaled if the *result-type* is neither a *recognizable subtype* of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, nor a *recognizable subtype* of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and the sum of the lengths of *sequence-1* and *sequence-2* is different from that number. 



**See Also:** 



<DictionaryLink styled={true} term={"sort"}><b>sort</b></DictionaryLink>, <DictionaryLink styled={true} term={"stable-sort"}><b>stable-sort</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



