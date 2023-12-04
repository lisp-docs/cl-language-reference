**file-position** *Function* 



**Syntax:** 



**file-position** *stream → position* 



**file-position** *stream position-spec → success-p* 



**Arguments and Values:** 



*stream*—a *stream*. 



*position-spec*—a *file position designator* . 



*position*—a *file position* or **nil**. 



*success-p*—a *generalized boolean*. 



**Description:** 



Returns or changes the current position within a *stream*. 



When *position-spec* is not supplied, **file-position** returns the current *file position* in the *stream*, or **nil** if this cannot be determined. 



When *position-spec* is supplied, the *file position* in *stream* is set to that *file position* (if possible). **file-position** returns *true* if the repositioning is performed successfully, or *false* if it is not. 



An *integer* returned by **file-position** of one argument should be acceptable as *position-spec* for use with the same file. 



For a character file, performing a single **read-char** or **write-char** operation may cause the file position to be increased by more than 1 because of character-set translations (such as translating between the Common Lisp #\Newline character and an external ASCII carriage-return/line-feed 







 



 



**file-position** 



sequence) and other aspects of the implementation. For a binary file, every **read-byte** or **write-byte** operation increases the file position by 1. 



**Examples:**
```lisp
 



(defun tester () 



(let ((noticed ’()) file-written) 



(flet ((notice (x) (push x noticed) x)) 



(with-open-file (s "test.bin" 



:element-type ’(unsigned-byte 8) 



:direction :output 



:if-exists :error) 



(notice (file-position s)) ;1 



(write-byte 5 s) 



(write-byte 6 s) 



(let ((p (file-position s))) 



(notice p) ;2 



(notice (when p (file-position s (1- p))))) ;3 



(write-byte 7 s) 



(notice (file-position s)) ;4 



(setq file-written (truename s))) 



(with-open-file (s file-written 



:element-type ’(unsigned-byte 8) 



:direction :input) 



(notice (file-position s)) ;5 



(let ((length (file-length s))) 



(notice length) ;6 



(when length 



(dotimes (i length) 



(notice (read-byte s)))))) ;7,... 



(nreverse noticed)))) 



*→* tester 



(tester) 



*→* (0 2 T 2 0 2 5 7) 



<i><sup>or</sup>→</i> (0 2 NIL 3 0 3 5 6 7) 



<i><sup>or</sup>→</i> (NIL NIL NIL NIL NIL NIL) 




```
**Side Effects:** 



When the *position-spec* argument is supplied, the *file position* in the *stream* might be moved. 



**Affected By:** 



The value returned by **file-position** increases monotonically as input or output operations are performed. 







 



 



**Exceptional Situations:** 



If *position-spec* is supplied, but is too large or otherwise inappropriate, an error is signaled. 



**See Also:** 



**file-length**, **file-string-length**, **open** 



**Notes:** 



Implementations that have character files represented as a sequence of records of bounded size might choose to encode the file position as, for example, ⟨record-number ⟩\*⟨max-record size⟩+⟨character-within-record⟩. This is a valid encoding because it increases monotonically as each character is read or written, though not necessarily by 1 at each step. An *integer* might then be considered “inappropriate” as *position-spec* to **file-position** if, when decoded into record number and character number, it turned out that the supplied record was too short for the specified character number. 



