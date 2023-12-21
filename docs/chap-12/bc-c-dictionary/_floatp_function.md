**floatp** *Function* 



**Syntax:** 



**floatp** *object* 



generalized-boolean 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **float**; otherwise, returns *false*. 



**Examples:**
```lisp

(floatp 1.2d2) *! true* 
(floatp 1.212) *! true* 
(floatp 1.2s2) *! true* 
(floatp (expt 2 130)) *! false* 

```
**Notes:** 



(floatp *object*) *⌘* (typep *object* ’float) 







 



 



<b>most-positive-short-float, least-positive-short-float,</b> <i>...</i> <b><sup>most-positive-short-float, least-positive-short float, least-positive-normalized-short-float, most</sup> positive-double-float, least-positive-double-float, <sup>least-positive-normalized-double-float, most positive-long-float, least-positive-long-float, least positive-normalized-long-float, most-positive single-float, least-positive-single-float, least positive-normalized-single-float, most-negative short-float, least-negative-short-float, least negative-normalized-short-float, most-negative single-float, least-negative-single-float, least negative-normalized-single-float, most-negative double-float, least-negative-double-float, least negative-normalized-double-float, most-negative long-float, least-negative-long-float, least-negative</sup> normalized-long-float</b> <i>Constant Variable</i> 



**Constant Value:** 



*implementation-dependent*. 



**Description:** 



These *constant variables* provide a way for programs to examine the *implementation-defined* limits for the various float formats. 



Of these *variables*, each which has “-normalized” in its *name* must have a *value* which is a *normalized float*, and each which does not have “-normalized” in its name may have a *value* which is either a *normalized float* or a *denormalized float*, as appropriate. 



Of these *variables*, each which has “short-float” in its name must have a *value* which is a *short float*, each which has “single-float” in its name must have a *value* which is a *single float*, each which has “double-float” in its name must have a *value* which is a *double float*, and each which has “long-float” in its name must have a *value* which is a *long float*. 



*•* **most-positive-short-float**, **most-positive-single-float**, 



**most-positive-double-float**, **most-positive-long-float** 



Each of these *constant variables* has as its *value* the positive *float* of the largest magnitude 



 



 



(closest in value to, but not equal to, positive infinity) for the float format implied by its name. 



*•* **least-positive-short-float**, **least-positive-normalized-short-float**, 



**least-positive-single-float**, **least-positive-normalized-single-float**, 



**least-positive-double-float**, **least-positive-normalized-double-float**, 



**least-positive-long-float**, **least-positive-normalized-long-float** 



Each of these *constant variables* has as its *value* the smallest positive (nonzero) *float* for the float format implied by its name. 



*•* **least-negative-short-float**, **least-negative-normalized-short-float**, 



**least-negative-single-float**, **least-negative-normalized-single-float**, 



**least-negative-double-float**, **least-negative-normalized-double-float**, 



**least-negative-long-float**, **least-negative-normalized-long-float** 



Each of these *constant variables* has as its *value* the negative (nonzero) *float* of the smallest magnitude for the float format implied by its name. (If an implementation supports minus zero as a *di↵erent object* from positive zero, this value must not be minus zero.) 



*•* **most-negative-short-float**, **most-negative-single-float**, 



**most-negative-double-float**, **most-negative-long-float** 



Each of these *constant variables* has as its *value* the negative *float* of the largest magnitude (closest in value to, but not equal to, negative infinity) for the float format implied by its name. 



**Notes:** 



