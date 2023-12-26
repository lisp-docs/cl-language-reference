**fmakunbound** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink> *name → name* 



**Pronunciation:** 



[ **ef mak*** **n ba\_und** ] or [ **ef m—ak*** **n ba\_und** ] 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Description:** 



Removes the <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition, if any, of <ClLinks  term={"name"}><i>name</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 

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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"name"}><i>name</i></ClLinks> is not a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



The consequences are undefined if <ClLinks  term={"name"}><i>name</i></ClLinks> is a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>, <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink> 



Data and Control 











<DictionaryLink styled={true} term={"flet, labels, macrolet"}><b>flet, labels, macrolet</b></DictionaryLink> 



