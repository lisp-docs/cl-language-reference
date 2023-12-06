**finish-output, force-output, clear-output** *Function* 



**Syntax:** 



**finish-output** &amp;optional *output-stream →* **nil** 



**force-output** &amp;optional *output-stream →* **nil** 



**clear-output** &amp;optional *output-stream →* **nil** 



**Arguments and Values:** 



*output-stream*—an *output stream designator* . The default is *standard output*. 



**Description:** 



**finish-output**, **force-output**, and **clear-output** exercise control over the internal handling of buffered stream output. 



**finish-output** attempts to ensure that any buffered output sent to *output-stream* has reached its destination, and then returns. 



**force-output** initiates the emptying of any internal buffers but does not wait for completion or acknowledgment to return. 



**clear-output** attempts to abort any outstanding output operation in progress in order to allow as little output as possible to continue to the destination. 



If any of these operations does not make sense for *output-stream*, then it does nothing. The precise actions of these *functions* are *implementation-dependent*. 







 



 



**Examples:**
```lisp
 



;; Implementation A 



(progn (princ "am i seen?") (clear-output)) 



*→* NIL 



;; Implementation B 



(progn (princ "am i seen?") (clear-output)) 



▷ am i seen? 



*→* NIL 




```
**Affected By:** 



**\*standard-output\*** 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *output-stream* is not a *stream designator* . 



**See Also:** 



**clear-input** 



