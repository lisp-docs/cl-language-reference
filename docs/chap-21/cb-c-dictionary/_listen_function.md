**listen** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"listen"}><b>listen</b></DictionaryLink> &amp;optional *input-stream → generalized-boolean* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if there is a character immediately available from *input-stream*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. On a non-interactive *input-stream*, <DictionaryLink styled={true} term={"listen"}><b>listen</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> except when at *end of file*<sub>1</sub>. If an *end of file* is encountered, <DictionaryLink styled={true} term={"listen"}><b>listen</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"listen"}><b>listen</b></DictionaryLink> is intended to be used when *input-stream* obtains characters from an interactive device such as a keyboard. 



**Examples:**
```lisp

(progn (unread-char (read-char)) (list (listen) (read-char))) 
▷ 1 
*→* (T #\1) 
(progn (clear-input) (listen)) 
*→* NIL ;Unless you’re a very fast typist! 

```
**Affected By:** 



**\*standard-input\*** 



**See Also:** 



<DictionaryLink styled={true} term={"interactive-stream-p"}><b>interactive-stream-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"clear-input"}><b>clear-input</b></DictionaryLink> 



