**make-array** *Function* 



**Syntax:** 



**make-array** *dimensions* &amp;key *element-type* 



*initial-element* 



*initial-contents* 



*adjustable* 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



*→ new-array* 



**Arguments and Values:** 



*dimensions*—a *designator* for a *list* of *valid array dimensions*. 



*element-type*—a *type specifier* . The default is **t**. 



*initial-element*—an *object*. 



*initial-contents*—an *object*. 



*adjustable*—a *generalized boolean*. The default is **nil**. 



*fill-pointer*—a *valid fill pointer* for the *array* to be created, or **t** or **nil**. The default is **nil**. 



*displaced-to*—an *array* or **nil**. The default is **nil**. This option must not be supplied if either *initial-element* or *initial-contents* is supplied. 



*displaced-index-offset*—a *valid array row-major index* for *displaced-to*. The default is 0. This option must not be supplied unless a *non-nil displaced-to* is supplied. 



*new-array*—an *array*. 







 



 



**make-array** 



**Description:** 



Creates and returns an *array* constructed of the most *specialized type* that can accommodate elements of *type* given by *element-type*. If *dimensions* is **nil** then a zero-dimensional *array* is created. 



*Dimensions* represents the dimensionality of the new *array*. 



*element-type* indicates the *type* of the elements intended to be stored in the *new-array*. The *new-array* can actually store any *objects* of the *type* which results from *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If *initial-element* is supplied, it is used to initialize each *element* of *new-array*. If *initial-element* is supplied, it must be of the *type* given by *element-type*. *initial-element* cannot be supplied if either the :initial-contents option is supplied or *displaced-to* is *non-nil*. If *initial-element* is not supplied, the consequences of later reading an uninitialized *element* of *new-array* are undefined unless either *initial-contents* is supplied or *displaced-to* is *non-nil*. 



*initial-contents* is used to initialize the contents of *array*. For example: 



(make-array ’(4 2 3) :initial-contents 



’(((a b c) (1 2 3)) 



((d e f) (3 1 2)) 



((g h i) (2 3 1)) 



((j k l) (0 0 0)))) 



*initial-contents* is composed of a nested structure of *sequences*. The numbers of levels in the structure must equal the rank of *array*. Each leaf of the nested structure must be of the *type* given by *element-type*. If *array* is zero-dimensional, then *initial-contents* specifies the single *element*. Otherwise, *initial-contents* must be a *sequence* whose length is equal to the first dimension; each element must be a nested structure for an *array* whose dimensions are the remaining dimensions, and so on. *Initial-contents* cannot be supplied if either *initial-element* is supplied or *displaced-to* is *non-nil*. If *initial-contents* is not supplied, the consequences of later reading an uninitialized *element* of *new-array* are undefined unless either *initial-element* is supplied or *displaced-to* is *non-nil*. 



If *adjustable* is *non-nil*, the array is *expressly adjustable* (and so *actually adjustable*); otherwise, the array is not *expressly adjustable* (and it is *implementation-dependent* whether the array is *actually adjustable*). 



If *fill-pointer* is *non-nil*, the *array* must be one-dimensional; that is, the *array* must be a *vector* . If *fill-pointer* is **t**, the length of the *vector* is used to initialize the *fill pointer* . If *fill-pointer* is an *integer* , it becomes the initial *fill pointer* for the *vector* . 



If *displaced-to* is *non-nil*, **make-array** will create a *displaced array* and *displaced-to* is the *target* of that *displaced array*. In that case, the consequences are undefined if the *actual array element type* of *displaced-to* is not *type equivalent* to the *actual array element type* of the *array* being created. If *displaced-to* is **nil**, the *array* is not a *displaced array*. 



The *displaced-index-offset* is made to be the index offset of the *array*. When an array A is given as the :displaced-to *argument* to **make-array** when creating array B, then array B is said to be 







 



 



**make-array** 



displaced to array A. The total number of elements in an *array*, called the total size of the *array*, is calculated as the product of all the dimensions. It is required that the total size of A be no smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both *arrays* as if they were one-dimensional by taking the elements in row-major order, and then maps an *access* to element k of array B to an *access* to element k+n of array A. 



