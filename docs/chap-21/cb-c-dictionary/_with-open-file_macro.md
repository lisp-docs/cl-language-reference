**with-open-file** <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> (*stream filespec \{options\}*\*) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ results* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> – a variable. 



*filespec*—a *pathname designator* . 



*options* – <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> uses <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> to create a *file stream* to <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by *filespec*. *Filespec* is the name of the file to be opened. *Options* are used as keyword arguments to <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>. 



The *stream object* to which the *stream variable* is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> has *dynamic extent*; its <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is exited. 



<DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> evaluates the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> as an *implicit progn* with <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> bound to the value returned by <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>. 



When control leaves the body, either normally or abnormally (such as by use of <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened. 







 



 



<DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> 



It is possible by the use of :if-exists nil or :if-does-not-exist nil for <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to be bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Users of :if-does-not-exist nil should check for a valid <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



The consequences are undefined if an attempt is made to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the *stream variable*. The compiler may choose to issue a warning if such an attempt is detected. 



**Examples:**
```lisp

(setq p (merge-pathnames "test")) 
*→* #<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY *directory-name* 
:NAME "test" :TYPE NIL :VERSION :NEWEST> 
(with-open-file (s p :direction :output :if-exists :supersede) 
  (format s "Here are a couple~%of test data lines~%")) *→* NIL 
(with-open-file (s p) 
  (do ((l (read-line s) (read-line s nil ’eof))) 
      ((eq l ’eof) "Reached end of file.") 
    (format t "~&\*\*\* ~A~%" l))) 
▷ \*\*\* Here are a couple 
▷ \*\*\* of test data lines 
*→* "Reached end of file." 
;; Normally one would not do this intentionally because it is 
;; not perspicuous, but beware when using :IF-DOES-NOT-EXIST NIL 
;; that this doesn’t happen to you accidentally... 
(with-open-file (foo "no-such-file" :if-does-not-exist nil) 
  (read foo)) 
▷ hello? 
*→* HELLO? ;This value was read from the terminal, not a file! 
;; Here’s another bug to avoid... 
(with-open-file (foo "no-such-file" :direction :output :if-does-not-exist nil) (format foo "Hello")) 
*→* "Hello" ;FORMAT got an argument of NIL! 

```
**Side Effects:** 



Creates a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> (upon entry), and closes the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (upon exit). In some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> might be locked in some way while it is open. If the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *output stream*, a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> might be created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 