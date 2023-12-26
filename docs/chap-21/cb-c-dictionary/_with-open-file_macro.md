**with-open-file** <ClLinks  term={"macro"}><i>macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> (*stream filespec \{options\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ results 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks> – a variable. 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*options* – <ClLinks  term={"form"}><i>forms</i></ClLinks>; evaluated. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> uses <ClLinks  term={"open"}><b>open</b></ClLinks> to create a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> to <ClLinks  term={"file"}><i>file</i></ClLinks> named by *filespec*. *Filespec* is the name of the file to be opened. *Options* are used as keyword arguments to <ClLinks  term={"open"}><b>open</b></ClLinks>. 



The *stream object* to which the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <ClLinks  term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks  term={"form"}><i>form</i></ClLinks> is exited. 



<ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> evaluates the <ClLinks  term={"form"}><i>forms</i></ClLinks> as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm> with <ClLinks  term={"stream"}><i>stream</i></ClLinks> bound to the value returned by <ClLinks  term={"open"}><b>open</b></ClLinks>. 



When control leaves the body, either normally or abnormally (such as by use of <ClLinks  term={"throw"}><b>throw</b></ClLinks>), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened. 







 



 



<ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> 



It is possible by the use of :if-exists nil or :if-does-not-exist nil for <ClLinks  term={"stream"}><i>stream</i></ClLinks> to be bound to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. Users of :if-does-not-exist nil should check for a valid <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



The consequences are undefined if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm>. The compiler may choose to issue a warning if such an attempt is detected. 



**Examples:**
```lisp
(setq p (merge-pathnames "test")) 
→ #<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY *directory-name* 
:NAME "test" :TYPE NIL :VERSION :NEWEST> 
(with-open-file (s p :direction :output :if-exists :supersede) 
  (format s "Here are a couple~%of test data lines~%")) → NIL 
(with-open-file (s p) 
  (do ((l (read-line s) (read-line s nil ’eof))) 
      ((eq l ’eof) "Reached end of file.") 
    (format t "~&\*\*\* ~A~%" l))) 
▷ \*\*\* Here are a couple 
▷ \*\*\* of test data lines 
→ "Reached end of file." 
;; Normally one would not do this intentionally because it is 
;; not perspicuous, but beware when using :IF-DOES-NOT-EXIST NIL 
;; that this doesn’t happen to you accidentally... 
(with-open-file (foo "no-such-file" :if-does-not-exist nil) 
  (read foo)) 
▷ hello? 
→ HELLO? ;This value was read from the terminal, not a file! 
;; Here’s another bug to avoid... 
(with-open-file (foo "no-such-file" :direction :output :if-does-not-exist nil) (format foo "Hello")) 
→ "Hello" ;FORMAT got an argument of NIL! 
```
**Side Effects:** 



Creates a <ClLinks  term={"stream"}><i>stream</i></ClLinks> to the <ClLinks  term={"file"}><i>file</i></ClLinks> named by <ClLinks  term={"filename"}><i>filename</i></ClLinks> (upon entry), and closes the <ClLinks  term={"stream"}><i>stream</i></ClLinks> (upon exit). In some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>, the <ClLinks  term={"file"}><i>file</i></ClLinks> might be locked in some way while it is open. If the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *output stream*, a <ClLinks  term={"file"}><i>file</i></ClLinks> might be created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"open"}><b>open</b></ClLinks>. 







 



 



**See Also:** 



<ClLinks  term={"open"}><b>open</b></ClLinks>, <ClLinks  term={"close"}><b>close</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 19.1.2 (Pathnames as Filenames) 