**fmakunbound** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink> *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *function name*. 



**Description:** 



Removes the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definition, if any, of <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in the *global environment<GlossaryTerm styled={true} term={"t"}><i>. </i></GlossaryTerm>*Examples:**
```lisp

(defun add-some (x) (+ x 19)) *→* ADD-SOME 
(fboundp ’add-some) *→ true* 
(flet ((add-some (x) (+ x 37))) 
  (fmakunbound ’add-some) 
  (add-some 1)) *→* 38 
(fboundp ’add-some) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is not a *function name*. 



The consequences are undefined if <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *special operator* . 



**See Also:** 



<DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink> 



Data and Control 











**flet, labels, macrolet** 



