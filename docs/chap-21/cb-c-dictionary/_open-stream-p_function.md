**open-stream-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"open-stream-p"}><b>open-stream-p</b></ClLinks> *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *open stream*; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"stream"}><i>Streams</i></ClLinks> are open until they have been explicitly closed with <ClLinks styled={true} term={"close"}><b>close</b></ClLinks>, or until they are implicitly closed due to exit from a <ClLinks styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks>, <ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks>, <ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks>, or <ClLinks styled={true} term={"with-open-stream"}><b>with-open-stream</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Examples:**
```lisp

(open-stream-p \*standard-input\*) → true 

```
**Affected By:** 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



