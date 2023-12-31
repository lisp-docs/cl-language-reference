**with-open-file** <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> (*stream filespec \{options\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ results 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> – a variable. 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*options* – <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>; evaluated. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> uses <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> to create a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> to <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> named by *filespec*. *Filespec* is the name of the file to be opened. *Options* are used as keyword arguments to <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. 



The *stream object* to which the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm> is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is exited. 



<DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> evaluates the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm> with <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> bound to the value returned by <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. 



When control leaves the body, either normally or abnormally (such as by use of <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened. 







 



 



<DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> 



It is possible by the use of :if-exists nil or :if-does-not-exist nil for <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> to be bound to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Users of :if-does-not-exist nil should check for a valid <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



The consequences are undefined if an attempt is made to <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm>. The compiler may choose to issue a warning if such an attempt is detected. 



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



Creates a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> to the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> named by <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> (upon entry), and closes the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> (upon exit). In some <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm>, the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> might be locked in some way while it is open. If the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an *output stream*, a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> might be created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 