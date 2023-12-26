**finish-output, force-output, clear-output** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"finish-output"}><b>finish-output</b></ClLinks> &amp;optional *output-stream →* <ClLinks  term={"nil"}><b>nil</b></ClLinks> 



<ClLinks  term={"force-output"}><b>force-output</b></ClLinks> &amp;optional *output-stream →* <ClLinks  term={"nil"}><b>nil</b></ClLinks> 



<ClLinks  term={"clear-output"}><b>clear-output</b></ClLinks> &amp;optional *output-stream →* <ClLinks  term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*output-stream*—an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"finish-output"}><b>finish-output</b></ClLinks>, <ClLinks  term={"force-output"}><b>force-output</b></ClLinks>, and <ClLinks  term={"clear-output"}><b>clear-output</b></ClLinks> exercise control over the internal handling of buffered stream output. 



<ClLinks  term={"finish-output"}><b>finish-output</b></ClLinks> attempts to ensure that any buffered output sent to *output-stream* has reached its destination, and then returns. 



<ClLinks  term={"force-output"}><b>force-output</b></ClLinks> initiates the emptying of any internal buffers but does not wait for completion or acknowledgment to return. 



<ClLinks  term={"clear-output"}><b>clear-output</b></ClLinks> attempts to abort any outstanding output operation in progress in order to allow as little output as possible to continue to the destination. 



If any of these operations does not make sense for *output-stream*, then it does nothing. The precise actions of these <ClLinks  term={"function"}><i>functions</i></ClLinks> are <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 







 



 



**Examples:**
```lisp
;; Implementation A 
(progn (princ "am i seen?") (clear-output)) 
→ NIL 
;; Implementation B 
(progn (princ "am i seen?") (clear-output)) 
▷ am i seen? 
→ NIL 
```
**Affected By:** 



**\*standard-output\*** 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *output-stream* is not a <GlossaryTerm styled={true} term={"stream designator"}><i>stream designator</i></GlossaryTerm> . 



**See Also:** 



<ClLinks  term={"clear-input"}><b>clear-input</b></ClLinks> 



