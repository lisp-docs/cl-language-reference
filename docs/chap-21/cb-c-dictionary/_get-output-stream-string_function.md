**get-output-stream-string** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> *string-output-stream → string* 



**Arguments and Values:** 



*string-output-stream*—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Description:** 



Returns a <ClLinks  term={"string"}><i>string</i></ClLinks> containing, in order, all the <ClLinks  term={"character"}><i>characters</i></ClLinks> that have been output to *string-output stream*. This operation clears any <ClLinks  term={"character"}><i>characters</i></ClLinks> on *string-output-stream*, so the <ClLinks  term={"string"}><i>string</i></ClLinks> contains only those <ClLinks  term={"character"}><i>characters</i></ClLinks> which have been output since the last call to <ClLinks  term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> or since the creation of the *string-output-stream*, whichever occurred most recently. 



**Examples:**
```lisp
(setq a-stream (make-string-output-stream) 
      a-string "abcdefghijklm") → "abcdefghijklm" 
(write-string a-string a-stream) → "abcdefghijklm" 
(get-output-stream-string a-stream) → "abcdefghijklm" 
(get-output-stream-string a-stream) → "" 
```
**Side Effects:** 



The *string-output-stream* is cleared. 



**Exceptional Situations:** 



The consequences are undefined if *stream-output-string* is <ClLinks  term={"closed"}><i>closed</i></ClLinks>. 



The consequences are undefined if *string-output-stream* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that was not produced by <ClLinks  term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. The consequences are undefined if *string-output-stream* was created implicitly by <ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> or <ClLinks  term={"format"}><b>format</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks> 







 



 



