**make-synonym-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink> *symbol → synonym-stream* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *dynamic variable*. 



*synonym-stream*—a *synonym stream*. 



**Description:** 



Returns a *synonym stream* whose *synonym stream symbol* is <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq a-stream (make-string-input-stream "a-stream") 
      b-stream (make-string-input-stream "b-stream")) 
*→* #<String Input Stream> 
(setq s-stream (make-synonym-stream ’c-stream)) 
*→* #<SYNONYM-STREAM for C-STREAM> 
(setq c-stream a-stream) 
*→* #<String Input Stream> 
(read s-stream) *→* A-STREAM 
(setq c-stream b-stream) 
*→* #<String Input Stream> 
(read s-stream) *→* B-STREAM 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



