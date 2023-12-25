**code-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"code-char"}><b>code-char</b></DictionaryLink> *code → char-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>—a *character code*. 



*char-p*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with the *code attribute* given by <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. If no such <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> exists and one cannot be created, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp

(code-char 65.) *→* #\A ;in an implementation using ASCII codes 
(code-char (char-code #\Space)) *→* #\Space ;in any implementation 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>’s character encoding. 



**See Also:** 



<DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink> 



**Notes:** 



