**char-code** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink> *character → code* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>—a *character code*. 



**Description:** 



<DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink> returns the *code attribute* of <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>. 



**Examples:**
```lisp

;; An implementation using ASCII character encoding 
;; might return these values: 
(char-code #\$) *→* 36 
(char-code #\a) *→* 97 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"char-code-limit"}><b>char-code-limit</b></DictionaryLink> 







 



 



