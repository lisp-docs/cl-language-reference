**sleep** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"sleep"}><b>sleep</b></DictionaryLink> *seconds →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*seconds*—a non-negative *real*. 







 



 



**Description:** 



Causes execution to cease and become dormant for approximately the seconds of real time indicated by *seconds*, whereupon execution is resumed. 



**Examples:**
```lisp

(sleep 1) *→* NIL 
;; Actually, since SLEEP is permitted to use approximate timing, 
;; this might not always yield true, but it will often enough that 
;; we felt it to be a productive example of the intent. 
(let ((then (get-universal-time)) 
      (now (progn (sleep 10) (get-universal-time)))) 
  (>= (- now then) 10)) 
*→ true* 

```
**Side Effects:** 



Causes processing to pause. 



**Affected By:** 



The granularity of the scheduler. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *seconds* is not a non-negative *real*. 



