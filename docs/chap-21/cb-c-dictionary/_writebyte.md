**write-byte** *Function* 



**Syntax:** 



**write-byte** *byte stream → byte* 



**Arguments and Values:** 



*byte*—an *integer* of the *stream element type* of *stream*. 



*stream*—a *binary output stream*. 



**Description:** 



**write-byte** writes one byte, *byte*, to *stream*. 



**Examples:**
```lisp
 



(with-open-file (s "temp-bytes" 



:direction :output 



:element-type ’unsigned-byte) 



(write-byte 101 s)) *→* 101 




```
**Side Effects:** 



*stream* is modified. 



**Affected By:** 



The *element type* of the *stream*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *stream* is not a *stream*. Should signal an error of *type* **error** if *stream* is not a *binary output stream*. 



Might signal an error of *type* **type-error** if *byte* is not an *integer* of the *stream element type* of *stream*. 



**See Also:** 



**read-byte**, **write-char**, **write-sequence** 







 



 



**peek-char** 



**peek-char** *Function* **Syntax:** 



**peek-char** &optional *peek-type input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



*peek-type*—a *character* or **t** or **nil**. 



*→ char* 



*input-stream*—*input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*recursive-p*—a *generalized boolean*. The default is *false*. 



*char*—a *character* or the *eof-value*. 



**Description:** 



**peek-char** obtains the next character in *input-stream* without actually reading it, thus leaving the character to be read at a later time. It can also be used to skip over and discard intervening characters in the *input-stream* until a particular character is found. 



If *peek-type* is not supplied or **nil**, **peek-char** returns the next character to be read from *input-stream*, without actually removing it from *input-stream*. The next time input is done from *input-stream*, the character will still be there. If *peek-type* is **t**, then **peek-char** skips over *whitespace*<sub>2</sub> *characters*, but not comments, and then performs the peeking operation on the next character. The last character examined, the one that starts an *object*, is not removed from *input-stream*. If *peek-type* is a *character* , then **peek-char** skips over input characters until a character that is **char=** to that *character* is found; that character is left in *input-stream*. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is *false*, *eof-value* is returned. 



If *recursive-p* is *true*, this call is expected to be embedded in a higher-level call to **read** or a similar *function* used by the *Lisp reader* . 



When *input-stream* is an *echo stream*, characters that are only peeked at are not echoed. In the case that *peek-type* is not **nil**, the characters that are passed by **peek-char** are treated as if by **read-char**, and so are echoed unless they have been marked otherwise by **unread-char**. 



**Examples:** 



(with-input-from-string (input-stream " 1 2 3 4 5") 



(format t "~S ~S ~S" 



(peek-char t input-stream) 







 



 



(peek-char #\4 input-stream) 



(peek-char nil input-stream))) 



▷ #\1 #\4 #\4 



*→* NIL 



**Affected By:** 



**\*readtable\***, **\*standard-input\***, **\*terminal-io\***. 



**Exceptional Situations:** 



If *eof-error-p* is *true* and an *end of file*<sub>2</sub> occurs an error of *type* **end-of-file** is signaled. 



If *peek-type* is a *character* , an *end of file*<sub>2</sub> occurs, and *eof-error-p* is *true*, an error of *type* **end-of-file** is signaled. 



If *recursive-p* is *true* and an *end of file*<sub>2</sub> occurs, an error of *type* 