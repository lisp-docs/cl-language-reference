**stream-element-type**. **stream-external-format** *Function* 



**Syntax:** 



**stream-external-format** *stream → format* 



**Arguments and Values:** 



*stream*—a *file stream*. 



*format*—an *external file format*. 



**Description:** 



Returns an *external file format designator* for the *stream*. 



**Examples:**
```lisp
 



(with-open-file (stream "test" :direction :output) 







 



 



(stream-external-format stream)) 



*→* :DEFAULT 



<i><sup>or</sup>→</i> :ISO8859/1-1987 



<i><sup>or</sup>→</i> (:ASCII :SAIL) 



<i><sup>or</sup>→</i> ACME::PROPRIETARY-FILE-FORMAT-17 



<i><sup>or</sup>→</i> #<FILE-FORMAT :ISO646-1983 2343673> 




```
**See Also:** 



the :external-format *argument* to the *function* **open** and the **with-open-file** *macro*. 



**Notes:** 



The *format* returned is not necessarily meaningful to other *implementations*. 



**with-open-file** *macro* 



**Syntax:** 



**with-open-file** (*stream filespec \&#123;options\&#125;*\*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* 



*→ results* 



**Arguments and Values:** 



*stream* – a variable. 



*filespec*—a *pathname designator* . 



*options* – *forms*; evaluated. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



**with-open-file** uses **open** to create a *file stream* to *file* named by *filespec*. *Filespec* is the name of the file to be opened. *Options* are used as keyword arguments to **open**. 



The *stream object* to which the *stream variable* is *bound* has *dynamic extent*; its *extent* ends when the *form* is exited. 



**with-open-file** evaluates the *forms* as an *implicit progn* with *stream* bound to the value returned by **open**. 



When control leaves the body, either normally or abnormally (such as by use of **throw**), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened. 







 



 



**with-open-file** 



It is possible by the use of :if-exists nil or :if-does-not-exist nil for *stream* to be bound to **nil**. Users of :if-does-not-exist nil should check for a valid *stream*. 



The consequences are undefined if an attempt is made to *assign* the *stream variable*. The compiler may choose to issue a warning if such an attempt is detected. 



**Examples:**
```lisp
 



(setq p (merge-pathnames "test")) 



*→* #\<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY *directory-name* 



:NAME "test" :TYPE NIL :VERSION :NEWEST> 



(with-open-file (s p :direction :output :if-exists :supersede) 



(format s "Here are a couple&#126;%of test data lines&#126;%")) *→* NIL 



(with-open-file (s p) 



(do ((l (read-line s) (read-line s nil ’eof))) 



((eq l ’eof) "Reached end of file.") 



(format t "&#126;&amp;\*\*\* &#126;A&#126;%" l))) 



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



Creates a *stream* to the *file* named by *filename* (upon entry), and closes the *stream* (upon exit). In some *implementations*, the *file* might be locked in some way while it is open. If the *stream* is an *output stream*, a *file* might be created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



See the *function* **open**. 







 



 



**See Also:** 



