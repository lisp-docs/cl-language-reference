**make-broadcast-stream** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks> &amp;rest *streams → broadcast-stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream*. 



*broadcast-stream*—a *broadcast stream*. 



**Description:** 



Returns a *broadcast stream*. 



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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if any <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is not an *output stream*. 



**See Also:** 



<ClLinks styled={true} term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></ClLinks> 



