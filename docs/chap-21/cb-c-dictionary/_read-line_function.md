**read-line** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



*→ line, missing-newline-p* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*line*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or the *eof-value*. 



*missing-newline-p*—a *generalized boolean*. 



**Description:** 



Reads from *input-stream* a line of text that is terminated by a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> or *end of file*. 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



The *primary value*, *line*, is the line that is read, represented as a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> (without the trailing <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>, if any). If *eof-error-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and the *end of file* for *input-stream* is reached before any <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are read, *eof-value* is returned as the *line*. 



The *secondary value*, *missing-newline-p*, is a *generalized boolean* that is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if the *line* was terminated by a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the *line* was terminated by the *end of file* for *input-stream* (or if the *line* is the *eof-value*). 



**Examples:**
```lisp

(setq a "line 1 
line2") 
*→* "line 1 
line2" 
(read-line (setq input-stream (make-string-input-stream a))) 
*→* "line 1", *false* 
(read-line input-stream) 
*→* "line2", *true* 
(read-line input-stream nil nil) 
*→* NIL, *true* 




```
**Affected By:** 



**\*standard-input\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before any characters are read in the line, an error is signaled if *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> 



**Notes:** 



The corresponding output function is <DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink>. 



