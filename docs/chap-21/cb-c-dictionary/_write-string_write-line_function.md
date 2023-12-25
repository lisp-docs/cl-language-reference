**write-string, write-line** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"write-string"}><b>write-string</b></ClLinks> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *output-stream* &amp;key *start end → string* 



<ClLinks  term={"write-line"}><b>write-line</b></ClLinks> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *output-stream* &amp;key *start end → string* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*start*, *end*—*bounding index designators* of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



**Description:** 



<ClLinks  term={"write-string"}><b>write-string</b></ClLinks> writes the <ClLinks  term={"character"}><i>characters</i></ClLinks> of the subsequence of *string bounded* by *start* and *end* to *output-stream*. <ClLinks  term={"write-line"}><b>write-line</b></ClLinks> does the same thing, but then outputs a newline afterwards. 



**Examples:**
```lisp
(prog1 (write-string "books" nil :end 4) (write-string "worms")) 
▷ bookworms 
→ "books" 
(progn (write-char #\\*) 
       (write-line "test12" \*standard-output\* :end 5) 
       (write-line "\*test2") 
       (write-char #\\*) 
       nil) 
▷ \*test1 

▷ \*test2 
▷ \* 
→ NIL 
```
**Affected By:** 



**\*standard-output\***, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"read-line"}><b>read-line</b></ClLinks>, <ClLinks  term={"write-char"}><b>write-char</b></ClLinks> 



**Notes:** 



<ClLinks  term={"write-line"}><b>write-line</b></ClLinks> and <ClLinks  term={"write-string"}><b>write-string</b></ClLinks> return <ClLinks  term={"string"}><i>string</i></ClLinks>, not the substring <ClLinks  term={"bounded"}><i>bounded</i></ClLinks> by *start* and *end*. 



(write-string string) 



*≡* (dotimes (i (length string) 



(write-char (char string i))) 



(write-line string) 



*≡* (prog1 (write-string string) (terpri)) 



