**get-output-stream-string** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> *string-output-stream → string* 



**Arguments and Values:** 



*string-output-stream*—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> containing, in order, all the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that have been output to *string-output stream*. This operation clears any <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> on *string-output-stream*, so the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> contains only those <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> which have been output since the last call to <ClLinks styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></ClLinks> or since the creation of the *string-output-stream*, whichever occurred most recently. 



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



The consequences are undefined if *stream-output-string* is <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>. 



The consequences are undefined if *string-output-stream* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that was not produced by <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. The consequences are undefined if *string-output-stream* was created implicitly by <ClLinks styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> or <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks> 







 



 



