**stream-error-stream** *Function* 

**Syntax:** 

**stream-error-stream** *condition → stream* 

**Arguments and Values:** 

*condition*—a *condition* of *type* **stream-error**. 

*stream*—a *stream*. 

**Description:** 

Returns the offending *stream* of a *condition* of *type* **stream-error**. 

**Examples:** 

(with-input-from-string (s "(FOO") 

(handler-case (read s) 



 

 

(end-of-file (c) 

(format nil "~&End of file on ~S." (stream-error-stream c))))) 

"End of file on #&#60;String Stream&#62;." 

**See Also:** 

**stream-error**, Chapter 9 (Conditions) 

