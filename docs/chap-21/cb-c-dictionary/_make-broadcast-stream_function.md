**make-broadcast-stream** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink> &amp;rest *streams → broadcast-stream* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream*. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if any <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not an *output stream*. 



**See Also:** 



<DictionaryLink  term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></DictionaryLink> 



