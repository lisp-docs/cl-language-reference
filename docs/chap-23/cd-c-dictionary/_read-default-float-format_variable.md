*∗<DictionaryLink styled={true} term={"read-default-float-format"}><b>*read-default-float-format*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



one of the *atomic type specifiers* <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, or <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>, or else some other *type specifier* defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be acceptable. 







 



 



**Initial Value:** 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. 



**Description:** 



Controls the floating-point format that is to be used when reading a floating-point number that has no *exponent marker* or that has e or E for an *exponent marker* . Other *exponent markers* explicitly prescribe the floating-point format to be used. 



The printer uses <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink> to guide the choice of *exponent markers* when printing floating-point numbers. 



**Examples:**
```lisp

(let ((\*read-default-float-format\* ’double-float)) 
  (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) 
*→* (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. 
*→* (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. *→* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. *→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. *→* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. *→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. 
*∗***read-eval***∗ Variable* 

```
**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Description:** 



If it is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the #. *reader macro* has its normal effect. Otherwise, that *reader macro* signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



**Notes:** 



If **\*read-eval\*** is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, any <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> that would output a reference to the #. *reader macro* either outputs something different or signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink>. 







 



 



