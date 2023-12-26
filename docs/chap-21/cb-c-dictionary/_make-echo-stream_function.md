**make-echo-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink> *input-stream output-stream → echo-stream* 



**Arguments and Values:** 



*input-stream*—an *input stream*. 



*output-stream*—an *output stream*. 



*echo-stream*—an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm>. 



**Description:** 



Creates and returns an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm> that takes input from *input-stream* and sends output to *output-stream*. 



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
→ "this-is-read-and-echoed \* this-is-direct-output" 
```
**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, **make-two-way-stream concatenated-stream-streams** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



**concatenated-stream-streams** *concatenated-stream → streams* 



**Arguments and Values:** 



*concatenated-stream* – a <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm>. 



<ClLinks  term={"stream"}><i>streams</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *input streams*. 







 



 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of *input streams* that constitute the ordered set of <ClLinks  term={"stream"}><i>streams</i></ClLinks> the *concatenated-stream* still has to read from, starting with the current one it is reading from. The list may be *empty* if no more <ClLinks  term={"stream"}><i>streams</i></ClLinks> remain to be read. 



The consequences are undefined if the <GlossaryTerm styled={true} term={"list structure"}><i>list structure</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>streams</i></ClLinks> is ever modified. 