**package-nicknames** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-nicknames"}><b>package-nicknames</b></DictionaryLink> *package → nicknames* 



**Arguments and Values:** 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"nickname"}><i>nicknames</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of nickname <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> for <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, not including the name of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 

**Examples:**
```lisp
(package-nicknames (make-package ’temporary 
				  :nicknames ’("TEMP" "temp"))) 
→ ("temp" "TEMP") 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 







 



 



