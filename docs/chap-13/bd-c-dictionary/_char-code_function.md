**char-code** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> *character → code* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>—a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm>. 



**Description:** 



<ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> returns the *code attribute* of <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>. 



**Examples:**
```lisp
;; An implementation using ASCII character encoding 
;; might return these values: 
(char-code #\$) → 36 
(char-code #\a) → 97 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"char-code-limit"}><b>char-code-limit</b></ClLinks> 







 



 



