**read, read-preserving-whitespace** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p → object* 



<DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> &amp;optional *input-stream eof-error-p* 



*eof-value recursive-p* 



*→ object* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . 



*eof-error-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (parsed by the *Lisp reader* ) or the *eof-value*. 



**Description:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> parses the printed representation of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from *input-stream* and builds such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is like <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> but preserves any <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that delimits the printed representation of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. <DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is exactly like <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> when the *recursive-p argument* to <DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 







 



 



**read, read-preserving-whitespace** 



When <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> throws away the delimiting <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> required by certain printed representations if it is a <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; but <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> preserves the character (using <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>) if it is syntactically meaningful, because it could be the start of the next expression. 



If a file ends in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> immediately followed by an *end of file*<sub>1</sub>, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> reads the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> successfully; when called again, it sees the *end of file*<sub>1</sub> and only then acts according to *eof-error-p*. If a file contains ignorable text at the end, such as blank lines and comments, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> does not consider it to end in the middle of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the call to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> is expected to be made from within some function that itself has been called from <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or from a similar input function, rather than from the top level. 



Both functions return the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> read from *input-stream*. *Eof-value* is returned if *eof-error-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and end of file is reached before the beginning of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Examples:**
```lisp

(read) 
▷ ’a 
*→* (QUOTE A) 
(with-input-from-string (is " ") (read is nil ’the-end)) *→* THE-END 
(defun skip-then-read-char (s c n) 
  (if (char= c #\\&#123;) (read s t nil t) (read-preserving-whitespace s)) 
	     (read-char-no-hang s)) *→* SKIP-THEN-READ-CHAR 
	     (let ((\*readtable\* (copy-readtable nil))) 
	       (set-dispatch-macro-character #\# #\\&#123; #’skip-then-read-char) 
					     (set-dispatch-macro-character #\# #\\&#125; #’skip-then-read-char) 
									   (with-input-from-string (is "#\&#123;123 x #\&#125;123 y") 
									     (format t "~S ~S" (read is) (read is)))) *→* #\x, #\Space, NIL 
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



**\*standard-input\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>, **\*read-base\***, <DictionaryLink styled={true} term={"read-suppress"}><b>\*read-suppress\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink>, **\*read-eval\***. 



**Exceptional Situations:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink>, regardless of *eof-error-p*, if the file ends in the middle of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> signals an error. This is detected when <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or <DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink> is called with *recursive-p* and *eof-error-p non-nil*, and end-of-file is reached before the beginning of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



If *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled at the end of file. 



**See Also:** 



<DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-from-string"}><b>read-from-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>, <DictionaryLink styled={true} term={"parse-integer"}><b>parse-integer</b></DictionaryLink>, Chapter 2 (Syntax), Section 23.1 (Reader Concepts) 



