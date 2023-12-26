**floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 







 



 



**floor, ffloor, ceiling, fceiling, truncate, ftruncate,** *. . .* 



<DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"round"}><b>round</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



<DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink> <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> &amp;optional *divisor → quotient, remainder* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a *real*. 



*divisor*—a non-zero *real*. The default is the *integer* 1. 



*quotient*—for <DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink>, and <DictionaryLink  term={"round"}><b>round</b></DictionaryLink>: an *integer* ; for <DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink>, <DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink>, <DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink>, and <DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink>: a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. 



*remainder*—a *real*. 



**Description:** 



These functions divide <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> by *divisor*, returning a *quotient* and *remainder*, such that *quotient·divisor*+*remainder*=<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> 



The *quotient* always represents a mathematical integer. When more than one mathematical integer might be possible (*i.e.*, when the remainder is not zero), the kind of rounding or truncation depends on the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> : 



<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink> 



<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink> and <DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink> produce a *quotient* that has been truncated toward negative infinity; that is, the *quotient* represents the largest mathematical integer that is not larger than the mathematical quotient. 



<DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink> 



<DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink> and <DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink> produce a *quotient* that has been truncated toward positive infinity; that is, the *quotient* represents the smallest mathematical integer that is not smaller than the mathematical result. 



<DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink>, <DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink> 



<DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> and <DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink> produce a *quotient* that has been truncated towards zero; that is, the *quotient* represents the mathematical integer of the same sign as the mathematical quotient, and that has the greatest integral magnitude not greater than that of the mathematical quotient. 



<DictionaryLink  term={"round"}><b>round</b></DictionaryLink>, <DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink> 



<DictionaryLink  term={"round"}><b>round</b></DictionaryLink> and <DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink> produce a *quotient* that has been rounded to the nearest mathematical integer; if the mathematical quotient is exactly halfway between two integers, (that is, it 







 



 



**floor, ffloor, ceiling, fceiling, truncate, ftruncate,** *. . .* 



has the form *integer*+<sup>1</sup><sub>2</sub>), then the *quotient* has been rounded to the even (divisible by two) integer. 



All of these functions perform type conversion operations on <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>. 



The *remainder* is an *integer* if both x and y are *integers*, is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> if both x and y are <GlossaryTerm  term={"rational"}><i>rationals</i></GlossaryTerm>, and is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> if either x or y is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. 



<DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink>, <DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink>, <DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink>, and <DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink> handle arguments of different <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> in the following way: If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, and *divisor* is not a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of longer format, then the first result is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. Otherwise, the first result is of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> determined by <GlossaryTerm  term={"contagion"}><i>contagion</i></GlossaryTerm> rules; see Section 12.1.1.2 (Contagion in Numeric Operations). 



**Examples:**
```lisp
(floor 3/2) → 1, 1/2 
(ceiling 3 2) → 2, -1 
(ffloor 3 2) → 1.0, 1 
(ffloor -4.7) → -5.0, 0.3 
(ffloor 3.5d0) → 3.0d0, 0.5d0 
(fceiling 3/2) → 2.0, -1/2 
(truncate 1) → 1, 0 
(truncate .5) → 0, 0.5 
(round .5) → 0, 0.5 
(ftruncate -7 2) → -3.0, -1 
(fround -7 2) → -4.0, 1 
(dolist (n ’(2.6 2.5 2.4 0.7 0.3 -0.3 -0.7 -2.4 -2.5 -2.6)) 
  (format t "~&~4,1@F ~2,’ D ~2,’ D ~2,’ D ~2,’ D" 
	  n (floor n) (ceiling n) (truncate n) (round n))) 
▷ +2.6 2 3 2 3 
▷ +2.5 2 3 2 2 
▷ +2.4 2 3 2 2 
▷ +0.7 0 1 0 1 
▷ +0.3 0 1 0 0 
▷ -0.3 -1 0 0 0 
▷ -0.7 -1 0 0 -1 
▷ -2.4 -3 -2 -2 -2 
▷ -2.5 -3 -2 -2 -2 
▷ -2.6 -3 -2 -2 -3 
→ NIL 
```
**Notes:** 



When only <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is given, the two results are exact; the mathematical sum of the two results is always equal to the mathematical value of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. 



(*function number divisor*) and (<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (/ *number divisor*)) (where <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is any of one of <DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink  term={"ffloor"}><b>ffloor</b></DictionaryLink>, <DictionaryLink  term={"fceiling"}><b>fceiling</b></DictionaryLink>, <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink>, <DictionaryLink  term={"round"}><b>round</b></DictionaryLink>, <DictionaryLink  term={"ftruncate"}><b>ftruncate</b></DictionaryLink>, and <DictionaryLink  term={"fround"}><b>fround</b></DictionaryLink>) return the same first value, 







 



 



but they return different remainders as the second value. For example: 



(floor 5 2) → 2, 1 



(floor (/ 5 2)) → 2, 1/2 



If an effect is desired that is similar to <DictionaryLink  term={"round"}><b>round</b></DictionaryLink>, but that always rounds up or down (rather than toward the nearest even integer) if the mathematical quotient is exactly halfway between two integers, the programmer should consider a construction such as (floor (+ x 1/2)) or (ceiling (- x 1/2)). 



