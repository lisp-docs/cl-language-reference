**make-echo-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink> *input-stream output-stream → echo-stream* 



**Arguments and Values:** 



*input-stream*—an *input stream*. 



*output-stream*—an *output stream*. 



*echo-stream*—an *echo stream*. 



**Description:** 



Creates and returns an *echo stream* that takes input from *input-stream* and sends output to *output-stream*. 



**Examples:**
```lisp

(let ((out (make-string-output-stream))) 
  (with-open-stream 
      (s (make-echo-stream 
	  (make-string-input-stream "this-is-read-and-echoed") 
	  out)) 
    (read s) 
    (format s " \* this-is-direct-output") 
    (get-output-stream-string out))) 
*→* "this-is-read-and-echoed \* this-is-direct-output" 

```
**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, **make-two-way-stream concatenated-stream-streams** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**concatenated-stream-streams** *concatenated-stream → streams* 



**Arguments and Values:** 



*concatenated-stream* – a *concatenated stream*. 



<GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *input streams*. 







 



 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *input streams* that constitute the ordered set of <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> the *concatenated-stream* still has to read from, starting with the current one it is reading from. The list may be *empty* if no more <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> remain to be read. 



The consequences are undefined if the *list structure* of the <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> is ever modified. 