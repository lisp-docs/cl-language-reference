**fmakunbound** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink> *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Description:** 



Removes the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition, if any, of <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 

**Examples:**
```lisp
(defun add-some (x) (+ x 19)) → ADD-SOME 
(fboundp ’add-some) → true 
(flet ((add-some (x) (+ x 37))) 
  (fmakunbound ’add-some) 
  (add-some 1)) → 38 
(fboundp ’add-some) → false 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



The consequences are undefined if <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink> 



Data and Control 











<DictionaryLink styled={true} term={"flet, labels, macrolet"}><b>flet, labels, macrolet</b></DictionaryLink> 



