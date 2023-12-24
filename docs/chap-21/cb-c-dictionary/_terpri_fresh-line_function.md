**terpri, fresh-line** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> &amp;optional *output-stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



<ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> &amp;optional *output-stream → generalized-boolean* 



**Arguments and Values:** 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> outputs a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> to *output-stream*. 



<ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> is similar to <ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> but outputs a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> only if the *output-stream* is not already at the start of a line. If for some reason this cannot be determined, then a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> is output anyway. <ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if it outputs a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>; otherwise it returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



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



**\*standard-output\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



None. 







 



 



**Notes:** 



<ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> is identical in effect to 



(write-char #\Newline output-stream) 



