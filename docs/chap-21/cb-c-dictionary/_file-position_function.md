**file-position** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> *stream → position* 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> *stream position-spec → success-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*position-spec*—a *file position designator* . 



*position*—a *file position* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*success-p*—a *generalized boolean*. 



**Description:** 



Returns or changes the current position within a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



When *position-spec* is not supplied, <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> returns the current *file position* in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if this cannot be determined. 



When *position-spec* is supplied, the *file position* in <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is set to that *file position* (if possible). <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the repositioning is performed successfully, or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if it is not. 



An *integer* returned by <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> of one argument should be acceptable as *position-spec* for use with the same file. 



For a character file, performing a single <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> or <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> operation may cause the file position to be increased by more than 1 because of character-set translations (such as translating between the Common Lisp #\Newline character and an external ASCII carriage-return/line-feed 







 



 



<DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> 



sequence) and other aspects of the implementation. For a binary file, every <DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink> or <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink> operation increases the file position by 1. 



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



When the *position-spec* argument is supplied, the *file position* in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> might be moved. 



**Affected By:** 



The value returned by <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> increases monotonically as input or output operations are performed. 







 



 



**Exceptional Situations:** 



If *position-spec* is supplied, but is too large or otherwise inappropriate, an error is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"file-length"}><b>file-length</b></DictionaryLink>, <DictionaryLink styled={true} term={"file-string-length"}><b>file-string-length</b></DictionaryLink>, <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> 



**Notes:** 



Implementations that have character files represented as a sequence of records of bounded size might choose to encode the file position as, for example, ⟨record-number ⟩\*⟨max-record size⟩+⟨character-within-record⟩. This is a valid encoding because it increases monotonically as each character is read or written, though not necessarily by 1 at each step. An *integer* might then be considered “inappropriate” as *position-spec* to <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> if, when decoded into record number and character number, it turned out that the supplied record was too short for the specified character number. 