If **make-array** is called with *adjustable*, *fill-pointer*, and *displaced-to* each **nil**, then the result is a *simple array*. If **make-array** is called with one or more of *adjustable*, *fill-pointer*, or *displaced-to* being *true*, whether the resulting *array* is a *simple array* is *implementation-dependent*. 



When an array A is given as the :displaced-to *argument* to **make-array** when creating array B, then array B is said to be displaced to array A. The total number of elements in an *array*, called the total size of the *array*, is calculated as the product of all the dimensions. The consequences are unspecified if the total size of A is smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any 



elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both *arrays* as if they were one-dimensional by taking the elements in row-major order, and then maps an *access* to element k of array B to an *access* to *element* k+n of array A. 



**Examples:**
```lisp
 

(make-array 5) ;; Creates a one-dimensional array of five elements. 

(make-array ’(3 4) :element-type ’(mod 16)) ;; Creates a 

;;two-dimensional array, 3 by 4, with four-bit elements. 

(make-array 5 :element-type ’single-float) ;; Creates an array of single-floats. 

(make-array nil :initial-element nil) *→* #0ANIL 

(make-array 4 :initial-element nil) *→* #(NIL NIL NIL NIL) 

(make-array ’(2 4) 

:element-type ’(unsigned-byte 2) 

:initial-contents ’((0 1 2 3) (3 2 1 0))) 

*→* #2A((0 1 2 3) (3 2 1 0)) 

(make-array 6 

:element-type ’character 

:initial-element #\a 

:fill-pointer 3) *→* "aaa" 

The following is an example of making a *displaced array*. 

(setq a (make-array ’(4 3))) 

*→* #<ARRAY 4x3 simple 32546632> 

(dotimes (i 4) 

(dotimes (j 3) 

(setf (aref a i j) (list i ’x j ’= (\* i j))))) 

*→* NIL 



 

 

(setq b (make-array 8 :displaced-to a 

:displaced-index-offset 2)) 

*→* #<ARRAY 8 indirect 32550757> 

(dotimes (i 8) 

(print (list i (aref b i)))) 

▷ (0 (0 X 2 = 0)) 

▷ (1 (1 X 0 = 0)) 

▷ (2 (1 X 1 = 1)) 

▷ (3 (1 X 2 = 2)) 

▷ (4 (2 X 0 = 0)) 

▷ (5 (2 X 1 = 2)) 

▷ (6 (2 X 2 = 4)) 

▷ (7 (3 X 0 = 0)) 

*→* NIL 

The last example depends on the fact that *arrays* are, in effect, stored in row-major order. 

(setq a1 (make-array 50)) 

*→* #<ARRAY 50 simple 32562043> 

(setq b1 (make-array 20 :displaced-to a1 :displaced-index-offset 10)) 

*→* #<ARRAY 20 indirect 32563346> 

(length b1) *→* 20 

(setq a2 (make-array 50 :fill-pointer 10)) 

*→* #<ARRAY 50 fill-pointer 10 46100216> 

(setq b2 (make-array 20 :displaced-to a2 :displaced-index-offset 10)) 

*→* #<ARRAY 20 indirect 46104010> 

(length a2) *→* 10 

(length b2) *→* 20 

(setq a3 (make-array 50 :fill-pointer 10)) 

*→* #<ARRAY 50 fill-pointer 10 46105663> 

(setq b3 (make-array 20 :displaced-to a3 :displaced-index-offset 10 

:fill-pointer 5)) 

*→* #<ARRAY 20 indirect, fill-pointer 5 46107432> 

(length a3) *→* 10 

(length b3) *→* 5 


```
**See Also:** 



**adjustable-array-p**, **aref**, **arrayp**, **array-element-type**, **array-rank-limit**, **array-dimension-limit**, **fill-pointer**, **upgraded-array-element-type** 



**Notes:** 



There is no specified way to create an *array* for which **adjustable-array-p** definitely returns *false*. There is no specified way to create an *array* that is not a *simple array*. 







 



 



**adjust-array** 



