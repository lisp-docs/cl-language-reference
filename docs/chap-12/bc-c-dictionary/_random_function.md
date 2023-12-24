**random** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"random"}><b>random</b></ClLinks> *limit* &amp;optional *random-state → random-number* 



**Arguments and Values:** 



*limit*—a positive *integer* , or a positive <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. 



*random-state*—a *random state*. The default is the *current random state*. 



*random-number*—a non-negative <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> less than *limit* and of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *limit*. 



**Description:** 



Returns a pseudo-random number that is a non-negative <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> less than *limit* and of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *limit*. 



The *random-state*, which is modified by this function, encodes the internal state maintained by the random number generator. 



An approximately uniform choice distribution is used. If *limit* is an *integer* , each of the possible results occurs with (approximate) probability 1/*limit*. 



**Examples:**
```lisp

(<= 0 (random 1000) 1000) → true 
(let ((state1 (make-random-state)) 
      (state2 (make-random-state))) 
  (= (random 1000 state1) (random 1000 state2))) → true 

```
**Side Effects:** 



The *random-state* is modified. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *limit* is not a positive *integer* or a positive *real*. 



**See Also:** 



<ClLinks styled={true} term={"make-random-state"}><b>make-random-state</b></ClLinks>, <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks> 



**Notes:** 



See *Common Lisp: The Language* for information about generating random numbers. 



 



 



