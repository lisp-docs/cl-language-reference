**read, read-preserving-whitespace** *Function* 



**Syntax:** 



**read** &optional *input-stream eof-error-p eof-value recursive-p → object* 



**read-preserving-whitespace** &optional *input-stream eof-error-p* 



*eof-value recursive-p* 



*→ object* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*recursive-p*—a *generalized boolean*. The default is *false*. 



*object*—an *object* (parsed by the *Lisp reader* ) or the *eof-value*. 



**Description:** 



**read** parses the printed representation of an *object* from *input-stream* and builds such an *object*. 



**read-preserving-whitespace** is like **read** but preserves any *whitespace*<sub>2</sub> *character* that delimits the printed representation of the *object*. **read-preserving-whitespace** is exactly like **read** when the *recursive-p argument* to **read-preserving-whitespace** is *true*. 







 



 



**read, read-preserving-whitespace** 



When **\*read-suppress\*** is *false*, **read** throws away the delimiting *character* required by certain printed representations if it is a *whitespace*<sub>2</sub> *character* ; but **read** preserves the character (using **unread-char**) if it is syntactically meaningful, because it could be the start of the next expression. 



If a file ends in a *symbol* or a *number* immediately followed by an *end of file*<sub>1</sub>, **read** reads the *symbol* or *number* successfully; when called again, it sees the *end of file*<sub>1</sub> and only then acts according to *eof-error-p*. If a file contains ignorable text at the end, such as blank lines and comments, **read** does not consider it to end in the middle of an *object*. 



If *recursive-p* is *true*, the call to **read** is expected to be made from within some function that itself has been called from **read** or from a similar input function, rather than from the top level. 



Both functions return the *object* read from *input-stream*. *Eof-value* is returned if *eof-error-p* is *false* and end of file is reached before the beginning of an *object*. 



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



**\*standard-input\***, **\*terminal-io\***, **\*readtable\***, **\*read-default-float-format\***, **\*read-base\***, **\*read-suppress\***, **\*package\***, **\*read-eval\***. 



**Exceptional Situations:** 



**read** signals an error of *type* **end-of-file**, regardless of *eof-error-p*, if the file ends in the middle of an *object* representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, **read** signals an error. This is detected when **read** or **read-preserving-whitespace** is called with *recursive-p* and *eof-error-p non-nil*, and end-of-file is reached before the beginning of an *object*. 



If *eof-error-p* is *true*, an error of *type* **end-of-file** is signaled at the end of file. 



**See Also:** 



**peek-char**, **read-char**, **unread-char**, **read-from-string**, **read-delimited-list**, **parse-integer**, Chapter 2 (Syntax), Section 23.1 (Reader Concepts) 



