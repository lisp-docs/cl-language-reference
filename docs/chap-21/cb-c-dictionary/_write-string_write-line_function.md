**write-string, write-line** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write-string"}><b>write-string</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *output-stream* &amp;key *start end → string* 



<DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *output-stream* &amp;key *start end → string* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*output-stream* – an *output stream designator* . The default is *standard output*. 



*start*, *end*—*bounding index designators* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



**Description:** 



<DictionaryLink styled={true} term={"write-string"}><b>write-string</b></DictionaryLink> writes the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> of the subsequence of *string bounded* by *start* and *end* to *output-stream*. <DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink> does the same thing, but then outputs a newline afterwards. 



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



**\*standard-output\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink> and <DictionaryLink styled={true} term={"write-string"}><b>write-string</b></DictionaryLink> return <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, not the substring <GlossaryTerm styled={true} term={"bounded"}><i>bounded</i></GlossaryTerm> by *start* and *end*. 



(write-string string) 



*≡* (dotimes (i (length string) 



(write-char (char string i))) 



(write-line string) 



*≡* (prog1 (write-string string) (terpri)) 



