**package-nicknames** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"package-nicknames"}><b>package-nicknames</b></ClLinks> *package → nicknames* 



**Arguments and Values:** 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . 



<ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>. 



**Description:** 



Returns the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of nickname <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> for <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, not including the name of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 

**Examples:**
```lisp
(package-nicknames (make-package ’temporary 
				  :nicknames ’("TEMP" "temp"))) 
→ ("temp" "TEMP") 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not a *package designator* . 







 



 



