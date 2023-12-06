**terpri, fresh-line** *Function* 



**Syntax:** 



**terpri** &amp;optional *output-stream →* **nil** 



**fresh-line** &amp;optional *output-stream → generalized-boolean* 



**Arguments and Values:** 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**terpri** outputs a *newline* to *output-stream*. 



**fresh-line** is similar to **terpri** but outputs a *newline* only if the *output-stream* is not already at the start of a line. If for some reason this cannot be determined, then a *newline* is output anyway. **fresh-line** returns *true* if it outputs a *newline*; otherwise it returns *false*. 



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



**\*standard-output\***, **\*terminal-io\***. 



**Exceptional Situations:** 



None. 







 



 



**Notes:** 



**terpri** is identical in effect to 



(write-char #\Newline output-stream) 



