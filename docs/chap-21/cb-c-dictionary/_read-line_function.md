**read-line** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-line"}><b>read-line</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



*→ line, missing-newline-p* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*line*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or the *eof-value*. 



*missing-newline-p*—a *generalized boolean*. 



**Description:** 



Reads from *input-stream* a line of text that is terminated by a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> or *end of file*. 



If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or a similar <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



The *primary value*, *line*, is the line that is read, represented as a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> (without the trailing <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>, if any). If *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and the *end of file* for *input-stream* is reached before any <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are read, *eof-value* is returned as the *line*. 



The *secondary value*, *missing-newline-p*, is a *generalized boolean* that is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if the *line* was terminated by a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>, or <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the *line* was terminated by the *end of file* for *input-stream* (or if the *line* is the *eof-value*). 



**Examples:**
```lisp

(setq a "line 1 
line2") 
→ "line 1 
line2" 
(read-line (setq input-stream (make-string-input-stream a))) 
→ "line 1", *false* 
(read-line input-stream) 
→ "line2", *true* 
(read-line input-stream nil nil) 
→ NIL, *true* 




```
**Affected By:** 



**\*standard-input\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before any characters are read in the line, an error is signaled if *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> 



**Notes:** 



The corresponding output function is <ClLinks styled={true} term={"write-line"}><b>write-line</b></ClLinks>. 



