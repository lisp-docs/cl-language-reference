**adjust-array** *Function* 



**Syntax:** 



**adjust-array** *array new-dimensions* &key *element-type* 



*initial-element* 



*initial-contents* 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



*→ adjusted-array* 



**Arguments and Values:** 



*array*—an *array*. 



*new-dimensions*—a *valid array dimension* or a *list* of *valid array dimensions*. 



*element-type*—a *type specifier* . 



*initial-element*—an *object*. *Initial-element* must not be supplied if either *initial-contents* or *displaced-to* is supplied. 



*initial-contents*—an *object*. If *array* has rank greater than zero, then *initial-contents* is composed of nested *sequences*, the depth of which must equal the rank of *array*. Otherwise, *array* is zero-dimensional and *initial-contents* supplies the single element. *initial-contents* must not be supplied if either *initial-element* or *displaced-to* is given. 



*fill-pointer*—a *valid fill pointer* for the *array* to be created, or **t**, or **nil**. The default is **nil**. 



*displaced-to*—an *array* or **nil**. *initial-elements* and *initial-contents* must not be supplied if *displaced-to* is supplied. 



*displaced-index-offset*—an *object* of *type* (fixnum 0 *n*) where *n* is (array-total-size *displaced-to*). *displaced-index-offset* may be supplied only if *displaced-to* is supplied. 



*adjusted-array*—an *array*. 



**Description:** 



**adjust-array** changes the dimensions or elements of *array*. The result is an *array* of the same *type* and rank as *array*, that is either the modified *array*, or a newly created *array* to which *array* can be displaced, and that has the given *new-dimensions*. 



*New-dimensions* specify the size of each *dimension* of *array*. 



*Element-type* specifies the *type* of the *elements* of the resulting *array*. If *element-type* is supplied, the consequences are unspecified if the *upgraded array element type* of *element-type* is not the same as the *actual array element type* of *array*. 







 



 



**adjust-array** 



If *initial-contents* is supplied, it is treated as for **make-array**. In this case none of the original contents of *array* appears in the resulting *array*. 



If *fill-pointer* is an *integer* , it becomes the *fill pointer* for the resulting *array*. If *fill-pointer* is the symbol **t**, it indicates that the size of the resulting *array* should be used as the *fill pointer* . If *fill-pointer* is **nil**, it indicates that the *fill pointer* should be left as it is. 



If *displaced-to non-nil*, a *displaced array* is created. The resulting *array* shares its contents with the *array* given by *displaced-to*. The resulting *array* cannot contain more elements than the *array* it is displaced to. If *displaced-to* is not supplied or **nil**, the resulting *array* is not a *displaced array*. If array *A* is created displaced to array *B* and subsequently array *B* is given to **adjust-array**, array *A* will still be displaced to array *B*. Although *array* might be a *displaced array*, the resulting *array* is not a *displaced array* unless *displaced-to* is supplied and not **nil**. The interaction between **adjust-array** and displaced *arrays* is as follows given three *arrays*, A, B, and C: 



A is not displaced before or after the call 



(adjust-array A ...) 



The dimensions of A are altered, and the contents rearranged as appropriate. Additional elements of A are taken from *initial-element*. The use of *initial-contents* causes all old contents to be discarded. 



A is not displaced before, but is displaced to C after the call 



(adjust-array A ... :displaced-to C) 



None of the original contents of A appears in A afterwards; A now contains the contents of C, without any rearrangement of C. 



A is displaced to B before the call, and is displaced to C after the call 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to C) 



B and C might be the same. The contents of B do not appear in A afterward unless such contents also happen to be in C If *displaced-index-offset* is not supplied in the **adjust-array** call, it defaults to zero; the old offset into B is not retained. 



A is displaced to B before the call, but not displaced afterward. 



(adjust-array A ... :displaced-to B) 



(adjust-array A ... :displaced-to nil) 



A gets a new “data region,” and contents of B are copied into it as appropriate to maintain the existing old contents; additional elements of A are taken from *initial-element* if supplied. However, the use of *initial-contents* causes all old contents to be discarded. 







 



 



**adjust-array** 



If *displaced-index-offset* is supplied, it specifies the offset of the resulting *array* from the beginning of the *array* that it is displaced to. If *displaced-index-offset* is not supplied, the offset is 0. The size of the resulting *array* plus the offset value cannot exceed the size of the *array* that it is displaced to. 



If only *new-dimensions* and an *initial-element* argument are supplied, those elements of *array* that are still in bounds appear in the resulting *array*. The elements of the resulting *array* that are not in the bounds of *array* are initialized to *initial-element*; if *initial-element* is not provided, the consequences of later reading any such new *element* of *new-array* before it has been initialized are undefined. 



If *initial-contents* or *displaced-to* is supplied, then none of the original contents of *array* appears in the new *array*. 



The consequences are unspecified if *array* is adjusted to a size smaller than its *fill pointer* without supplying the *fill-pointer* argument so that its *fill-pointer* is properly adjusted in the process. 



If A is displaced to B, the consequences are unspecified if B is adjusted in such a way that it no longer has enough elements to satisfy A. 



If **adjust-array** is applied to an *array* that is *actually adjustable*, the *array* returned is *identical* to *array*. If the *array* returned by **adjust-array** is *distinct* from *array*, then the argument *array* is unchanged. 



Note that if an *array A* is displaced to another *array B*, and *B* is displaced to another *array C*, and *B* is altered by **adjust-array**, *A* must now refer to the adjust contents of *B*. This means that an implementation cannot collapse the chain to make *A* refer to *C* directly and forget that the chain of reference passes through *B*. However, caching techniques are permitted as long as they preserve the semantics specified here. 



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



An error of *type* **error** is signaled if *fill-pointer* is supplied and *non-nil* but *array* has no *fill pointer* . 



**See Also:** 



