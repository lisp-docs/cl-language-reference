**make-two-way-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink> *input-stream output-stream → two-way-stream* 



**Arguments and Values:** 



*input-stream*—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*output-stream*—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*two-way-stream*—a *two-way stream*. 



**Description:** 



Returns a *two-way stream* that gets its input from *input-stream* and sends its output to *output-stream*. 



**Examples:**
```lisp

(with-output-to-string (out) 
  (with-input-from-string (in "input...") 
    (let ((two (make-two-way-stream in out))) 
      (format two "output...") 
      (setq what-is-read (read two))))) *→* "output..." 
what-is-read *→* INPUT... 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *input-stream* is not an *input stream*. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *output-stream* is not an *output stream*. 







 



 



<b><sup>two-way-stream-input-stream, two-way-stream</sup> output-stream</b> <i>Function</i> 



**Syntax:** 



**two-way-stream-input-stream** *two-way-stream → input-stream* 



**two-way-stream-output-stream** *two-way-stream → output-stream* 



**Arguments and Values:** 



*two-way-stream*—a *two-way stream*. 



*input-stream*—an *input stream*. 



*output-stream*—an *output stream*. 



**Description:** 



**two-way-stream-input-stream** returns the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> from which *two-way-stream* receives input. **two-way-stream-output-stream** returns the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to which *two-way-stream* sends output. 



<b><sup>echo-stream-input-stream, echo-stream-output</sup> stream</b> <i>Function</i> 



**Syntax:** 



**echo-stream-input-stream** *echo-stream → input-stream* 



**echo-stream-output-stream** *echo-stream → output-stream* 



**Arguments and Values:** 



*echo-stream*—an *echo stream*. 



*input-stream*—an *input stream*. 



**output-stream**—an *output stream*. 



**Description:** 



**echo-stream-input-stream** returns the *input stream* from which *echo-stream* receives input. **echo-stream-output-stream** returns the *output stream* to which *echo-stream* sends output. 







 



 



