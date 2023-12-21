**two-way-stream** *System Class* 



**Class Precedence List:** 



**two-way-stream**, **stream**, **t** 



**Description:** 



A *bidirectional composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



**See Also:** 



**make-two-way-stream**, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p** *Function* 



**Syntax:** 



**input-stream-p** *stream → generalized-boolean* 



**output-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



*stream*—a *stream*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**input-stream-p** returns *true* if *stream* is an *input stream*; otherwise, returns *false*. **output-stream-p** returns *true* if *stream* is an *output stream*; otherwise, returns *false*. **Examples:**
```lisp

(input-stream-p \*standard-input\*) → true 
(input-stream-p \*terminal-io\*) → true 
(input-stream-p (make-string-output-stream)) → false 
(output-stream-p \*standard-output\*) → true 
(output-stream-p \*terminal-io\*) → true 
(output-stream-p (make-string-input-stream "jr")) → false 

```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. 







 



 



