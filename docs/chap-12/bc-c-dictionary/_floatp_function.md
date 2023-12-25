**floatp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"floatp"}><b>floatp</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> 



generalized-boolean 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(floatp 1.2d2) *! true* 
(floatp 1.212) *! true* 
(floatp 1.2s2) *! true* 
(floatp (expt 2 130)) *! false* 
```
**Notes:** 



(floatp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *⌘* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’float) 







 



 



<b>most-positive-short-float, least-positive-short-float,</b> <i>...</i> <b><sup>most-positive-short-float, least-positive-short float, least-positive-normalized-short-float, most</sup> positive-double-float, least-positive-double-float, <sup>least-positive-normalized-double-float, most positive-long-float, least-positive-long-float, least positive-normalized-long-float, most-positive single-float, least-positive-single-float, least positive-normalized-single-float, most-negative short-float, least-negative-short-float, least negative-normalized-short-float, most-negative single-float, least-negative-single-float, least negative-normalized-single-float, most-negative double-float, least-negative-double-float, least negative-normalized-double-float, most-negative long-float, least-negative-long-float, least-negative</sup> normalized-long-float</b> <i>Constant Variable</i> 



**Constant Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



These *constant variables* provide a way for programs to examine the <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> limits for the various float formats. 



Of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>, each which has “-normalized” in its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is a *normalized float*, and each which does not have “-normalized” in its name may have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is either a *normalized float* or a *denormalized float*, as appropriate. 



Of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>, each which has “short-float” in its name must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is a *short float*, each which has “single-float” in its name must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is a *single float*, each which has “double-float” in its name must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is a *double float*, and each which has “long-float” in its name must have a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is a *long float*. 



*•* **most-positive-short-float**, **most-positive-single-float**, 



**most-positive-double-float**, **most-positive-long-float** 



Each of these *constant variables* has as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> the positive <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the largest magnitude 



 



 



(closest in value to, but not equal to, positive infinity) for the float format implied by its name. 



*•* **least-positive-short-float**, **least-positive-normalized-short-float**, 



**least-positive-single-float**, **least-positive-normalized-single-float**, 



**least-positive-double-float**, **least-positive-normalized-double-float**, 



**least-positive-long-float**, **least-positive-normalized-long-float** 



Each of these *constant variables* has as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> the smallest positive (nonzero) <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> for the float format implied by its name. 



*•* **least-negative-short-float**, **least-negative-normalized-short-float**, 



**least-negative-single-float**, **least-negative-normalized-single-float**, 



**least-negative-double-float**, **least-negative-normalized-double-float**, 



**least-negative-long-float**, **least-negative-normalized-long-float** 



Each of these *constant variables* has as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> the negative (nonzero) <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the smallest magnitude for the float format implied by its name. (If an implementation supports minus zero as a *di↵erent object* from positive zero, this value must not be minus zero.) 



*•* **most-negative-short-float**, **most-negative-single-float**, 



**most-negative-double-float**, **most-negative-long-float** 



Each of these *constant variables* has as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> the negative <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the largest magnitude (closest in value to, but not equal to, negative infinity) for the float format implied by its name. 



**Notes:** 



