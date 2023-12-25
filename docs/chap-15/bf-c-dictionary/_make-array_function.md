**make-array** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> &amp;key *element-type* 



*initial-element* 



*initial-contents* 



<ClLinks styled={true} term={"adjustable"}><i>adjustable</i></ClLinks> 



*fill-pointer* 



*displaced-to* 



*displaced-index-offset* 



→ new-array 



**Arguments and Values:** 



<ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *valid array dimensions*. 



*element-type*—a *type specifier* . The default is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



*initial-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*initial-contents*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"adjustable"}><i>adjustable</i></ClLinks>—a *generalized boolean*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*fill-pointer*—a *valid fill pointer* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> to be created, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*displaced-to*—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. This option must not be supplied if either *initial-element* or *initial-contents* is supplied. 



*displaced-index-offset*—a *valid array row-major index* for *displaced-to*. The default is 0. This option must not be supplied unless a *non-nil displaced-to* is supplied. 



*new-array*—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



**Description:** 



Creates and returns an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> constructed of the most *specialized type* that can accommodate elements of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given by *element-type*. If <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> then a zero-dimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is created. 



<ClLinks styled={true} term={"dimension"}><i>Dimensions</i></ClLinks> represents the dimensionality of the new <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*element-type* indicates the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the elements intended to be stored in the *new-array*. The *new-array* can actually store any <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which results from *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If *initial-element* is supplied, it is used to initialize each <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *new-array*. If *initial-element* is supplied, it must be of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given by *element-type*. *initial-element* cannot be supplied if either the :initial-contents option is supplied or *displaced-to* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>. If *initial-element* is not supplied, the consequences of later reading an uninitialized <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *new-array* are undefined unless either *initial-contents* is supplied or *displaced-to* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>. 



*initial-contents* is used to initialize the contents of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. For example: 



(make-array ’(4 2 3) :initial-contents 



’(((a b c) (1 2 3)) 



((d e f) (3 1 2)) 



((g h i) (2 3 1)) 



((j k l) (0 0 0)))) 



*initial-contents* is composed of a nested structure of *sequences*. The numbers of levels in the structure must equal the rank of <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. Each leaf of the nested structure must be of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given by *element-type*. If <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is zero-dimensional, then *initial-contents* specifies the single <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. Otherwise, *initial-contents* must be a *sequence* whose length is equal to the first dimension; each element must be a nested structure for an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> whose dimensions are the remaining dimensions, and so on. *Initial-contents* cannot be supplied if either *initial-element* is supplied or *displaced-to* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>. If *initial-contents* is not supplied, the consequences of later reading an uninitialized <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of *new-array* are undefined unless either *initial-element* is supplied or *displaced-to* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>. 



If <ClLinks styled={true} term={"adjustable"}><i>adjustable</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, the array is *expressly adjustable* (and so *actually adjustable*); otherwise, the array is not *expressly adjustable* (and it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the array is *actually adjustable*). 



If *fill-pointer* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> must be one-dimensional; that is, the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> must be a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . If *fill-pointer* is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, the length of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is used to initialize the *fill pointer* . If *fill-pointer* is an *integer* , it becomes the initial *fill pointer* for the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . 



If *displaced-to* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> will create a *displaced array* and *displaced-to* is the <ClLinks styled={true} term={"target"}><i>target</i></ClLinks> of that *displaced array*. In that case, the consequences are undefined if the *actual array element type* of *displaced-to* is not *type equivalent* to the *actual array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> being created. If *displaced-to* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not a *displaced array*. 



The *displaced-index-offset* is made to be the index offset of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. When an array A is given as the :displaced-to <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> when creating array B, then array B is said to be 







 



 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



displaced to array A. The total number of elements in an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, called the total size of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, is calculated as the product of all the dimensions. It is required that the total size of A be no smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> as if they were one-dimensional by taking the elements in row-major order, and then maps an <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> to element k of array B to an <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> to element k+n of array A. 



