**make-synonym-stream** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks> *symbol → synonym-stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *dynamic variable*. 



*synonym-stream*—a *synonym stream*. 



**Description:** 



Returns a *synonym stream* whose *synonym stream symbol* is <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



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



Should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



Section 21.1 (Stream Concepts) 



