**merge** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"merge"}><b>merge</b></DictionaryLink> *result-type sequence-1 sequence-2 predicate* &amp;key *key → result-sequence* 



**Arguments and Values:** 



*result-type*—a <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*sequence-1*—a *sequence*. 



*sequence-2*—a *sequence*. 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*result-sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm> of *type result-type*. 







 



 



<DictionaryLink  term={"merge"}><b>merge</b></DictionaryLink> 



**Description:** 



Destructively merges *sequence-1* with *sequence-2* according to an order determined by the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. <DictionaryLink  term={"merge"}><b>merge</b></DictionaryLink> determines the relationship between two elements by giving keys extracted from the sequence elements to the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. 



The first argument to the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> function is an element of *sequence-1* as returned by the <ClLinks  term={"key"}><i>key</i></ClLinks> (if supplied); the second argument is an element of *sequence-2* as returned by the <ClLinks  term={"key"}><i>key</i></ClLinks> (if supplied). <ClLinks  term={"predicate"}><i>Predicate</i></ClLinks> should return <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if its first argument is strictly less than the second (in some appropriate sense). If the first argument is greater than or equal to the second (in the appropriate sense), then <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> should return <ClLinks  term={"false"}><i>false</i></ClLinks>. <DictionaryLink  term={"merge"}><b>merge</b></DictionaryLink> considers two elements x and y to be equal if (funcall predicate x y) and (funcall predicate y x) both *yield false*. 



The argument to the <ClLinks  term={"key"}><i>key</i></ClLinks> is the *sequence* element. Typically, the return value of the <ClLinks  term={"key"}><i>key</i></ClLinks> becomes the argument to <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. If <ClLinks  term={"key"}><i>key</i></ClLinks> is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the sequence element itself is used. The <ClLinks  term={"key"}><i>key</i></ClLinks> may be executed more than once for each *sequence element*, and its side effects may occur in any order. 



If <ClLinks  term={"key"}><i>key</i></ClLinks> and <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> return, then the merging operation will terminate. The result of merging two *sequences* x and y is a new *sequence* of type *result-type* z, such that the length of z is the sum of the lengths of x and y, and z contains all the elements of x and y. If x1 and x2 are two elements of x, and x1 precedes x2 in x, then x1 precedes x2 in z, and similarly for elements of y. In short, z is an interleaving of x and y. 



If x and y were correctly sorted according to the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>, then z will also be correctly sorted. If x or y is not so sorted, then z will not be sorted, but will nevertheless be an interleaving of x and y. 



The merging operation is guaranteed stable; if two or more elements are considered equal by the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>, then the elements from *sequence-1* will precede those from *sequence-2* in the result. 



*sequence-1* and/or *sequence-2* may be destroyed. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, the result will be a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp
(setq test1 (list 1 3 4 6 7)) 
(setq test2 (list 2 5 8)) 
(merge ’list test1 test2 #’<) → (1 2 3 4 5 6 7 8) 
(setq test1 (copy-seq "BOY")) 
(setq test2 (copy-seq :nosy")) 
(merge ’string test1 test2 #’char-lessp) → "BnOosYy" 
(setq test1 (vector ((red . 1) (blue . 4)))) 
 
 
(setq test2 (vector ((yellow . 2) (green . 7)))) 
(merge ’vector test1 test2 #’< :key #’cdr) 
→ #((RED . 1) (YELLOW . 2) (BLUE . 4) (GREEN . 7)) 
(merge ’(vector \* 4) ’(1 5) ’(2 4 6) #’<) should signal an error 
```
**Exceptional Situations:** 



An error must be signaled if the *result-type* is neither a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, nor a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and the sum of the lengths of *sequence-1* and *sequence-2* is different from that number. 



**See Also:** 



<DictionaryLink  term={"sort"}><b>sort</b></DictionaryLink>, <DictionaryLink  term={"stable-sort"}><b>stable-sort</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



