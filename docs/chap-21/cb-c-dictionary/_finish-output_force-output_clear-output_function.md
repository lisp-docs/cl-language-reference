**finish-output, force-output, clear-output** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"finish-output"}><b>finish-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink styled={true} term={"force-output"}><b>force-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink styled={true} term={"clear-output"}><b>clear-output</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*output-stream*—an *output stream designator* . The default is *standard output*. 



**Description:** 



<DictionaryLink styled={true} term={"finish-output"}><b>finish-output</b></DictionaryLink>, <DictionaryLink styled={true} term={"force-output"}><b>force-output</b></DictionaryLink>, and <DictionaryLink styled={true} term={"clear-output"}><b>clear-output</b></DictionaryLink> exercise control over the internal handling of buffered stream output. 



<DictionaryLink styled={true} term={"finish-output"}><b>finish-output</b></DictionaryLink> attempts to ensure that any buffered output sent to *output-stream* has reached its destination, and then returns. 



<DictionaryLink styled={true} term={"force-output"}><b>force-output</b></DictionaryLink> initiates the emptying of any internal buffers but does not wait for completion or acknowledgment to return. 



<DictionaryLink styled={true} term={"clear-output"}><b>clear-output</b></DictionaryLink> attempts to abort any outstanding output operation in progress in order to allow as little output as possible to continue to the destination. 



If any of these operations does not make sense for *output-stream*, then it does nothing. The precise actions of these <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

;; Implementation A 
(progn (princ "am i seen?") (clear-output)) 
*→* NIL 
;; Implementation B 
(progn (princ "am i seen?") (clear-output)) 
▷ am i seen? 
*→* NIL 

```
**Affected By:** 



**\*standard-output\*** 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *output-stream* is not a *stream designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"clear-input"}><b>clear-input</b></DictionaryLink> 



