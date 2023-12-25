**package-nicknames** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> *package → nicknames* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



<GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of nickname <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, not including the name of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. **Examples:**
```lisp

(package-nicknames (make-package ’temporary 
				  :nicknames ’("TEMP" "temp"))) 
*→* ("temp" "TEMP") 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a *package designator* . 







 



 



