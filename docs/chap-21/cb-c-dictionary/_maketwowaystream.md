**make-two-way-stream** *Function* 

**Syntax:** 

**make-two-way-stream** *input-stream output-stream → two-way-stream* 

**Arguments and Values:** 

*input-stream*—a *stream*. 

*output-stream*—a *stream*. 

*two-way-stream*—a *two-way stream*. 

**Description:** 

Returns a *two-way stream* that gets its input from *input-stream* and sends its output to *output-stream*. 

**Examples:** 

(with-output-to-string (out) 

(with-input-from-string (in "input...") 

(let ((two (make-two-way-stream in out))) 

(format two "output...") 

(setq what-is-read (read two))))) *→* "output..." 

what-is-read *→* INPUT... 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if *input-stream* is not an *input stream*. Should signal an error of *type* **type-error** if *output-stream* is not an *output stream*. 



 

 

&#60;b&#62;&#60;sup&#62;two-way-stream-input-stream, two-way-stream&#60;/sup&#62; output-stream&#60;/b&#62; &#60;i&#62;Function&#60;/i&#62; 

**Syntax:** 

**two-way-stream-input-stream** *two-way-stream → input-stream* 

**two-way-stream-output-stream** *two-way-stream → output-stream* 

**Arguments and Values:** 

*two-way-stream*—a *two-way stream*. 

*input-stream*—an *input stream*. 

*output-stream*—an *output stream*. 

**Description:** 

**two-way-stream-input-stream** returns the *stream* from which *two-way-stream* receives input. **two-way-stream-output-stream** returns the *stream* to which *two-way-stream* sends output. 

&#60;b&#62;&#60;sup&#62;echo-stream-input-stream, echo-stream-output&#60;/sup&#62; stream&#60;/b&#62; &#60;i&#62;Function&#60;/i&#62; 

**Syntax:** 

**echo-stream-input-stream** *echo-stream → input-stream* 

**echo-stream-output-stream** *echo-stream → output-stream* 

**Arguments and Values:** 

*echo-stream*—an *echo stream*. 

*input-stream*—an *input stream*. 

**output-stream**—an *output stream*. 

**Description:** 

**echo-stream-input-stream** returns the *input stream* from which *echo-stream* receives input. **echo-stream-output-stream** returns the *output stream* to which *echo-stream* sends output. 



 

 

