**sqrt, isqrt** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> *number → root* 



<DictionaryLink  term={"isqrt"}><b>isqrt</b></DictionaryLink> *natural → natural-root* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>, *root*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*natural*, *natural-root*—a non-negative *integer* . 



**Description:** 



<DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> and <DictionaryLink  term={"isqrt"}><b>isqrt</b></DictionaryLink> compute square roots. 



<DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> returns the <GlossaryTerm  term={"principal"}><i>principal</i></GlossaryTerm> square root of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. If the <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> but is negative, then the result is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 



<DictionaryLink  term={"isqrt"}><b>isqrt</b></DictionaryLink> returns the greatest *integer* less than or equal to the exact positive square root of *natural*. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a positive <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether *root* is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> or a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a negative <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether *root* is a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>. 



The mathematical definition of complex square root (whether or not minus zero is supported) follows: 



(sqrt *x*) = (exp (/ (log *x*) 2)) 



The branch cut for square root lies along the negative real axis, continuous with quadrant II. The range consists of the right half-plane, including the non-negative imaginary axis and excluding the negative imaginary axis. 



**Examples:**
```lisp
(sqrt 9.0) → 3.0 
(sqrt -9.0) → #C(0.0 3.0) 

(isqrt 9) → 3 
(sqrt 12) → 3.4641016 
(isqrt 12) → 3 
(isqrt 300) → 17 
(isqrt 325) → 18 
(sqrt 25) 
→ 5 
<i><sup>or</sup>→</i> 5.0 
(isqrt 25) → 5 
(sqrt -1) → #C(0.0 1.0) 
(sqrt #c(0 2)) → #C(1.0 1.0) 
```
**Exceptional Situations:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> should signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"isqrt"}><b>isqrt</b></DictionaryLink> should signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a non-negative *integer* . The functions <DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> and <DictionaryLink  term={"isqrt"}><b>isqrt</b></DictionaryLink> might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink>, <DictionaryLink  term={"log"}><b>log</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(isqrt x) *≡* (values (floor (sqrt x))) 



but it is potentially more efficient. 



