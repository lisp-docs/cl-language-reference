**read, read-preserving-whitespace** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p → object* 



<DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> &amp;optional *input-stream eof-error-p* 



*eof-value recursive-p* 



→ object 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks> (parsed by the *Lisp reader* ) or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink> parses the printed representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> from *input-stream* and builds such an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is like <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> but preserves any <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> that delimits the printed representation of the <ClLinks  term={"object"}><i>object</i></ClLinks>. <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is exactly like <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> when the *recursive-p argument* to <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks>. 







 



 



<DictionaryLink styled={true} term={"read, read-preserving-whitespace"}><b>read, read-preserving-whitespace</b></DictionaryLink> 



When <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <ClLinks  term={"false"}><i>false</i></ClLinks>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> throws away the delimiting <ClLinks  term={"character"}><i>character</i></ClLinks> required by certain printed representations if it is a <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> ; but <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> preserves the character (using <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink>) if it is syntactically meaningful, because it could be the start of the next expression. 



If a file ends in a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks  term={"number"}><i>number</i></ClLinks> immediately followed by an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>1</sub>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> reads the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks  term={"number"}><i>number</i></ClLinks> successfully; when called again, it sees the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>1</sub> and only then acts according to *eof-error-p*. If a file contains ignorable text at the end, such as blank lines and comments, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> does not consider it to end in the middle of an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> is expected to be made from within some function that itself has been called from <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or from a similar input function, rather than from the top level. 



Both functions return the <ClLinks  term={"object"}><i>object</i></ClLinks> read from *input-stream*. *Eof-value* is returned if *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks> and end of file is reached before the beginning of an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



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



**\*standard-input\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink  term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>, **\*read-base\***, <DictionaryLink  term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>, **\*read-eval\***. 



**Exceptional Situations:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink>, regardless of *eof-error-p*, if the file ends in the middle of an <ClLinks  term={"object"}><i>object</i></ClLinks> representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> signals an error. This is detected when <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or <DictionaryLink  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is called with *recursive-p* and *eof-error-p non-nil*, and end-of-file is reached before the beginning of an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled at the end of file. 



**See Also:** 



<DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink>, <DictionaryLink  term={"read-from-string"}><b>read-from-string</b></DictionaryLink>, <DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>, <DictionaryLink  term={"parse-integer"}><b>parse-integer</b></DictionaryLink>, Chapter 2 (Syntax), Section 23.1 (Reader Concepts) 



