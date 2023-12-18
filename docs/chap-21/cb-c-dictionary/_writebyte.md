**write-byte** *Function* 



**Syntax:** 



**write-byte** *byte stream → byte* 



**Arguments and Values:** 



*byte*—an *integer* of the *stream element type* of *stream*. 



*stream*—a *binary output stream*. 



**Description:** 



**write-byte** writes one byte, *byte*, to *stream*. 



**Examples:**
```lisp

(with-open-file (s "temp-bytes" 
		   :direction :output 
		   :element-type ’unsigned-byte) 
  (write-byte 101 s)) → 101 
```
**Side Effects:** 



*stream* is modified. 



**Affected By:** 



The *element type* of the *stream*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. Should signal an error of *type* **error** if *stream* is not a *binary output stream*. 



Might signal an error of *type* **type-error** if *byte* is not an *integer* of the *stream element type* of *stream*. 



**See Also:** 



**read-byte**, **write-char**, **write-sequence** 







 



 



