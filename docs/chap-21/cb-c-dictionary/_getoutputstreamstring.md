**get-output-stream-string** *Function* 



**Syntax:** 



**get-output-stream-string** *string-output-stream → string* 



**Arguments and Values:** 



*string-output-stream*—a *stream*. 



*string*—a *string*. 



**Description:** 



Returns a *string* containing, in order, all the *characters* that have been output to *string-output stream*. This operation clears any *characters* on *string-output-stream*, so the *string* contains only those *characters* which have been output since the last call to **get-output-stream-string** or since the creation of the *string-output-stream*, whichever occurred most recently. 



**Examples:**
```lisp
 

(setq a-stream (make-string-output-stream) 

a-string "abcdefghijklm") *→* "abcdefghijklm" 

(write-string a-string a-stream) *→* "abcdefghijklm" 

(get-output-stream-string a-stream) *→* "abcdefghijklm" 

(get-output-stream-string a-stream) *→* "" 


```
**Side Effects:** 



The *string-output-stream* is cleared. 



**Exceptional Situations:** 



The consequences are undefined if *stream-output-string* is *closed*. 



The consequences are undefined if *string-output-stream* is a *stream* that was not produced by **make-string-output-stream**. The consequences are undefined if *string-output-stream* was created implicitly by **with-output-to-string** or **format**. 



**See Also:** 



**make-string-output-stream** 







 



 



