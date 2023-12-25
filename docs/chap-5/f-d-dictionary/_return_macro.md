**return** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> [*result*] *→* 



**Arguments and Values:** 



*result*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns, as if by <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, from the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(block nil (return) 1) *→* NIL 
(block nil (return 1) 2) *→* 1 
(block nil (return (values 1 2)) 3) *→* 1, 2 
(block nil (block alpha (return 1) 2)) *→* 1 
(block alpha (block nil (return 1)) 2) *→* 2 
(block nil (block nil (return 1) 2)) *→* 1 

```
**See Also:** 



<DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



(return) *≡* (return-from nil) 



(return <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) *≡* (return-from nil <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) 



The *implicit blocks established* by <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> are often named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, so that <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> can be used to exit from such <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



Data and Control 











<DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> 



