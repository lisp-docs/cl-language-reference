**floatp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"floatp"}><b>floatp</b></DictionaryLink> <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> 



generalized-boolean 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(floatp 1.2d2) *! true* 
(floatp 1.212) *! true* 
(floatp 1.2s2) *! true* 
(floatp (expt 2 130)) *! false* 
```
**Notes:** 



(floatp <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) *⌘* (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’float) 







 



 



<b>most-positive-short-float, least-positive-short-float,</b> <i>...</i> <b><sup>most-positive-short-float, least-positive-short float, least-positive-normalized-short-float, most</sup> positive-double-float, least-positive-double-float, <sup>least-positive-normalized-double-float, most positive-long-float, least-positive-long-float, least positive-normalized-long-float, most-positive single-float, least-positive-single-float, least positive-normalized-single-float, most-negative short-float, least-negative-short-float, least negative-normalized-short-float, most-negative single-float, least-negative-single-float, least negative-normalized-single-float, most-negative double-float, least-negative-double-float, least negative-normalized-double-float, most-negative long-float, least-negative-long-float, least-negative</sup> normalized-long-float</b> <i>Constant Variable</i> 



**Constant Value:** 



<GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



These <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> provide a way for programs to examine the <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> limits for the various float formats. 



Of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>, each which has “-normalized” in its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is a *normalized float*, and each which does not have “-normalized” in its name may have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is either a *normalized float* or a *denormalized float*, as appropriate. 



Of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>, each which has “short-float” in its name must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is a <GlossaryTerm styled={true} term={"short float"}><i>short float</i></GlossaryTerm>, each which has “single-float” in its name must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>, each which has “double-float” in its name must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is a <GlossaryTerm styled={true} term={"double float"}><i>double float</i></GlossaryTerm>, and each which has “long-float” in its name must have a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is a <GlossaryTerm styled={true} term={"long float"}><i>long float</i></GlossaryTerm>. 



*•* **most-positive-short-float**, **most-positive-single-float**, 



**most-positive-double-float**, **most-positive-long-float** 



Each of these <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> has as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> the positive <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the largest magnitude 



 



 



(closest in value to, but not equal to, positive infinity) for the float format implied by its name. 



*•* **least-positive-short-float**, **least-positive-normalized-short-float**, 



**least-positive-single-float**, **least-positive-normalized-single-float**, 



**least-positive-double-float**, **least-positive-normalized-double-float**, 



**least-positive-long-float**, **least-positive-normalized-long-float** 



Each of these <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> has as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> the smallest positive (nonzero) <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> for the float format implied by its name. 



*•* **least-negative-short-float**, **least-negative-normalized-short-float**, 



**least-negative-single-float**, **least-negative-normalized-single-float**, 



**least-negative-double-float**, **least-negative-normalized-double-float**, 



**least-negative-long-float**, **least-negative-normalized-long-float** 



Each of these <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> has as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> the negative (nonzero) <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the smallest magnitude for the float format implied by its name. (If an implementation supports minus zero as a *di↵erent object* from positive zero, this value must not be minus zero.) 



*•* **most-negative-short-float**, **most-negative-single-float**, 



**most-negative-double-float**, **most-negative-long-float** 



Each of these <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> has as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> the negative <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the largest magnitude (closest in value to, but not equal to, negative infinity) for the float format implied by its name. 



**Notes:** 



