**package-nicknames** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> *package → nicknames* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<ClLinks  term={"nickname"}><i>nicknames</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"string"}><i>strings</i></ClLinks>. 



**Description:** 



Returns the <ClLinks  term={"list"}><i>list</i></ClLinks> of nickname <ClLinks  term={"string"}><i>strings</i></ClLinks> for <ClLinks  term={"package"}><i>package</i></ClLinks>, not including the name of <ClLinks  term={"package"}><i>package</i></ClLinks>. 

**Examples:**
```lisp
(package-nicknames (make-package ’temporary 
				  :nicknames ’("TEMP" "temp"))) 
→ ("temp" "TEMP") 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 







 



 



