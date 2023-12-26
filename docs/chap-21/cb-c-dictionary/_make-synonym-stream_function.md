**make-synonym-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks> *symbol → synonym-stream* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm>. 



*synonym-stream*—a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"synonym stream symbol"}><i>synonym stream symbol</i></GlossaryTerm> is <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Examples:**
```lisp
(setq a-stream (make-string-input-stream "a-stream") 
      b-stream (make-string-input-stream "b-stream")) 
→ #<String Input Stream> 
(setq s-stream (make-synonym-stream ’c-stream)) 
→ #<SYNONYM-STREAM for C-STREAM> 
(setq c-stream a-stream) 
→ #<String Input Stream> 
(read s-stream) → A-STREAM 
(setq c-stream b-stream) 
→ #<String Input Stream> 
(read s-stream) → B-STREAM 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



