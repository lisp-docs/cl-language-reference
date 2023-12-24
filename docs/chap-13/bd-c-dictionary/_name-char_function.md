**name-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"name-char"}><b>name-char</b></ClLinks> *name → char-p* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *string designator* . 



*char-p*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns the *character object* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (as determined by **string-equal**—*i.e.*, lookup is not case sensitive). If such a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> does not exist, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



**Examples:**
```lisp

(name-char ’space) → #\Space 
(name-char "space") → #\Space 
(name-char "Space") → #\Space 
(let ((x (char-name #\a))) 
  (or (not x) (eql (name-char x) #\a))) → true 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is not a *string designator* . 



**See Also:** 



<ClLinks styled={true} term={"char-name"}><b>char-name</b></ClLinks> 







 



 





