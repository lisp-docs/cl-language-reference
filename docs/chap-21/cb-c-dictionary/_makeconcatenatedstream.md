**make-concatenated-stream** *Function* 



**Syntax:** 



**make-concatenated-stream** &amp;rest *input-streams → concatenated-stream* 



**Arguments and Values:** 



*input-stream*—an *input stream*. 



*concatenated-stream*—a *concatenated stream*. 



**Description:** 



Returns a *concatenated stream* that has the indicated *input-streams* initially associated with it. **Examples:**
```lisp
 

(read (make-concatenated-stream 

(make-string-input-stream "1") 

(make-string-input-stream "2"))) *→* 12 


```
**Exceptional Situations:** 



Should signal **type-error** if any argument is not an *input stream*. 



**See Also:** 



**concatenated-stream-streams** 







 



 



