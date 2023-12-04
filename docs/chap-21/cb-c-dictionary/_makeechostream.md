**make-echo-stream** *Function* 



**Syntax:** 



**make-echo-stream** *input-stream output-stream → echo-stream* 



**Arguments and Values:** 



*input-stream*—an *input stream*. 



*output-stream*—an *output stream*. 



*echo-stream*—an *echo stream*. 



**Description:** 



Creates and returns an *echo stream* that takes input from *input-stream* and sends output to *output-stream*. 



**Examples:**
```lisp
 



(let ((out (make-string-output-stream))) 



(with-open-stream 



(s (make-echo-stream 



(make-string-input-stream "this-is-read-and-echoed") 



out)) 



(read s) 



(format s " \* this-is-direct-output") 



(get-output-stream-string out))) 



*→* "this-is-read-and-echoed \* this-is-direct-output" 




```
**See Also:** 



