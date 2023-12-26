**finish-output, force-output, clear-output** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"finish-output"}><b>finish-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink  term={"force-output"}><b>force-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink  term={"clear-output"}><b>clear-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*output-stream*—an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"finish-output"}><b>finish-output</b></DictionaryLink>, <DictionaryLink  term={"force-output"}><b>force-output</b></DictionaryLink>, and <DictionaryLink  term={"clear-output"}><b>clear-output</b></DictionaryLink> exercise control over the internal handling of buffered stream output. 



<DictionaryLink  term={"finish-output"}><b>finish-output</b></DictionaryLink> attempts to ensure that any buffered output sent to *output-stream* has reached its destination, and then returns. 



<DictionaryLink  term={"force-output"}><b>force-output</b></DictionaryLink> initiates the emptying of any internal buffers but does not wait for completion or acknowledgment to return. 



<DictionaryLink  term={"clear-output"}><b>clear-output</b></DictionaryLink> attempts to abort any outstanding output operation in progress in order to allow as little output as possible to continue to the destination. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *output-stream* is not a <GlossaryTerm styled={true} term={"stream designator"}><i>stream designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"clear-input"}><b>clear-input</b></DictionaryLink> 



