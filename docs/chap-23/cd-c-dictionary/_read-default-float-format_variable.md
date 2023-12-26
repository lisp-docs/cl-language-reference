*∗<DictionaryLink  term={"read-default-float-format"}><b>*read-default-float-format*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



one of the <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifiers</i></GlossaryTerm> <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, or <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>, or else some other <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be acceptable. 







 



 



**Initial Value:** 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>. 



**Description:** 



Controls the floating-point format that is to be used when reading a floating-point number that has no <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent marker</i></GlossaryTerm> or that has e or E for an <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent marker</i></GlossaryTerm> . Other <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent markers</i></GlossaryTerm> explicitly prescribe the floating-point format to be used. 



The printer uses <DictionaryLink  term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink> to guide the choice of <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent markers</i></GlossaryTerm> when printing floating-point numbers. 



**Examples:**
```lisp
(let ((\*read-default-float-format\* ’double-float)) 
  (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) 
→ (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. 
→ (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. → (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. → (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. → (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. → (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. 
*∗***read-eval***∗ Variable* 
```
**Value Type:** 



a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Initial Value:** 



<ClLinks  term={"true"}><i>true</i></ClLinks>. 



**Description:** 



If it is <ClLinks  term={"true"}><i>true</i></ClLinks>, the #. <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> has its normal effect. Otherwise, that <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



**Notes:** 



If **\*read-eval\*** is <ClLinks  term={"false"}><i>false</i></ClLinks> and <DictionaryLink  term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks>, any <ClLinks  term={"method"}><i>method</i></ClLinks> for <DictionaryLink  term={"print-object"}><b>print-object</b></DictionaryLink> that would output a reference to the #. <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> either outputs something different or signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink>. 







 



 



