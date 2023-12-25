**peek-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> **Syntax:** 



<ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> &amp;optional *peek-type input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



*peek-type*—a <ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"t"}><b>t</b></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



→ char 



*input-stream*—*input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> or the *eof-value*. 



**Description:** 



<ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> obtains the next character in *input-stream* without actually reading it, thus leaving the character to be read at a later time. It can also be used to skip over and discard intervening characters in the *input-stream* until a particular character is found. 



If *peek-type* is not supplied or <ClLinks  term={"nil"}><b>nil</b></ClLinks>, <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> returns the next character to be read from *input-stream*, without actually removing it from *input-stream*. The next time input is done from *input-stream*, the character will still be there. If *peek-type* is <ClLinks  term={"t"}><b>t</b></ClLinks>, then <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> skips over <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>characters</i></ClLinks>, but not comments, and then performs the peeking operation on the next character. The last character examined, the one that starts an <ClLinks  term={"object"}><i>object</i></ClLinks>, is not removed from *input-stream*. If *peek-type* is a <ClLinks  term={"character"}><i>character</i></ClLinks> , then <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> skips over input characters until a character that is <ClLinks  term={"char="}><b>char=</b></ClLinks> to that <ClLinks  term={"character"}><i>character</i></ClLinks> is found; that character is left in *input-stream*. 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks  term={"read"}><b>read</b></ClLinks> or a similar <ClLinks  term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



When *input-stream* is an *echo stream*, characters that are only peeked at are not echoed. In the case that *peek-type* is not <ClLinks  term={"nil"}><b>nil</b></ClLinks>, the characters that are passed by <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks> are treated as if by <ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, and so are echoed unless they have been marked otherwise by <ClLinks  term={"unread-char"}><b>unread-char</b></ClLinks>. 



**Examples:**
```lisp
(with-input-from-string (input-stream " 1 2 3 4 5") 
  (format t "~S ~S ~S" 
	  (peek-char t input-stream) 
	  
	  
	  (peek-char #\4 input-stream) 
	  (peek-char nil input-stream))) 
▷ #\1 #\4 #\4 
→ NIL 
```
**Affected By:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks>, **\*standard-input\***, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks> and an *end of file*<sub>2</sub> occurs an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



If *peek-type* is a <ClLinks  term={"character"}><i>character</i></ClLinks> , an *end of file*<sub>2</sub> occurs, and *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks> and an *end of file*<sub>2</sub> occurs, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 