**adjust-array** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> *array new-dimensions* &amp;key *element-type* 



*initial-element* 



*initial-contents* 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



→ adjusted-array 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*new-dimensions*—a *valid array dimension* or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *valid array dimensions*. 



*element-type*—a *type specifier* . 



*initial-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. *Initial-element* must not be supplied if either *initial-contents* or *displaced-to* is supplied. 



*initial-contents*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. If <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> has rank greater than zero, then *initial-contents* is composed of nested *sequences*, the depth of which must equal the rank of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. Otherwise, <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is zero-dimensional and *initial-contents* supplies the single element. *initial-contents* must not be supplied if either *initial-element* or *displaced-to* is given. 



*fill-pointer*—a *valid fill pointer* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> to be created, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*displaced-to*—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. *initial-elements* and *initial-contents* must not be supplied if *displaced-to* is supplied. 



*displaced-index-offset*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (fixnum 0 *n*) where *n* is (array-total-size *displaced-to*). *displaced-index-offset* may be supplied only if *displaced-to* is supplied. 



*adjusted-array*—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> changes the dimensions or elements of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. The result is an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and rank as <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, that is either the modified <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, or a newly created <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> to which <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> can be displaced, and that has the given *new-dimensions*. 



*New-dimensions* specify the size of each <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks> of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*Element-type* specifies the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. If *element-type* is supplied, the consequences are unspecified if the *upgraded array element type* of *element-type* is not the same as the *actual array element type* of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> 



If *initial-contents* is supplied, it is treated as for <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>. In this case none of the original contents of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> appears in the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



If *fill-pointer* is an *integer* , it becomes the *fill pointer* for the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. If *fill-pointer* is the symbol <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, it indicates that the size of the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> should be used as the *fill pointer* . If *fill-pointer* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, it indicates that the *fill pointer* should be left as it is. 



If *displaced-to non-nil*, a *displaced array* is created. The resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> shares its contents with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> given by *displaced-to*. The resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> cannot contain more elements than the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> it is displaced to. If *displaced-to* is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not a *displaced array*. If array *A* is created displaced to array *B* and subsequently array *B* is given to <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>, array *A* will still be displaced to array *B*. Although <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> might be a *displaced array*, the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not a *displaced array* unless *displaced-to* is supplied and not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The interaction between <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> and displaced <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> is as follows given three <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks>, A, B, and C: 



A is not displaced before or after the call 



(adjust-array A ...) 



The dimensions of A are altered, and the contents rearranged as appropriate. Additional elements of A are taken from *initial-element*. The use of *initial-contents* causes all old contents to be discarded. 



A is not displaced before, but is displaced to C after the call 



(adjust-array A ... :displaced-to C) 



None of the original contents of A appears in A afterwards; A now contains the contents of C, without any rearrangement of C. 



A is displaced to B before the call, and is displaced to C after the call 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to C) 



B and C might be the same. The contents of B do not appear in A afterward unless such contents also happen to be in C If *displaced-index-offset* is not supplied in the <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> call, it defaults to zero; the old offset into B is not retained. 



A is displaced to B before the call, but not displaced afterward. 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to nil) 



A gets a new “data region,” and contents of B are copied into it as appropriate to maintain the existing old contents; additional elements of A are taken from *initial-element* if supplied. However, the use of *initial-contents* causes all old contents to be discarded. 







 



 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> 



If *displaced-index-offset* is supplied, it specifies the offset of the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> from the beginning of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that it is displaced to. If *displaced-index-offset* is not supplied, the offset is 0. The size of the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> plus the offset value cannot exceed the size of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that it is displaced to. 



If only *new-dimensions* and an *initial-element* argument are supplied, those elements of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that are still in bounds appear in the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. The elements of the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that are not in the bounds of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> are initialized to *initial-element*; if *initial-element* is not provided, the consequences of later reading any such new <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *new-array* before it has been initialized are undefined. 



If *initial-contents* or *displaced-to* is supplied, then none of the original contents of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> appears in the new <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



The consequences are unspecified if <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is adjusted to a size smaller than its *fill pointer* without supplying the *fill-pointer* argument so that its *fill-pointer* is properly adjusted in the process. 



If A is displaced to B, the consequences are unspecified if B is adjusted in such a way that it no longer has enough elements to satisfy A. 



If <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> is applied to an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is *actually adjustable*, the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> returned is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. If the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> returned by <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> is <ClLinks styled={true} term={"distinct"}><i>distinct</i></ClLinks> from <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, then the argument <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is unchanged. 



Note that if an *array A* is displaced to another *array B*, and *B* is displaced to another *array C*, and *B* is altered by <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>, *A* must now refer to the adjust contents of *B*. This means that an implementation cannot collapse the chain to make *A* refer to *C* directly and forget that the chain of reference passes through *B*. However, caching techniques are permitted as long as they preserve the semantics specified here. 



**Examples:**
```lisp
 
(adjustable-array-p 
(setq ada (adjust-array 
(make-array ’(2 3) 
:adjustable t 
:initial-contents ’((a b c) (1 2 3))) 
’(4 6)))) → T 
(array-dimensions ada) → (4 6) 
(aref ada 1 1) → 2 
(setq beta (make-array ’(2 3) :adjustable t)) 
→ #2A((NIL NIL NIL) (NIL NIL NIL)) 
(adjust-array beta ’(4 6) :displaced-to ada) 
→ #2A((A B C NIL NIL NIL) 
(1 2 3 NIL NIL NIL) 
(NIL NIL NIL NIL NIL NIL) 
(NIL NIL NIL NIL NIL NIL)) 

 
 
(array-dimensions beta) → (4 6) 
(aref beta 1 1) → 2 
Suppose that the 4-by-4 array in m looks like this: 
#2A(( alpha beta gamma delta ) 
( epsilon zeta eta theta ) 
( iota kappa lambda mu ) 
( nu xi omicron pi )) 
Then the result of 
(adjust-array m ’(3 5) :initial-element ’baz) 
is a 3-by-5 array with contents 
#2A(( alpha beta gamma delta baz ) 
( epsilon zeta eta theta baz ) 
( iota kappa lambda mu baz )) 

```
**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if *fill-pointer* is supplied and <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> but <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> has no *fill pointer* . 



**See Also:** 



**adjustable-array-p**, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></ClLinks>, <ClLinks styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></ClLinks>, **array adjustable-array-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



**adjustable-array-p** *array → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns true if and only if <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> could return a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> when given that <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> as its first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



**Examples:**
```lisp

(adjustable-array-p 
 (make-array 5 
	     :element-type ’character 

	     
	     
	     :adjustable t 
	     :fill-pointer 3)) → true 
(adjustable-array-p (make-array 4)) → implementation-dependent 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



