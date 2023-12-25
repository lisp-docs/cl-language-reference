**open-stream-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"open-stream-p"}><b>open-stream-p</b></ClLinks> *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *open stream*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



<ClLinks  term={"stream"}><i>Streams</i></ClLinks> are open until they have been explicitly closed with <ClLinks  term={"close"}><b>close</b></ClLinks>, or until they are implicitly closed due to exit from a <ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks>, <ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks>, <ClLinks  term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks>, or <ClLinks  term={"with-open-stream"}><b>with-open-stream</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Examples:**
```lisp
(open-stream-p \*standard-input\*) → true 
```
**Affected By:** 



<ClLinks  term={"close"}><b>close</b></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



