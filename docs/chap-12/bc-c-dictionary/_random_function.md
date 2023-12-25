**random** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> *limit* &amp;optional *random-state → random-number* 



**Arguments and Values:** 



*limit*—a positive *integer* , or a positive <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



*random-state*—a *random state*. The default is the *current random state*. 



*random-number*—a non-negative <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> less than *limit* and of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *limit*. 



**Description:** 



Returns a pseudo-random number that is a non-negative <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> less than *limit* and of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *limit*. 



The *random-state*, which is modified by this function, encodes the internal state maintained by the random number generator. 



An approximately uniform choice distribution is used. If *limit* is an *integer* , each of the possible results occurs with (approximate) probability 1/*limit*. 



**Examples:**
```lisp

(<= 0 (random 1000) 1000) *→ true* 
(let ((state1 (make-random-state)) 
      (state2 (make-random-state))) 
  (= (random 1000 state1) (random 1000 state2))) *→ true* 

```
**Side Effects:** 



The *random-state* is modified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *limit* is not a positive *integer* or a positive *real*. 



**See Also:** 



<DictionaryLink styled={true} term={"make-random-state"}><b>make-random-state</b></DictionaryLink>, <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink> 



**Notes:** 



See *Common Lisp: The Language* for information about generating random numbers. 



 



 



