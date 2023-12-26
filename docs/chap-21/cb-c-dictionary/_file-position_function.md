**file-position** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> *stream → position* 



<DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> *stream position-spec → success-p* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*position-spec*—a <GlossaryTerm styled={true} term={"file position designator"}><i>file position designator</i></GlossaryTerm> . 



*position*—a <GlossaryTerm styled={true} term={"file position"}><i>file position</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*success-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns or changes the current position within a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



When *position-spec* is not supplied, <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> returns the current <GlossaryTerm styled={true} term={"file position"}><i>file position</i></GlossaryTerm> in the <ClLinks  term={"stream"}><i>stream</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if this cannot be determined. 



When *position-spec* is supplied, the <GlossaryTerm styled={true} term={"file position"}><i>file position</i></GlossaryTerm> in <ClLinks  term={"stream"}><i>stream</i></ClLinks> is set to that <GlossaryTerm styled={true} term={"file position"}><i>file position</i></GlossaryTerm> (if possible). <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the repositioning is performed successfully, or <ClLinks  term={"false"}><i>false</i></ClLinks> if it is not. 



An *integer* returned by <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> of one argument should be acceptable as *position-spec* for use with the same file. 



For a character file, performing a single <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> or <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> operation may cause the file position to be increased by more than 1 because of character-set translations (such as translating between the Common Lisp #\Newline character and an external ASCII carriage-return/line-feed 







 



 



<DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> 



sequence) and other aspects of the implementation. For a binary file, every <DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink> or <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink> operation increases the file position by 1. 



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



When the *position-spec* argument is supplied, the <GlossaryTerm styled={true} term={"file position"}><i>file position</i></GlossaryTerm> in the <ClLinks  term={"stream"}><i>stream</i></ClLinks> might be moved. 



**Affected By:** 



The value returned by <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> increases monotonically as input or output operations are performed. 







 



 



**Exceptional Situations:** 



If *position-spec* is supplied, but is too large or otherwise inappropriate, an error is signaled. 



**See Also:** 



<DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink>, <DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 



**Notes:** 



Implementations that have character files represented as a sequence of records of bounded size might choose to encode the file position as, for example, ⟨record-number ⟩\*⟨max-record size⟩+⟨character-within-record⟩. This is a valid encoding because it increases monotonically as each character is read or written, though not necessarily by 1 at each step. An *integer* might then be considered “inappropriate” as *position-spec* to <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> if, when decoded into record number and character number, it turned out that the supplied record was too short for the specified character number. 



