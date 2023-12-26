**write-string, write-line** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"write-string"}><b>write-string</b></DictionaryLink> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *output-stream* &amp;key *start end → string* 



<DictionaryLink  term={"write-line"}><b>write-line</b></DictionaryLink> <ClLinks  term={"string"}><i>string</i></ClLinks> &amp;optional *output-stream* &amp;key *start end → string* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*output-stream* – an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



**Description:** 



<DictionaryLink  term={"write-string"}><b>write-string</b></DictionaryLink> writes the <ClLinks  term={"character"}><i>characters</i></ClLinks> of the subsequence of *string bounded* by *start* and *end* to *output-stream*. <DictionaryLink  term={"write-line"}><b>write-line</b></DictionaryLink> does the same thing, but then outputs a newline afterwards. 



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



**\*standard-output\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"read-line"}><b>read-line</b></DictionaryLink>, <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"write-line"}><b>write-line</b></DictionaryLink> and <DictionaryLink  term={"write-string"}><b>write-string</b></DictionaryLink> return <ClLinks  term={"string"}><i>string</i></ClLinks>, not the substring <ClLinks  term={"bounded"}><i>bounded</i></ClLinks> by *start* and *end*. 



(write-string string) 



*≡* (dotimes (i (length string) 



(write-char (char string i))) 



(write-line string) 



*≡* (prog1 (write-string string) (terpri)) 



