**make-broadcast-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks> &amp;rest *streams → broadcast-stream* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—an *output stream*. 



*broadcast-stream*—a <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm>. 



**Examples:**
```lisp
(setq a-stream (make-string-output-stream) 
      b-stream (make-string-output-stream)) → #<String Output Stream> 
(format (make-broadcast-stream a-stream b-stream) 
	"this will go to both streams") → NIL 
(get-output-stream-string a-stream) → "this will go to both streams" 

(get-output-stream-string b-stream) → "this will go to both streams" 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if any <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not an *output stream*. 



**See Also:** 



<ClLinks  term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></ClLinks> 



