**+** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> &amp;rest *numbers → sum* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*sum*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



Returns the sum of <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>, performing any necessary type conversions in the process. If no <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are supplied, 0 is returned. 



**Examples:**
```lisp
 
(+) *→* 0 
(+ 1) *→* 1 
(+ 31/100 69/100) *→* 1 
(+ 1/5 0.8) *→* 1.0 

```
**Exceptional Situations:** 



Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations) 



*− Function* 



**Syntax:** 



*− number → negation* 



*− minuend* &amp;rest *subtrahends*<sup>+</sup> *→ difference* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>, *minuend*, *subtrahend*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*negation*, *difference*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> performs arithmetic subtraction and negation. 







 



 



If only one <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is supplied, the negation of that <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is returned. 



If more than one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is given, it subtracts all of the *subtrahends* from the *minuend* and returns the result. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> performs necessary type conversions. 



**Examples:**
```lisp

(- 55.55) *→* -55.55 
(- #c(3 -5)) *→* #C(-3 5) 
(- 0) *→* 0 
(eql (- 0.0) -0.0) *→ true* 
(- #c(100 45) #c(0 45)) *→* 100 
(- 10 1 2 3 4) *→* 0 

```
**Exceptional Situations:** 



Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations) 



