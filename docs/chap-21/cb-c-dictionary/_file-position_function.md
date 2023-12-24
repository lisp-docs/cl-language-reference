**file-position** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> *stream → position* 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> *stream position-spec → success-p* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*position-spec*—a *file position designator* . 



*position*—a *file position* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*success-p*—a *generalized boolean*. 



**Description:** 



Returns or changes the current position within a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



When *position-spec* is not supplied, <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> returns the current *file position* in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if this cannot be determined. 



When *position-spec* is supplied, the *file position* in <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is set to that *file position* (if possible). <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the repositioning is performed successfully, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if it is not. 



An *integer* returned by <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> of one argument should be acceptable as *position-spec* for use with the same file. 



For a character file, performing a single <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> or <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> operation may cause the file position to be increased by more than 1 because of character-set translations (such as translating between the Common Lisp #\Newline character and an external ASCII carriage-return/line-feed 







 



 



<ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> 



sequence) and other aspects of the implementation. For a binary file, every <ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks> or <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks> operation increases the file position by 1. 



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
→ tester 
(tester) 
→ (0 2 T 2 0 2 5 7) 
<i><sup>or</sup>→</i> (0 2 NIL 3 0 3 5 6 7) 
<i><sup>or</sup>→</i> (NIL NIL NIL NIL NIL NIL) 

```
**Side Effects:** 



When the *position-spec* argument is supplied, the *file position* in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> might be moved. 



**Affected By:** 



The value returned by <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> increases monotonically as input or output operations are performed. 







 



 



**Exceptional Situations:** 



If *position-spec* is supplied, but is too large or otherwise inappropriate, an error is signaled. 



**See Also:** 



<ClLinks styled={true} term={"file-length"}><b>file-length</b></ClLinks>, <ClLinks styled={true} term={"file-string-length"}><b>file-string-length</b></ClLinks>, <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 



**Notes:** 



Implementations that have character files represented as a sequence of records of bounded size might choose to encode the file position as, for example, ⟨record-number ⟩\*⟨max-record size⟩+⟨character-within-record⟩. This is a valid encoding because it increases monotonically as each character is read or written, though not necessarily by 1 at each step. An *integer* might then be considered “inappropriate” as *position-spec* to <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> if, when decoded into record number and character number, it turned out that the supplied record was too short for the specified character number. 



