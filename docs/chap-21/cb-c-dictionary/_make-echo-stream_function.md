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
→ "this-is-read-and-echoed \* this-is-direct-output" 

```
**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, **make-two-way-stream concatenated-stream-streams** *Function* 



**Syntax:** 



**concatenated-stream-streams** *concatenated-stream → streams* 



**Arguments and Values:** 



*concatenated-stream* – a *concatenated stream*. 



*streams*—a *list* of *input streams*. 







 



 



**Description:** 



Returns a *list* of *input streams* that constitute the ordered set of *streams* the *concatenated-stream* still has to read from, starting with the current one it is reading from. The list may be *empty* if no more *streams* remain to be read. 



The consequences are undefined if the *list structure* of the *streams* is ever modified. 