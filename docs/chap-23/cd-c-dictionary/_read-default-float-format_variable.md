*∗<ClLinks  term={"read-default-float-format"}><b>*read-default-float-format*</b></ClLinks>∗ Variable* 



**Value Type:** 



one of the *atomic type specifiers* <ClLinks  term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks  term={"double-float"}><b>double-float</b></ClLinks>, or <ClLinks  term={"long-float"}><b>long-float</b></ClLinks>, or else some other *type specifier* defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be acceptable. 







 



 



**Initial Value:** 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>. 



**Description:** 



Controls the floating-point format that is to be used when reading a floating-point number that has no *exponent marker* or that has e or E for an *exponent marker* . Other *exponent markers* explicitly prescribe the floating-point format to be used. 



The printer uses <ClLinks  term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks> to guide the choice of *exponent markers* when printing floating-point numbers. 



**Examples:**
```lisp
(let ((\*read-default-float-format\* ’double-float)) 
  (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) 
→ (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. 
→ (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. → (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. → (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. → (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. → (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. 
*∗***read-eval***∗ Variable* 
```
**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks  term={"true"}><i>true</i></ClLinks>. 



**Description:** 



If it is <ClLinks  term={"true"}><i>true</i></ClLinks>, the #. *reader macro* has its normal effect. Otherwise, that *reader macro* signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"print-readably"}><b>\*print-readably\*</b></ClLinks> 



**Notes:** 



If **\*read-eval\*** is <ClLinks  term={"false"}><i>false</i></ClLinks> and <ClLinks  term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks>, any <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"print-object"}><b>print-object</b></ClLinks> that would output a reference to the #. *reader macro* either outputs something different or signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"print-not-readable"}><b>print-not-readable</b></ClLinks>. 







 



 



