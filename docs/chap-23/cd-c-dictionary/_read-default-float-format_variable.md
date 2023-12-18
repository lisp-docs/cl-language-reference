*∗***read-default-float-format***∗ Variable* 



**Value Type:** 



one of the *atomic type specifiers* **short-float**, **single-float**, **double-float**, or **long-float**, or else some other *type specifier* defined by the *implementation* to be acceptable. 







 



 



**Initial Value:** 



The *symbol* **single-float**. 



**Description:** 



Controls the floating-point format that is to be used when reading a floating-point number that has no *exponent marker* or that has e or E for an *exponent marker* . Other *exponent markers* explicitly prescribe the floating-point format to be used. 



The printer uses **\*read-default-float-format\*** to guide the choice of *exponent markers* when printing floating-point numbers. 



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



*true*. 



**Description:** 



If it is *true*, the #. *reader macro* has its normal effect. Otherwise, that *reader macro* signals an error of *type* **reader-error**. 



**See Also:** 



**\*print-readably\*** 



**Notes:** 



If **\*read-eval\*** is *false* and **\*print-readably\*** is *true*, any *method* for **print-object** that would output a reference to the #. *reader macro* either outputs something different or signals an error of *type* **print-not-readable**. 







 



 



