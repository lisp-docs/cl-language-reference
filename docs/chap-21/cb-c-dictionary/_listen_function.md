**listen** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"listen"}><b>listen</b></DictionaryLink> &amp;optional *input-stream → generalized-boolean* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if there is a character immediately available from *input-stream*; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. On a non-interactive *input-stream*, <DictionaryLink  term={"listen"}><b>listen</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> except when at <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>1</sub>. If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> is encountered, <DictionaryLink  term={"listen"}><b>listen</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink  term={"listen"}><b>listen</b></DictionaryLink> is intended to be used when *input-stream* obtains characters from an interactive device such as a keyboard. 



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



<DictionaryLink  term={"interactive-stream-p"}><b>interactive-stream-p</b></DictionaryLink>, <DictionaryLink  term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> 







 



 



<DictionaryLink  term={"clear-input"}><b>clear-input</b></DictionaryLink> 



