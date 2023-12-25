**adjust-array** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> *array new-dimensions* &amp;key *element-type* 



*initial-element* 



*initial-contents* 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



*→ adjusted-array* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*new-dimensions*—a *valid array dimension* or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array dimensions*. 



*element-type*—a *type specifier* . 



*initial-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. *Initial-element* must not be supplied if either *initial-contents* or *displaced-to* is supplied. 



*initial-contents*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> has rank greater than zero, then *initial-contents* is composed of nested *sequences*, the depth of which must equal the rank of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. Otherwise, <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is zero-dimensional and *initial-contents* supplies the single element. *initial-contents* must not be supplied if either *initial-element* or *displaced-to* is given. 



*fill-pointer*—a *valid fill pointer* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> to be created, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*displaced-to*—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. *initial-elements* and *initial-contents* must not be supplied if *displaced-to* is supplied. 



*displaced-index-offset*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (fixnum 0 *n*) where *n* is (array-total-size *displaced-to*). *displaced-index-offset* may be supplied only if *displaced-to* is supplied. 



*adjusted-array*—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> changes the dimensions or elements of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. The result is an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and rank as <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, that is either the modified <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, or a newly created <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> to which <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> can be displaced, and that has the given *new-dimensions*. 



*New-dimensions* specify the size of each <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*Element-type* specifies the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. If *element-type* is supplied, the consequences are unspecified if the *upgraded array element type* of *element-type* is not the same as the *actual array element type* of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> 



If *initial-contents* is supplied, it is treated as for <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>. In this case none of the original contents of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> appears in the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



If *fill-pointer* is an *integer* , it becomes the *fill pointer* for the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. If *fill-pointer* is the symbol <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, it indicates that the size of the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> should be used as the *fill pointer* . If *fill-pointer* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, it indicates that the *fill pointer* should be left as it is. 



If *displaced-to non-nil*, a *displaced array* is created. The resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> shares its contents with the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> given by *displaced-to*. The resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> cannot contain more elements than the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> it is displaced to. If *displaced-to* is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not a *displaced array*. If array *A* is created displaced to array *B* and subsequently array *B* is given to <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, array *A* will still be displaced to array *B*. Although <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> might be a *displaced array*, the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not a *displaced array* unless *displaced-to* is supplied and not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The interaction between <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> and displaced <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> is as follows given three <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm>, A, B, and C: 



A is not displaced before or after the call 



(adjust-array A ...) 



The dimensions of A are altered, and the contents rearranged as appropriate. Additional elements of A are taken from *initial-element*. The use of *initial-contents* causes all old contents to be discarded. 



A is not displaced before, but is displaced to C after the call 



(adjust-array A ... :displaced-to C) 



None of the original contents of A appears in A afterwards; A now contains the contents of C, without any rearrangement of C. 



A is displaced to B before the call, and is displaced to C after the call 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to C) 



B and C might be the same. The contents of B do not appear in A afterward unless such contents also happen to be in C If *displaced-index-offset* is not supplied in the <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> call, it defaults to zero; the old offset into B is not retained. 



A is displaced to B before the call, but not displaced afterward. 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to nil) 



A gets a new “data region,” and contents of B are copied into it as appropriate to maintain the existing old contents; additional elements of A are taken from *initial-element* if supplied. However, the use of *initial-contents* causes all old contents to be discarded. 







 



 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> 



If *displaced-index-offset* is supplied, it specifies the offset of the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> from the beginning of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that it is displaced to. If *displaced-index-offset* is not supplied, the offset is 0. The size of the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> plus the offset value cannot exceed the size of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that it is displaced to. 



If only *new-dimensions* and an *initial-element* argument are supplied, those elements of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that are still in bounds appear in the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. The elements of the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that are not in the bounds of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> are initialized to *initial-element*; if *initial-element* is not provided, the consequences of later reading any such new <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *new-array* before it has been initialized are undefined. 



If *initial-contents* or *displaced-to* is supplied, then none of the original contents of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> appears in the new <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



The consequences are unspecified if <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is adjusted to a size smaller than its *fill pointer* without supplying the *fill-pointer* argument so that its *fill-pointer* is properly adjusted in the process. 



If A is displaced to B, the consequences are unspecified if B is adjusted in such a way that it no longer has enough elements to satisfy A. 



If <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> is applied to an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is *actually adjustable*, the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> returned is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> is <GlossaryTerm styled={true} term={"distinct"}><i>distinct</i></GlossaryTerm> from <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, then the argument <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is unchanged. 



Note that if an *array A* is displaced to another *array B*, and *B* is displaced to another *array C*, and *B* is altered by <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, *A* must now refer to the adjust contents of *B*. This means that an implementation cannot collapse the chain to make *A* refer to *C* directly and forget that the chain of reference passes through *B*. However, caching techniques are permitted as long as they preserve the semantics specified here. 



**Examples:**
```lisp
 
(adjustable-array-p 
(setq ada (adjust-array 
(make-array ’(2 3) 
:adjustable t 
:initial-contents ’((a b c) (1 2 3))) 
’(4 6)))) *→* T 
(array-dimensions ada) *→* (4 6) 
(aref ada 1 1) *→* 2 
(setq beta (make-array ’(2 3) :adjustable t)) 
*→* #2A((NIL NIL NIL) (NIL NIL NIL)) 
(adjust-array beta ’(4 6) :displaced-to ada) 
*→* #2A((A B C NIL NIL NIL) 
(1 2 3 NIL NIL NIL) 
(NIL NIL NIL NIL NIL NIL) 
(NIL NIL NIL NIL NIL NIL)) 

 
 
(array-dimensions beta) *→* (4 6) 
(aref beta 1 1) *→* 2 
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



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled if *fill-pointer* is supplied and <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> but <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> has no *fill pointer* . 



**See Also:** 



**adjustable-array-p**, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink>, **array adjustable-array-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**adjustable-array-p** *array → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns true if and only if <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> could return a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> which is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> when given that <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> as its first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



**Examples:**
```lisp

(adjustable-array-p 
 (make-array 5 
	     :element-type ’character 

	     
	     
	     :adjustable t 
	     :fill-pointer 3)) *→ true* 
(adjustable-array-p (make-array 4)) *→ implementation-dependent* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



