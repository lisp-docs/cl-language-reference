**log** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"log"}><b>log</b></DictionaryLink> <ClLinks  term={"number"}><i>number</i></ClLinks> &amp;optional *base → logarithm* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a non-zero <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*base*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*logarithm*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<DictionaryLink  term={"log"}><b>log</b></DictionaryLink> returns the logarithm of <ClLinks  term={"number"}><i>number</i></ClLinks> in base *base*. If *base* is not supplied its value is *e*, the base of the natural logarithms. 







 



 



<DictionaryLink  term={"log"}><b>log</b></DictionaryLink> 



<DictionaryLink  term={"log"}><b>log</b></DictionaryLink> may return a <ClLinks  term={"complex"}><i>complex</i></ClLinks> when given a *real* negative <ClLinks  term={"number"}><i>number</i></ClLinks>. 



(log -1.0) *≡* (complex 0.0 (float pi 0.0)) 



If *base* is zero, <DictionaryLink  term={"log"}><b>log</b></DictionaryLink> returns zero. 



The result of (log 8 2) may be either 3 or 3.0, depending on the implementation. An implementation can use floating-point calculations even if an exact integer result is possible. 



The branch cut for the logarithm function of one argument (natural logarithm) lies along the negative real axis, continuous with quadrant II. The domain excludes the origin. 



The mathematical definition of a complex logarithm is as follows, whether or not minus zero is supported by the implementation: 



(log *x*) *≡* (complex (log (abs *x*)) (phase *x*)) 



Therefore the range of the one-argument logarithm function is that strip of the complex plane containing numbers with imaginary parts between *−π* (exclusive) and *π* (inclusive) if minus zero is not supported, or *−π* (inclusive) and *π* (inclusive) if minus zero is supported. 



The two-argument logarithm function is defined as 



(log *base number*) 



*≡* (/ (log <ClLinks  term={"number"}><i>number</i></ClLinks>) (log *base*)) 



This defines the *principal values* precisely. The range of the two-argument logarithm function is the entire complex plane. 



**Examples:**
```lisp
(log 100 10) 
→ 2.0 
→ 2 
(log 100.0 10) → 2.0 
(log #c(0 1) #c(0 -1)) 
→ #C(-1.0 0.0) 
<i><sup>or</sup>→</i> #C(-1 0) 
(log 8.0 2) → 3.0 
(log #c(-16 16) #c(2 2)) → 3 or approximately #c(3.0 0.0) 
or approximately 3.0 (unlikely) 
```
**Affected By:** 



The implementation. 







 



 



**See Also:** 



<DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink>, <DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 



