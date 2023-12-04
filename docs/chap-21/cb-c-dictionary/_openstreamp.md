**open-stream-p** *Function* 



**Syntax:** 



**open-stream-p** *stream → generalized-boolean* 



**Arguments and Values:** 



*stream*—a *stream*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *stream* is an *open stream*; otherwise, returns *false*. 







 



 



*Streams* are open until they have been explicitly closed with **close**, or until they are implicitly closed due to exit from a **with-output-to-string**, **with-open-file**, **with-input-from-string**, or **with-open-stream** *form*. 



**Examples:**
```lisp
 



(open-stream-p \*standard-input\*) *→ true* 




```
**Affected By:** 



**close**. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. 



