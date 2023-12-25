**terpri, fresh-line** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> &amp;optional *output-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> &amp;optional *output-stream → generalized-boolean* 



**Arguments and Values:** 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> outputs a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> to *output-stream*. 



<DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> is similar to <DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> but outputs a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> only if the *output-stream* is not already at the start of a line. If for some reason this cannot be determined, then a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> is output anyway. <DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if it outputs a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>; otherwise it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(with-output-to-string (s) 
  (write-string "some text" s) 
  (terpri s) 
  (terpri s) 
  (write-string "more text" s)) 
*→* "some text 
more text" 
(with-output-to-string (s) 
  (write-string "some text" s) 
  (fresh-line s) 
  (fresh-line s) 
  (write-string "more text" s)) 
*→* "some text 
more text" 

```
**Side Effects:** 



The *output-stream* is modified. 



**Affected By:** 



**\*standard-output\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



None. 







 



 



**Notes:** 



<DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> is identical in effect to 



(write-char #\Newline output-stream) 



