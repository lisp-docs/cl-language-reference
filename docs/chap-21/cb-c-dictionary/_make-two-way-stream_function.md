**make-two-way-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink> *input-stream output-stream → two-way-stream* 



**Arguments and Values:** 



*input-stream*—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*output-stream*—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*two-way-stream*—a <GlossaryTerm styled={true} term={"two-way stream"}><i>two-way stream</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"two-way stream"}><i>two-way stream</i></GlossaryTerm> that gets its input from *input-stream* and sends its output to *output-stream*. 



**Examples:**
```lisp
(with-output-to-string (out) 
  (with-input-from-string (in "input...") 
    (let ((two (make-two-way-stream in out))) 
      (format two "output...") 
      (setq what-is-read (read two))))) → "output..." 
what-is-read → INPUT... 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *input-stream* is not an *input stream*. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *output-stream* is not an *output stream*. 







 



 



<b><sup>two-way-stream-input-stream, two-way-stream</sup> output-stream</b> <i>Function</i> 



**Syntax:** 



**two-way-stream-input-stream** *two-way-stream → input-stream* 



**two-way-stream-output-stream** *two-way-stream → output-stream* 



**Arguments and Values:** 



*two-way-stream*—a <GlossaryTerm styled={true} term={"two-way stream"}><i>two-way stream</i></GlossaryTerm>. 



*input-stream*—an *input stream*. 



*output-stream*—an *output stream*. 



**Description:** 



**two-way-stream-input-stream** returns the <ClLinks  term={"stream"}><i>stream</i></ClLinks> from which *two-way-stream* receives input. **two-way-stream-output-stream** returns the <ClLinks  term={"stream"}><i>stream</i></ClLinks> to which *two-way-stream* sends output. 



<b><sup>echo-stream-input-stream, echo-stream-output</sup> stream</b> <i>Function</i> 



**Syntax:** 



**echo-stream-input-stream** *echo-stream → input-stream* 



**echo-stream-output-stream** *echo-stream → output-stream* 



**Arguments and Values:** 



*echo-stream*—an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm>. 



*input-stream*—an *input stream*. 



**output-stream**—an *output stream*. 



**Description:** 



**echo-stream-input-stream** returns the *input stream* from which *echo-stream* receives input. **echo-stream-output-stream** returns the *output stream* to which *echo-stream* sends output. 







 



 



