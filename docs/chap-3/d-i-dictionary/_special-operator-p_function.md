**special-operator-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> *symbol ! generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> ; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(special-operator-p ’if) *! true* 
(special-operator-p ’car) *! false* 
(special-operator-p ’one) *! false* 
```
**Exceptional Situations:** 



Should signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Notes:** 



Historically, this function was called special-form-p. The name was finally declared a misnomer and changed, since it returned true for <GlossaryTerm styled={true} term={"special operator"}><i>special operators</i></GlossaryTerm>, not <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink> 