If <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> is called with <ClLinks styled={true} term={"adjustable"}><i>adjustable</i></ClLinks>, *fill-pointer*, and *displaced-to* each <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, then the result is a *simple array*. If <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> is called with one or more of <ClLinks styled={true} term={"adjustable"}><i>adjustable</i></ClLinks>, *fill-pointer*, or *displaced-to* being <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, whether the resulting <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a *simple array* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



When an array A is given as the :displaced-to <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> when creating array B, then array B is said to be displaced to array A. The total number of elements in an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, called the total size of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, is calculated as the product of all the dimensions. The consequences are unspecified if the total size of A is smaller than the sum of the total size of B plus the offset n supplied by the *displaced-index-offset*. The effect of displacing is that array B does not have any 



elements of its own, but instead maps *accesses* to itself into *accesses* to array A. The mapping treats both <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> as if they were one-dimensional by taking the elements in row-major order, and then maps an <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> to element k of array B to an <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> to <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> k+n of array A. 



**Examples:**
```lisp
(make-array 5) ;; Creates a one-dimensional array of five elements. 
(make-array ’(3 4) :element-type ’(mod 16)) ;; Creates a 
;;two-dimensional array, 3 by 4, with four-bit elements. 
(make-array 5 :element-type ’single-float) ;; Creates an array of single-floats. 
(make-array nil :initial-element nil) → #0ANIL 
(make-array 4 :initial-element nil) → #(NIL NIL NIL NIL) 
(make-array ’(2 4) 
	     :element-type ’(unsigned-byte 2) 
	     :initial-contents ’((0 1 2 3) (3 2 1 0))) 
→ #2A((0 1 2 3) (3 2 1 0)) 
(make-array 6 
	    :element-type ’character 
	    :initial-element #\a 
	    :fill-pointer 3) → "aaa" 
The following is an example of making a *displaced array*. 
(setq a (make-array ’(4 3))) 
→ #<ARRAY 4x3 simple 32546632> 
(dotimes (i 4) 
  (dotimes (j 3) 
    (setf (aref a i j) (list i ’x j ’= (\* i j))))) 
→ NIL 

(setq b (make-array 8 :displaced-to a 
		    :displaced-index-offset 2)) 
→ #<ARRAY 8 indirect 32550757> 
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
→ NIL 
The last example depends on the fact that *arrays* are, in effect, stored in row-major order. 
(setq a1 (make-array 50)) 
→ #<ARRAY 50 simple 32562043> 
(setq b1 (make-array 20 :displaced-to a1 :displaced-index-offset 10)) 
→ #<ARRAY 20 indirect 32563346> 
(length b1) → 20 
(setq a2 (make-array 50 :fill-pointer 10)) 
→ #<ARRAY 50 fill-pointer 10 46100216> 
(setq b2 (make-array 20 :displaced-to a2 :displaced-index-offset 10)) 
→ #<ARRAY 20 indirect 46104010> 
(length a2) → 10 
(length b2) → 20 
(setq a3 (make-array 50 :fill-pointer 10)) 
→ #<ARRAY 50 fill-pointer 10 46105663> 
(setq b3 (make-array 20 :displaced-to a3 :displaced-index-offset 10 
		     :fill-pointer 5)) 
→ #<ARRAY 20 indirect, fill-pointer 5 46107432> 
(length a3) → 10 
(length b3) → 5 
```
**See Also:** 



**adjustable-array-p**, <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"arrayp"}><b>arrayp</b></ClLinks>, <ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks>, <ClLinks styled={true} term={"array-rank-limit"}><b>array-rank-limit</b></ClLinks>, <ClLinks styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></ClLinks>, <ClLinks styled={true} term={"fill-pointer"}><b>fill-pointer</b></ClLinks>, <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> 



**Notes:** 



There is no specified way to create an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> for which **adjustable-array-p** definitely returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. There is no specified way to create an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is not a *simple array*. 







 



 



<ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> 



