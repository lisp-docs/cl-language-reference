**make-concatenated-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks> &amp;rest *input-streams → concatenated-stream* 



**Arguments and Values:** 



*input-stream*—an *input stream*. 



*concatenated-stream*—a <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> that has the indicated *input-streams* initially associated with it. 

**Examples:**
```lisp
(read (make-concatenated-stream 
       (make-string-input-stream "1") 
       (make-string-input-stream "2"))) → 12 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if any argument is not an *input stream*. 



**See Also:** 



**concatenated-stream-streams** 







 



 



