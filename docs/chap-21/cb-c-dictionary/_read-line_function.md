**read-line** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-line"}><b>read-line</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



*→ line, missing-newline-p* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*line*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or the *eof-value*. 



*missing-newline-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Reads from *input-stream* a line of text that is terminated by a <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm>. 



If *recursive-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, *line*, is the line that is read, represented as a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> (without the trailing <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm>, if any). If *eof-error-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> for *input-stream* is reached before any <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are read, *eof-value* is returned as the *line*. 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *missing-newline-p*, is a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if the *line* was terminated by a <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm>, or <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the *line* was terminated by the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> for *input-stream* (or if the *line* is the *eof-value*). 



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



**\*standard-input\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs before any characters are read in the line, an error is signaled if *eof-error-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink> 



**Notes:** 



The corresponding output function is <DictionaryLink  term={"write-line"}><b>write-line</b></DictionaryLink>. 



