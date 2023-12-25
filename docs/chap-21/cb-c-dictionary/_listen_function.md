**listen** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"listen"}><b>listen</b></ClLinks> &amp;optional *input-stream → generalized-boolean* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if there is a character immediately available from *input-stream*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. On a non-interactive *input-stream*, <ClLinks  term={"listen"}><b>listen</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> except when at *end of file*<sub>1</sub>. If an *end of file* is encountered, <ClLinks  term={"listen"}><b>listen</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks>. <ClLinks  term={"listen"}><b>listen</b></ClLinks> is intended to be used when *input-stream* obtains characters from an interactive device such as a keyboard. 



**Examples:**
```lisp
(progn (unread-char (read-char)) (list (listen) (read-char))) 
▷ 1 
→ (T #\1) 
(progn (clear-input) (listen)) 
→ NIL ;Unless you’re a very fast typist! 
```
**Affected By:** 



**\*standard-input\*** 



**See Also:** 



<ClLinks  term={"interactive-stream-p"}><b>interactive-stream-p</b></ClLinks>, <ClLinks  term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> 







 



 



<ClLinks  term={"clear-input"}><b>clear-input</b></ClLinks> 



