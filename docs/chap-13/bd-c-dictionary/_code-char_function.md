**code-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"code-char"}><b>code-char</b></ClLinks> *code → char-p* 



**Arguments and Values:** 



<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>—a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm>. 



*char-p*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**Description:** 



Returns a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> with the *code attribute* given by <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. If no such <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> exists and one cannot be created, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



**Examples:**
```lisp
(code-char 65.) → #\A ;in an implementation using ASCII codes 
(code-char (char-code #\Space)) → #\Space ;in any implementation 
```
**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>’s character encoding. 



**See Also:** 



<ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> 



**Notes:** 



