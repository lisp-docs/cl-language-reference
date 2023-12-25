**name-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"name-char"}><b>name-char</b></DictionaryLink> *name → char-p* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *string designator* . 



*char-p*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns the *character object* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (as determined by **string-equal**—*i.e.*, lookup is not case sensitive). If such a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> does not exist, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp

(name-char ’space) *→* #\Space 
(name-char "space") *→* #\Space 
(name-char "Space") *→* #\Space 
(let ((x (char-name #\a))) 
  (or (not x) (eql (name-char x) #\a))) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not a *string designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"char-name"}><b>char-name</b></DictionaryLink> 







 



 





