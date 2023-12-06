**read-byte** *Function* 



**Syntax:** 



**read-byte** *stream* &amp;optional *eof-error-p eof-value → byte* 



**Arguments and Values:** 



*stream*—a *binary input stream*. 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*byte*—an *integer* , or the *eof-value*. 



**Description:** 



**read-byte** reads and returns one byte from *stream*. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is *false*, the *eof-value* is returned. 



**Examples:**
```lisp
 



(with-open-file (s "temp-bytes" 



:direction :output 



:element-type ’unsigned-byte) 



(write-byte 101 s)) *→* 101 



(with-open-file (s "temp-bytes" :element-type ’unsigned-byte) 



(format t "&#126;S &#126;S" (read-byte s) (read-byte s nil ’eof))) 



▷ 101 EOF 



*→* NIL 




```
**Side Effects:** 



Modifies *stream*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. 



Should signal an error of *type* **error** if *stream* is not a *binary input stream*. 



If there are no *bytes* remaining in the *stream* and *eof-error-p* is *true*, an error of *type* **end-of-file** is signaled. 



**See Also:** 



**read-char**, **read-sequence**, **write-byte** 







 



 



