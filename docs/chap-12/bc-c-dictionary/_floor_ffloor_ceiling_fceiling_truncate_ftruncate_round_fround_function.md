**floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 







 



 



**floor, ffloor, ceiling, fceiling, truncate, ftruncate,** *. . .* 



<ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"round"}><b>round</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



<ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks> <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> &amp;optional *divisor → quotient, remainder* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a *real*. 



*divisor*—a non-zero *real*. The default is the *integer* 1. 



*quotient*—for <ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks>, <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks>, and <ClLinks styled={true} term={"round"}><b>round</b></ClLinks>: an *integer* ; for <ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks>, <ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks>, <ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks>, and <ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks>: a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. 



*remainder*—a *real*. 



**Description:** 



These functions divide <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> by *divisor*, returning a *quotient* and *remainder*, such that *quotient·divisor*+*remainder*=<ClLinks styled={true} term={"number"}><i>number</i></ClLinks> 



The *quotient* always represents a mathematical integer. When more than one mathematical integer might be possible (*i.e.*, when the remainder is not zero), the kind of rounding or truncation depends on the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> : 



<ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks> 



<ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks> and <ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks> produce a *quotient* that has been truncated toward negative infinity; that is, the *quotient* represents the largest mathematical integer that is not larger than the mathematical quotient. 



<ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks>, <ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks> 



<ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks> and <ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks> produce a *quotient* that has been truncated toward positive infinity; that is, the *quotient* represents the smallest mathematical integer that is not smaller than the mathematical result. 



<ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks>, <ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks> 



<ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> and <ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks> produce a *quotient* that has been truncated towards zero; that is, the *quotient* represents the mathematical integer of the same sign as the mathematical quotient, and that has the greatest integral magnitude not greater than that of the mathematical quotient. 



<ClLinks styled={true} term={"round"}><b>round</b></ClLinks>, <ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks> 



<ClLinks styled={true} term={"round"}><b>round</b></ClLinks> and <ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks> produce a *quotient* that has been rounded to the nearest mathematical integer; if the mathematical quotient is exactly halfway between two integers, (that is, it 







 



 



**floor, ffloor, ceiling, fceiling, truncate, ftruncate,** *. . .* 



has the form *integer*+<sup>1</sup><sub>2</sub>), then the *quotient* has been rounded to the even (divisible by two) integer. 



All of these functions perform type conversion operations on <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>. 



The *remainder* is an *integer* if both x and y are *integers*, is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> if both x and y are <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks>, and is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> if either x or y is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. 



<ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks>, <ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks>, <ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks>, and <ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks> handle arguments of different <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> in the following way: If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>, and *divisor* is not a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of longer format, then the first result is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. Otherwise, the first result is of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> determined by <ClLinks styled={true} term={"contagion"}><i>contagion</i></ClLinks> rules; see Section 12.1.1.2 (Contagion in Numeric Operations). 



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



When only <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is given, the two results are exact; the mathematical sum of the two results is always equal to the mathematical value of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. 



(*function number divisor*) and (<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (/ *number divisor*)) (where <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is any of one of <ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks>, <ClLinks styled={true} term={"ffloor"}><b>ffloor</b></ClLinks>, <ClLinks styled={true} term={"fceiling"}><b>fceiling</b></ClLinks>, <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks>, <ClLinks styled={true} term={"round"}><b>round</b></ClLinks>, <ClLinks styled={true} term={"ftruncate"}><b>ftruncate</b></ClLinks>, and <ClLinks styled={true} term={"fround"}><b>fround</b></ClLinks>) return the same first value, 







 



 



but they return different remainders as the second value. For example: 



(floor 5 2) → 2, 1 



(floor (/ 5 2)) → 2, 1/2 



If an effect is desired that is similar to <ClLinks styled={true} term={"round"}><b>round</b></ClLinks>, but that always rounds up or down (rather than toward the nearest even integer) if the mathematical quotient is exactly halfway between two integers, the programmer should consider a construction such as (floor (+ x 1/2)) or (ceiling (- x 1/2)). 



