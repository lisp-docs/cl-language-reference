**adjust-array** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> *array new-dimensions* &amp;key *element-type* 



*initial-element* 



*initial-contents* 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



→ adjusted-array 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*new-dimensions*—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm> or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimensions</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*initial-element*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. *Initial-element* must not be supplied if either *initial-contents* or *displaced-to* is supplied. 



*initial-contents*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. If <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> has rank greater than zero, then *initial-contents* is composed of nested *sequences*, the depth of which must equal the rank of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. Otherwise, <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is zero-dimensional and *initial-contents* supplies the single element. *initial-contents* must not be supplied if either *initial-element* or *displaced-to* is given. 



*fill-pointer*—a <GlossaryTerm styled={true} term={"valid fill pointer"}><i>valid fill pointer</i></GlossaryTerm> for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> to be created, or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*displaced-to*—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. *initial-elements* and *initial-contents* must not be supplied if *displaced-to* is supplied. 



*displaced-index-offset*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (fixnum 0 *n*) where *n* is (array-total-size *displaced-to*). *displaced-index-offset* may be supplied only if *displaced-to* is supplied. 



*adjusted-array*—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> changes the dimensions or elements of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. The result is an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and rank as <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, that is either the modified <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, or a newly created <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> to which <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> can be displaced, and that has the given *new-dimensions*. 



*New-dimensions* specify the size of each <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*Element-type* specifies the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. If *element-type* is supplied, the consequences are unspecified if the <GlossaryTerm styled={true} term={"upgraded array element type"}><i>upgraded array element type</i></GlossaryTerm> of *element-type* is not the same as the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> 



If *initial-contents* is supplied, it is treated as for <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>. In this case none of the original contents of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> appears in the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



If *fill-pointer* is an *integer* , it becomes the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> for the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. If *fill-pointer* is the symbol <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, it indicates that the size of the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> should be used as the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . If *fill-pointer* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, it indicates that the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> should be left as it is. 



If *displaced-to non-nil*, a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> is created. The resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> shares its contents with the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> given by *displaced-to*. The resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> cannot contain more elements than the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> it is displaced to. If *displaced-to* is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>. If array *A* is created displaced to array *B* and subsequently array *B* is given to <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, array *A* will still be displaced to array *B*. Although <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> might be a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>, the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> unless *displaced-to* is supplied and not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The interaction between <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> and displaced <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> is as follows given three <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm>, A, B, and C: 



A is not displaced before or after the call 



(adjust-array A ...) 



The dimensions of A are altered, and the contents rearranged as appropriate. Additional elements of A are taken from *initial-element*. The use of *initial-contents* causes all old contents to be discarded. 



A is not displaced before, but is displaced to C after the call 



(adjust-array A ... :displaced-to C) 



None of the original contents of A appears in A afterwards; A now contains the contents of C, without any rearrangement of C. 



A is displaced to B before the call, and is displaced to C after the call 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to C) 



B and C might be the same. The contents of B do not appear in A afterward unless such contents also happen to be in C If *displaced-index-offset* is not supplied in the <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> call, it defaults to zero; the old offset into B is not retained. 



A is displaced to B before the call, but not displaced afterward. 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to nil) 



A gets a new “data region,” and contents of B are copied into it as appropriate to maintain the existing old contents; additional elements of A are taken from *initial-element* if supplied. However, the use of *initial-contents* causes all old contents to be discarded. 







 



 



<DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> 



If *displaced-index-offset* is supplied, it specifies the offset of the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> from the beginning of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that it is displaced to. If *displaced-index-offset* is not supplied, the offset is 0. The size of the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> plus the offset value cannot exceed the size of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that it is displaced to. 



If only *new-dimensions* and an *initial-element* argument are supplied, those elements of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that are still in bounds appear in the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. The elements of the resulting <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that are not in the bounds of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> are initialized to *initial-element*; if *initial-element* is not provided, the consequences of later reading any such new <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of *new-array* before it has been initialized are undefined. 



If *initial-contents* or *displaced-to* is supplied, then none of the original contents of <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> appears in the new <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



The consequences are unspecified if <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is adjusted to a size smaller than its <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> without supplying the *fill-pointer* argument so that its *fill-pointer* is properly adjusted in the process. 



If A is displaced to B, the consequences are unspecified if B is adjusted in such a way that it no longer has enough elements to satisfy A. 



If <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> is applied to an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> returned is <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. If the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> returned by <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> is <GlossaryTerm  term={"distinct"}><i>distinct</i></GlossaryTerm> from <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, then the argument <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is unchanged. 



Note that if an *array A* is displaced to another *array B*, and *B* is displaced to another *array C*, and *B* is altered by <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, *A* must now refer to the adjust contents of *B*. This means that an implementation cannot collapse the chain to make *A* refer to *C* directly and forget that the chain of reference passes through *B*. However, caching techniques are permitted as long as they preserve the semantics specified here. 



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



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if *fill-pointer* is supplied and <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> but <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



**See Also:** 



**adjustable-array-p**, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>, <DictionaryLink  term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink>, **array adjustable-array-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**adjustable-array-p** *array → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>—an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns true if and only if <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink> could return a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> when given that <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> as its first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> 



