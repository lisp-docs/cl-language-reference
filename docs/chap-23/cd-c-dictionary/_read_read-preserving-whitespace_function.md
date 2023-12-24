**read, read-preserving-whitespace** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p → object* 



<ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> &amp;optional *input-stream eof-error-p* 



*eof-value recursive-p* 



→ object 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (parsed by the *Lisp reader* ) or the *eof-value*. 



**Description:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> parses the printed representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from *input-stream* and builds such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> is like <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> but preserves any <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that delimits the printed representation of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> is exactly like <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> when the *recursive-p argument* to <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 







 



 



**read, read-preserving-whitespace** 



When <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> throws away the delimiting <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> required by certain printed representations if it is a <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; but <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> preserves the character (using <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks>) if it is syntactically meaningful, because it could be the start of the next expression. 



If a file ends in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> immediately followed by an *end of file*<sub>1</sub>, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> reads the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> successfully; when called again, it sees the *end of file*<sub>1</sub> and only then acts according to *eof-error-p*. If a file contains ignorable text at the end, such as blank lines and comments, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> does not consider it to end in the middle of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> is expected to be made from within some function that itself has been called from <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or from a similar input function, rather than from the top level. 



Both functions return the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> read from *input-stream*. *Eof-value* is returned if *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and end of file is reached before the beginning of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Examples:**
```lisp

(read) 
▷ ’a 
→ (QUOTE A) 
(with-input-from-string (is " ") (read is nil ’the-end)) → THE-END 
(defun skip-then-read-char (s c n) 
  (if (char= c #\\&#123;) (read s t nil t) (read-preserving-whitespace s)) 
	     (read-char-no-hang s)) → SKIP-THEN-READ-CHAR 
	     (let ((\*readtable\* (copy-readtable nil))) 
	       (set-dispatch-macro-character #\# #\\&#123; #’skip-then-read-char) 
					     (set-dispatch-macro-character #\# #\\&#125; #’skip-then-read-char) 
									   (with-input-from-string (is "#\&#123;123 x #\&#125;123 y") 
									     (format t "~S ~S" (read is) (read is)))) → #\x, #\Space, NIL 
					     As an example, consider this *reader macro* definition: 
					     (defun slash-reader (stream char) 
					       (declare (ignore char)) 
					       ‘(path . ,(loop for dir = (read-preserving-whitespace stream t nil t) 
							       then (progn (read-char stream t nil t) 
									   (read-preserving-whitespace stream t nil t)) 
							       collect dir 
							       while (eql (peek-char nil stream nil nil t) #\/)))) 
					     (set-macro-character #\/ #’slash-reader) 
					     Consider now calling **read** on this expression: 
					     (zyedh /usr/games/zork /usr/games/boggle) 
					     The / macro reads objects separated by more / characters; thus /usr/games/zork is intended to read as (path usr games zork). The entire example expression should therefore be read as 

					     
					     
					     (zyedh (path usr games zork) (path usr games boggle)) 
					     However, if **read** had been used instead of **read-preserving-whitespace**, then after the reading of the symbol zork, the following space would be discarded; the next call to **peek-char** would see the following /, and the loop would continue, producing this interpretation: 
					     (zyedh (path usr games zork usr games boggle)) 
					     There are times when *whitespace*<sub>2</sub> <sup>should be discarded. If a command interpreter takes single</sup> character commands, but occasionally reads an *object* then if the *whitespace*<sub>2</sub> after a *symbol* is not discarded it might be interpreted as a command some time later after the *symbol* had been read. 

```
**Affected By:** 



**\*standard-input\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks>, <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks>, **\*read-base\***, <ClLinks styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></ClLinks>, <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks>, **\*read-eval\***. 



**Exceptional Situations:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks>, regardless of *eof-error-p*, if the file ends in the middle of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> signals an error. This is detected when <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> is called with *recursive-p* and *eof-error-p non-nil*, and end-of-file is reached before the beginning of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



If *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled at the end of file. 



**See Also:** 



<ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks>, <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks>, <ClLinks styled={true} term={"read-from-string"}><b>read-from-string</b></ClLinks>, <ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks>, <ClLinks styled={true} term={"parse-integer"}><b>parse-integer</b></ClLinks>, Chapter 2 (Syntax), Section 23.1 (Reader Concepts) 



