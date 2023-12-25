**make-array** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> &amp;key *element-type* 



*initial-element* 



*initial-contents* 



<GlossaryTerm styled={true} term={"adjustable"}><i>adjustable</i></GlossaryTerm> 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



*→ new-array* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array dimensions*. 



*element-type*—a *type specifier* . The default is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



*initial-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*initial-contents*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"adjustable"}><i>adjustable</i></GlossaryTerm>—a *generalized boolean*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*fill-pointer*—a *valid fill pointer* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> to be created, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*displaced-to*—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. This option must not be supplied if either *initial-element* or *initial-contents* is supplied. 



*displaced-index-offset*—a *valid array row-major index* for *displaced-to*. The default is 0. This option must not be supplied unless a *non-nil displaced-to* is supplied. 



*new-array*—an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



**Description:** 



Creates and returns an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> constructed of the most *specialized type* that can accommodate elements of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given by *element-type*. If <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> then a zero-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is created. 



<GlossaryTerm styled={true} term={"dimension"}><i>Dimensions</i></GlossaryTerm> represents the dimensionality of the new <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



*element-type* indicates the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the elements intended to be stored in the *new-array*. The *new-array* can actually store any <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which results from *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If *initial-element* is supplied, it is used to initialize each <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *new-array*. If *initial-element* is supplied, it must be of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given by *element-type*. *initial-element* cannot be supplied if either the :initial-contents option is supplied or *displaced-to* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>. If *initial-element* is not supplied, the consequences of later reading an uninitialized <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *new-array* are undefined unless either *initial-contents* is supplied or *displaced-to* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>. 



*initial-contents* is used to initialize the contents of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. For example: 



(make-array ’(4 2 3) :initial-contents 



’(((a b c) (1 2 3)) 



((d e f) (3 1 2)) 



((g h i) (2 3 1)) 



((j k l) (0 0 0)))) 



*initial-contents* is composed of a nested structure of *sequences*. The numbers of levels in the structure must equal the rank of <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. Each leaf of the nested structure must be of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given by *element-type*. If <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is zero-dimensional, then *initial-contents* specifies the single <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. Otherwise, *initial-contents* must be a *sequence* whose length is equal to the first dimension; each element must be a nested structure for an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> whose dimensions are the remaining dimensions, and so on. *Initial-contents* cannot be supplied if either *initial-element* is supplied or *displaced-to* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>. If *initial-contents* is not supplied, the consequences of later reading an uninitialized <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of *new-array* are undefined unless either *initial-element* is supplied or *displaced-to* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"adjustable"}><i>adjustable</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, the array is *expressly adjustable* (and so *actually adjustable*); otherwise, the array is not *expressly adjustable* (and it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the array is *actually adjustable*). 



If *fill-pointer* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> must be one-dimensional; that is, the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> must be a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . If *fill-pointer* is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, the length of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is used to initialize the *fill pointer* . If *fill-pointer* is an *integer* , it becomes the initial *fill pointer* for the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



If *displaced-to* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> will create a *displaced array* and *displaced-to* is the <GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm> of that *displaced array*. In that case, the consequences are undefined if the *actual array element type* of *displaced-to* is not *type equivalent* to the *actual array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> being created. If *displaced-to* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is not a *displaced array*. 



The *displaced-index-offset* is made to be the index offset of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. When an array A is given as the :displaced-to <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> when creating array B, then array B is said to be 







 



 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



displaced to array A. The total number of elements in an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, called the total size of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, is calculated as the product of all the dimensions. It is required that the total size of A be no smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> as if they were one-dimensional by taking the elements in row-major order, and then maps an <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> to element k of array B to an <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> to element k+n of array A. 



If <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> is called with <GlossaryTerm styled={true} term={"adjustable"}><i>adjustable</i></GlossaryTerm>, *fill-pointer*, and *displaced-to* each <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, then the result is a *simple array*. If <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> is called with one or more of <GlossaryTerm styled={true} term={"adjustable"}><i>adjustable</i></GlossaryTerm>, *fill-pointer*, or *displaced-to* being <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, whether the resulting <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a *simple array* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



When an array A is given as the :displaced-to <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> when creating array B, then array B is said to be displaced to array A. The total number of elements in an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, called the total size of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, is calculated as the product of all the dimensions. The consequences are unspecified if the total size of A is smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any 



elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> as if they were one-dimensional by taking the elements in row-major order, and then maps an <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> to element k of array B to an <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> k+n of array A. 



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



**adjustable-array-p**, <DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"arrayp"}><b>arrayp</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-rank-limit"}><b>array-rank-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"fill-pointer"}><b>fill-pointer</b></DictionaryLink>, <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> 



**Notes:** 



There is no specified way to create an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> for which **adjustable-array-p** definitely returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. There is no specified way to create an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is not a *simple array*. 







 



 



<DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> 



