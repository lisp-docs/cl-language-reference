**write-string, write-line** *Function* 



**Syntax:** 



**write-string** *string* &amp;optional *output-stream* &amp;key *start end → string* 



**write-line** *string* &amp;optional *output-stream* &amp;key *start end → string* 



**Arguments and Values:** 



*string*—a *string*. 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*start*, *end*—*bounding index designators* of *string*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



**Description:** 



**write-string** writes the *characters* of the subsequence of *string bounded* by *start* and *end* to *output-stream*. **write-line** does the same thing, but then outputs a newline afterwards. 



**Examples:**
```lisp
 



(prog1 (write-string "books" nil :end 4) (write-string "worms")) 



▷ bookworms 



*→* "books" 



(progn (write-char #\\*) 



(write-line "test12" \*standard-output\* :end 5) 



(write-line "\*test2") 



(write-char #\\*) 



nil) 



▷ \*test1 







 



 



▷ \*test2 



▷ \* 



*→* NIL 




```
**Affected By:** 



**\*standard-output\***, **\*terminal-io\***. 



**See Also:** 



**read-line**, **write-char** 



**Notes:** 



**write-line** and **write-string** return *string*, not the substring *bounded* by *start* and *end*. 



(write-string string) 



*≡* (dotimes (i (length string) 



(write-char (char string i))) 



(write-line string) 



*≡* (prog1 (write-string string) (terpri)) 



