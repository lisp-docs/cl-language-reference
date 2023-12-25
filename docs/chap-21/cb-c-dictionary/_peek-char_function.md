**peek-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> **Syntax:** 



<DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> &amp;optional *peek-type input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



*peek-type*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*→ char* 



*input-stream*—*input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or the *eof-value*. 



**Description:** 



<DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> obtains the next character in *input-stream* without actually reading it, thus leaving the character to be read at a later time. It can also be used to skip over and discard intervening characters in the *input-stream* until a particular character is found. 



If *peek-type* is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> returns the next character to be read from *input-stream*, without actually removing it from *input-stream*. The next time input is done from *input-stream*, the character will still be there. If *peek-type* is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, then <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> skips over <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, but not comments, and then performs the peeking operation on the next character. The last character examined, the one that starts an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, is not removed from *input-stream*. If *peek-type* is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , then <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> skips over input characters until a character that is <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink> to that <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is found; that character is left in *input-stream*. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, *eof-value* is returned. 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



When *input-stream* is an *echo stream*, characters that are only peeked at are not echoed. In the case that *peek-type* is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the characters that are passed by <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> are treated as if by <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, and so are echoed unless they have been marked otherwise by <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>. 



**Examples:**
```lisp

(with-input-from-string (input-stream " 1 2 3 4 5") 
  (format t "~S ~S ~S" 
	  (peek-char t input-stream) 

	  
	  
	  (peek-char #\4 input-stream) 
	  (peek-char nil input-stream))) 
▷ #\1 #\4 #\4 
*→* NIL 

```
**Affected By:** 



<DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, **\*standard-input\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and an *end of file*<sub>2</sub> occurs an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



If *peek-type* is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , an *end of file*<sub>2</sub> occurs, and *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and an *end of file*<sub>2</sub> occurs, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 