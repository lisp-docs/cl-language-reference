**with-open-file** <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> (*stream filespec \{options\}*\*) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ results 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> – a variable. 



*filespec*—a *pathname designator* . 



*options* – <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> uses <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> to create a *file stream* to <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *filespec*. *Filespec* is the name of the file to be opened. *Options* are used as keyword arguments to <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. 



The *stream object* to which the *stream variable* is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> has *dynamic extent*; its <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is exited. 



<ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> evaluates the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> as an *implicit progn* with <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> bound to the value returned by <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. 



When control leaves the body, either normally or abnormally (such as by use of <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened. 







 



 



<ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> 



It is possible by the use of :if-exists nil or :if-does-not-exist nil for <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to be bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Users of :if-does-not-exist nil should check for a valid <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



The consequences are undefined if an attempt is made to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the *stream variable*. The compiler may choose to issue a warning if such an attempt is detected. 



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



Creates a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> (upon entry), and closes the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (upon exit). In some <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>, the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> might be locked in some way while it is open. If the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is an *output stream*, a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> might be created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks>, <ClLinks styled={true} term={"close"}><b>close</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 19.1.2 (Pathnames as Filenames) 