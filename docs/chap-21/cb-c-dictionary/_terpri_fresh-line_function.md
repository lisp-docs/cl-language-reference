**terpri, fresh-line** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> &amp;optional *output-stream → generalized-boolean* 



**Arguments and Values:** 



*output-stream* – an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> outputs a <ClLinks  term={"newline"}><i>newline</i></ClLinks> to *output-stream*. 



<DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> is similar to <DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> but outputs a <ClLinks  term={"newline"}><i>newline</i></ClLinks> only if the *output-stream* is not already at the start of a line. If for some reason this cannot be determined, then a <ClLinks  term={"newline"}><i>newline</i></ClLinks> is output anyway. <DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if it outputs a <ClLinks  term={"newline"}><i>newline</i></ClLinks>; otherwise it returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(with-output-to-string (s) 
  (write-string "some text" s) 
  (terpri s) 
  (terpri s) 
  (write-string "more text" s)) 
→ "some text 
more text" 
(with-output-to-string (s) 
  (write-string "some text" s) 
  (fresh-line s) 
  (fresh-line s) 
  (write-string "more text" s)) 
→ "some text 
more text" 
```
**Side Effects:** 



The *output-stream* is modified. 



**Affected By:** 



**\*standard-output\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



None. 







 



 



**Notes:** 



<DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> is identical in effect to 



(write-char #\Newline output-stream) 



