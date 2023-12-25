**special-operator-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> *symbol ! generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is a *special operator* ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(special-operator-p ’if) *! true* 
(special-operator-p ’car) *! false* 
(special-operator-p ’one) *! false* 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Notes:** 



Historically, this function was called special-form-p. The name was finally declared a misnomer and changed, since it returned true for *special operators*, not *special forms*. 







 



 



<DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink> 



